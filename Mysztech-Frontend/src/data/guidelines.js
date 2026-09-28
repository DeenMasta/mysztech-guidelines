import MarkdownIt from 'markdown-it';

const markdown = new MarkdownIt({
  html: false,
  linkify: true,
});

const markdownFiles = import.meta.glob('../../content/guidelines/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

const parseValue = (value) => {
  const unquoted = value.trim().replace(/^['"]|['"]$/g, '');

  if (unquoted === 'true') return true;
  if (unquoted === 'false') return false;
  if (unquoted !== '' && !Number.isNaN(Number(unquoted))) return Number(unquoted);

  return unquoted;
};

const parseDocument = (path, source) => {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  const frontmatter = {};
  const body = match ? match[2] : source;

  if (match) {
    match[1].split(/\r?\n/).forEach((line) => {
      const separator = line.indexOf(':');
      if (separator === -1) return;

      const key = line.slice(0, separator).trim();
      const value = line.slice(separator + 1);
      frontmatter[key] = parseValue(value);
    });
  }

  const filename = path.split('/').pop().replace(/\.md$/, '');

  return {
    ...frontmatter,
    body,
    _sys: { filename },
  };
};

export const guidelines = Object.entries(markdownFiles)
  .map(([path, source]) => parseDocument(path, source))
  .sort((first, second) => (first.order || 99) - (second.order || 99));

export const renderGuidelineMarkdown = (source) => (
  markdown.render((source || '').replaceAll('http://localhost:5173', ''))
);
