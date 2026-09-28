import { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { guidelines, renderGuidelineMarkdown } from '../data/guidelines';

import Troubleshooting from './Troubleshooting';
import PageLayout from '../components/PageLayout';
import ImageLightbox from '../components/ImageLightbox';

import { Typography, CircularProgress, Box } from '@mui/material';

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

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState('en');
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    const savedLang = localStorage.getItem('mysztech_lang');
    if (savedLang) setLanguage(savedLang);
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
    
    const results = [];
    
    articles.forEach(item => {
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
          id: item._sys.filename,
          type: matchType,
          articleId: item._sys.filename,
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
    setSearchParams({ id: result.articleId });
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
  
  // Cari artikel yang sedang dipilih berdasarkan nama fail (_sys.filename)
  let selectedArticle = null;
  if (!isTroubleshootActive) {
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
      ) : selectedArticle ? (
        <Box>
          <Typography variant="h2" sx={{ fontFamily: "'Sora', sans-serif", color: theme.textMain, fontWeight: '700', mb: 4, letterSpacing: '-1px', fontSize: { xs: '32px', md: '42px' }, maxWidth: '850px' }}>
            {selectedArticle.title}
          </Typography>
          
          <Box sx={{ color: theme.textBody, fontFamily: "'Inter', sans-serif", lineHeight: 1.8 }}>
            {selectedArticle.body ? (
              <Box 
                className="tina-content"
                onClick={handleContentImageClick}
                sx={{
                  '& img': {
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    my: 3,               
                    display: 'block',
                    border: `1px solid ${theme.border}`,
                    cursor: 'zoom-in',
                    transition: 'opacity 0.2s ease',
                    '&:hover': { opacity: 0.88 },
                  }
                }}
              >
                <Box
                  dangerouslySetInnerHTML={{ __html: renderGuidelineMarkdown(selectedArticle.body) }}
                />
              </Box>
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
