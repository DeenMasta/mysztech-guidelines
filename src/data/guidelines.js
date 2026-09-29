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

const releaseNoteFiles = import.meta.glob('../../content/release-notes/*.md', {
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

const releaseVersionPattern = /^\d+\.\d+\.\d+$/;
const releaseDatePattern = /^\d{4}-\d{2}-\d{2}$/;

const isValidReleaseDate = (value) => {
  if (typeof value !== 'string' || !releaseDatePattern.test(value)) return false;

  const [year, month, day] = value.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.getUTCFullYear() === year
    && date.getUTCMonth() === month - 1
    && date.getUTCDate() === day;
};

const compareReleaseVersions = (first, second) => {
  const dateDifference = second.releaseDate.localeCompare(first.releaseDate);
  if (dateDifference !== 0) return dateDifference;

  const firstParts = first.version.split('.').map(Number);
  const secondParts = second.version.split('.').map(Number);

  for (let index = 0; index < firstParts.length; index += 1) {
    if (firstParts[index] !== secondParts[index]) {
      return secondParts[index] - firstParts[index];
    }
  }

  return 0;
};

const parsedReleaseNotes = Object.entries(releaseNoteFiles)
  .map(([path, source]) => parseDocument(path, source));

const seenReleaseVersions = new Set();
parsedReleaseNotes.forEach((releaseNote) => {
  if (!releaseVersionPattern.test(releaseNote.version || '')) {
    throw new Error(`Release note ${releaseNote._sys.filename} must have a semantic version such as 2.2.2.`);
  }

  if (!isValidReleaseDate(releaseNote.releaseDate)) {
    throw new Error(`Release note ${releaseNote.version} must have a valid ISO releaseDate (YYYY-MM-DD).`);
  }

  if (seenReleaseVersions.has(releaseNote.version)) {
    throw new Error(`Duplicate release-note version: ${releaseNote.version}.`);
  }

  seenReleaseVersions.add(releaseNote.version);
});

export const releaseNotes = parsedReleaseNotes.sort(compareReleaseVersions);

export const renderGuidelineMarkdown = (source) => (
  markdown.render((source || '').replaceAll('http://localhost:5173', ''))
);
