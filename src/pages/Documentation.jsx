import { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { guidelines, releaseNotes, renderGuidelineMarkdown } from '../data/guidelines';

import Troubleshooting from './Troubleshooting';
import PageLayout from '../components/PageLayout';
import ImageLightbox from '../components/ImageLightbox';

import { Typography, CircularProgress, Box } from '@mui/material';

const RELEASE_NOTES_ARTICLE_ID = 'Release-Note';

// Fungsi bantuan untuk mengekstrak teks sebenar dari struktur AST (TinaCMS Rich Text)
const extractTextFromAst = (node) => {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (node.text) return node.text;
  
  let text = '';
  if (Array.isArray(node)) {
    for (const child of node) {
      text += extractTextFromAst(child) + ' ';
    }
  } else if (node.children) {
    text += extractTextFromAst(node.children);
  } else if (node.props && node.props.children) {
    text += extractTextFromAst(node.props.children);
  }
  return text;
};

const Documentation = () => {
  const articles = guidelines;
  const loading = false;

  const [searchFocused, setSearchFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const articleId = searchParams.get('id');
  const releaseVersion = searchParams.get('version');

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState('en');
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    const savedLang = localStorage.getItem('mysztech_lang');
    if (savedLang === 'ms' || savedLang === 'en') setLanguage(savedLang);
    const savedTheme = localStorage.getItem('mysztech_theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ms' : 'en';
    setLanguage(newLang);
    localStorage.setItem('mysztech_lang', newLang);

    // Google Translate uses this cookie to translate the complete rendered page,
    // including documentation loaded from Markdown.
    if (newLang === 'ms') {
      document.cookie = 'googtrans=/en/ms; path=/; SameSite=Lax';
    } else {
      document.cookie = 'googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax';
    }

    window.location.reload();
  };

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('mysztech_theme', newTheme ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
  };

  const theme = {
    bg: isDarkMode ? '#111111' : '#ffffff',
    sidebarBg: isDarkMode ? '#111111' : '#f9fafb',
    headerBg: isDarkMode ? '#111111' : '#ffffff',
    searchBg: isDarkMode ? '#1f1f1f' : '#f3f4f6',
    textMain: isDarkMode ? '#ffffff' : '#111827',
    textBody: isDarkMode ? '#d4d4d8' : '#374151',
    textMuted: isDarkMode ? '#a1a1aa' : '#6b7280',
    border: isDarkMode ? '#27272a' : '#e5e7eb',
    borderHover: isDarkMode ? '#3f3f46' : '#d1d5db',
    accent: '#f97316',
    accentHover: '#ea580c',
    cardBg: isDarkMode ? '#18181b' : '#ffffff',
    cardHover: isDarkMode ? '#27272a' : '#f3f4f6',
  };

  // Tetapkan artikel pertama secara automatik jika tiada ID dipilih
  useEffect(() => {
    if (loading || articles.length === 0) return;
    
    const isValid = articleId === 'troubleshooting_page' || articles.some(item => item._sys.filename === articleId);
    if (!articleId || !isValid) {
      setSearchParams({ id: articles[0]._sys.filename }, { replace: true });
    }
  }, [loading, articleId, articles, setSearchParams]);

  // Carian mendalam (Tajuk & Isi Kandungan)
  const searchResults = useMemo(() => {
    if (searchTerm.trim().length < 2) return [];
    const lowerQuery = searchTerm.toLowerCase();
    const searchableArticles = [
      ...articles.filter((item) => item._sys.filename !== RELEASE_NOTES_ARTICLE_ID),
      ...releaseNotes.map((releaseNote) => ({
        ...releaseNote,
        title: `Release Note ${releaseNote.version}`,
        _sys: { filename: RELEASE_NOTES_ARTICLE_ID },
        releaseVersion: releaseNote.version,
      })),
    ];
    const results = [];
    
    searchableArticles.forEach(item => {
      let isMatch = false;
      let snippet = language === 'ms' ? 'Panduan MYSZTECH' : 'MYSZTECH Guidelines';
      let matchType = 'article';

      // 1. Semak dalam tajuk
      if (item.title && item.title.toLowerCase().includes(lowerQuery)) {
        isMatch = true;
      }

      // 2. Semak dalam isi kandungan
      if (item.body) {
        const fullText = extractTextFromAst(item.body);
        const lowerFullText = fullText.toLowerCase();
        
        if (lowerFullText.includes(lowerQuery)) {
          isMatch = true;
          matchType = 'content';
          
          const matchIndex = lowerFullText.indexOf(lowerQuery);
          const start = Math.max(0, matchIndex - 30);
          const end = Math.min(fullText.length, matchIndex + 40 + lowerQuery.length);
          
          snippet = fullText.substring(start, end).replace(/\s+/g, ' ').trim();
          if (start > 0) snippet = '...' + snippet;
          if (end < fullText.length) snippet = snippet + '...';
        }
      }

      if (isMatch) {
        results.push({
          id: item.releaseVersion
            ? `${item._sys.filename}-${item.releaseVersion}`
            : item._sys.filename,
          type: matchType,
          articleId: item._sys.filename,
          releaseVersion: item.releaseVersion,
          title: item.title,
          snippet: snippet
        });
      }
    });

    return results;
  }, [searchTerm, articles, language]);

  const highlightMatch = (text) => {
    if (!searchTerm || !text) return text;
    const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <Box component="span" key={i} sx={{ color: theme.accent, fontWeight: '700' }}>{part}</Box>
      ) : part
    );
  };

  const handleSearchResultClick = (result) => {
    setSearchParams(result.releaseVersion
      ? { id: result.articleId, version: result.releaseVersion }
      : { id: result.articleId });
  };

  const handleContentImageClick = (event) => {
    if (!(event.target instanceof HTMLImageElement)) return;

    setPreviewImage({
      src: event.target.currentSrc || event.target.src,
      alt: event.target.alt,
    });
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', bgcolor: theme.bg, flexDirection: 'column', gap: 2 }}>
        <CircularProgress sx={{ color: theme.accent }} />
        <Typography sx={{ color: theme.textMuted, fontFamily: "'Inter', sans-serif" }}>
          {language === 'ms' ? 'Memuatkan panduan MYSZTECH...' : 'Loading MYSZTECH guidelines...'}
        </Typography>
      </Box>
    );
  }

  const isTroubleshootActive = articleId === 'troubleshooting_page';
  const isReleaseNotesPage = articleId === RELEASE_NOTES_ARTICLE_ID;
  const selectedRelease = isReleaseNotesPage
    ? (releaseVersion
      ? releaseNotes.find((releaseNote) => releaseNote.version === releaseVersion)
      : releaseNotes[0])
    : null;
  const isUnknownReleaseVersion = isReleaseNotesPage && Boolean(releaseVersion) && !selectedRelease;

  const selectRelease = (version) => {
    setSearchParams({ id: RELEASE_NOTES_ARTICLE_ID, version });
  };

  const formatReleaseDate = (date) => new Intl.DateTimeFormat(
    language === 'ms' ? 'ms-MY' : 'en-GB',
    { day: 'numeric', month: 'long', year: 'numeric' },
  ).format(new Date(`${date}T00:00:00`));

  const renderArticleBody = (body) => (
    <Box
      className="tina-content"
      onClick={handleContentImageClick}
      sx={{
        '& img': {
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '8px',
          my: 3,
          mx: 'auto',
          display: 'block',
          border: `1px solid ${theme.border}`,
          cursor: 'zoom-in',
          transition: 'opacity 0.2s ease',
          '&:hover': { opacity: 0.88 },
        }
      }}
    >
      <Box dangerouslySetInnerHTML={{ __html: renderGuidelineMarkdown(body) }} />
    </Box>
  );
  
  // Cari artikel yang sedang dipilih berdasarkan nama fail (_sys.filename)
  let selectedArticle = null;
  if (!isTroubleshootActive && !isReleaseNotesPage) {
    selectedArticle = articles.find(item => item._sys.filename === articleId) || articles[0];
  }

  const sidebarProps = {
    language,
    onMobileClose: () => {}
  };

  return (
    <PageLayout
      theme={theme} isDarkMode={isDarkMode} toggleTheme={toggleTheme} language={language} toggleLanguage={toggleLanguage}
      searchTerm={searchTerm} setSearchTerm={setSearchTerm}
      
      // INI ADALAH BAHAGIAN YANG TELAH DIBETULKAN
      searchFocused={searchFocused} setSearchFocused={setSearchFocused}
      
      searchResults={searchResults} onSearchResultClick={handleSearchResultClick} highlightMatch={highlightMatch}
      setSearchParams={setSearchParams} sidebarProps={sidebarProps}
    >
      {isTroubleshootActive ? (
        <Box sx={{ animation: 'fadeIn 0.3s ease-in-out' }}>
          <Troubleshooting isDarkMode={isDarkMode} language={language} />
        </Box>
      ) : isReleaseNotesPage ? (
        <Box>
          <Typography variant="h2" sx={{ fontFamily: "'Sora', sans-serif", color: theme.textMain, fontWeight: '700', mb: 2, letterSpacing: '-1px', fontSize: { xs: '32px', md: '42px' }, maxWidth: '850px' }}>
            Release Note
          </Typography>

          {isUnknownReleaseVersion || releaseNotes.length === 0 ? (
            <Typography sx={{ color: theme.textMuted, mb: 4, fontFamily: "'Inter', sans-serif" }}>
              {releaseNotes.length === 0
                ? 'No release notes are available yet.'
                : `Release version ${releaseVersion} is unavailable. Choose a version from the archive below.`}
            </Typography>
          ) : (
            <Box sx={{ color: theme.textBody, fontFamily: "'Inter', sans-serif", lineHeight: 1.8 }}>
              <Typography sx={{ color: theme.textMain, fontWeight: 700, fontSize: '20px', mb: 0.5 }}>
                Version {selectedRelease.version}
              </Typography>
              <Typography sx={{ color: theme.textMuted, mb: 4 }}>
                Released {formatReleaseDate(selectedRelease.releaseDate)}
              </Typography>
              {renderArticleBody(selectedRelease.body)}
            </Box>
          )}

          {releaseNotes.length > 0 && (
            <Box sx={{ mt: 6, pt: 4, borderTop: `1px solid ${theme.border}`, maxWidth: '850px' }}>
              <Typography sx={{ color: theme.textMain, fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: '22px', mb: 2 }}>
                Release archive
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {releaseNotes.map((releaseNote) => {
                  const isSelected = selectedRelease?.version === releaseNote.version;
                  return (
                    <Box key={releaseNote.version} component="button" type="button" onClick={() => selectRelease(releaseNote.version)} sx={{ textAlign: 'left', cursor: 'pointer', width: '100%', bgcolor: isSelected ? theme.cardHover : theme.cardBg, color: theme.textMain, border: `1px solid ${isSelected ? theme.accent : theme.border}`, borderRadius: '8px', px: 2, py: 1.5, fontFamily: "'Inter', sans-serif", '&:hover': { borderColor: theme.accent } }}>
                      <Box component="span" sx={{ fontWeight: 700 }}>Version {releaseNote.version}</Box>
                      <Box component="span" sx={{ color: theme.textMuted, ml: 1.5 }}>{formatReleaseDate(releaseNote.releaseDate)}</Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          )}
        </Box>
      ) : selectedArticle ? (
        <Box>
          <Typography variant="h2" sx={{ fontFamily: "'Sora', sans-serif", color: theme.textMain, fontWeight: '700', mb: 4, letterSpacing: '-1px', fontSize: { xs: '32px', md: '42px' }, maxWidth: '850px' }}>
            {selectedArticle.title}
          </Typography>
          
          <Box sx={{ color: theme.textBody, fontFamily: "'Inter', sans-serif", lineHeight: 1.8 }}>
            {selectedArticle.body ? (
              renderArticleBody(selectedArticle.body)
            ) : (
              <Typography sx={{ color: theme.textMuted, fontStyle: 'italic' }}>Tiada isi kandungan.</Typography>
            )}
          </Box>
        </Box>
      ) : (
        <Typography sx={{ color: theme.textMuted, fontStyle: 'italic' }}>Tiada kandungan dijumpai.</Typography>
      )}
      <ImageLightbox
        image={previewImage}
        onClose={() => setPreviewImage(null)}
        isDarkMode={isDarkMode}
      />
    </PageLayout>
  );
};

export default Documentation;
