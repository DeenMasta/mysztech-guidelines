# Release Notes Archive Plan

## Goal

Keep every published release note as a separate, permanent record, while the
existing **Release Note** sidebar item continues to open the newest release by
default and gives users a simple way to browse older versions.

## Recommended design

- Preserve `content/guidelines/PROLOGUE/Release-Note.md` as the existing
  sidebar/landing document, so current links remain valid.
- Store each release note in a new versioned content directory:
  `Mysztech-Frontend/content/release-notes/<version>.md`.
- Require each note to include frontmatter such as `version` and an ISO
  `releaseDate`, then keep its What's New and Bug Fix content in the Markdown
  body. A release can therefore never overwrite an older one.
- Treat Git as a secondary audit trail; the versioned Markdown files are the
  published archive. Do not create historical notes from guesswork: the Git
  history has no older release-note bodies before 2.2.2.

## Implementation steps

1. Add the archive folder and migrate the current 2.2.2 content from
   `content/guidelines/PROLOGUE/Release-Note.md` to
   `content/release-notes/2.2.2.md`. Populate prior versions only from a
   verified source.
2. Extend `src/data/guidelines.js` (or a small shared content parser extracted
   from it) to eagerly load the archive Markdown files, parse their frontmatter,
   validate duplicate/malformed versions and dates, and export `releaseNotes`
   sorted newest first by release date and semantic version.
3. Update `src/pages/Documentation.jsx` to render the Release Note landing
   view when `id=Release-Note`:
   - no `version` query parameter: show the newest note;
   - `version=<version>`: show that exact archived note;
   - render a visible version/date archive list plus Previous/Next release
     controls;
   - show an explicit unavailable-version message and archive links for an
     unknown version rather than silently falling back to another note.
4. Use shareable URLs such as `/docs?id=Release-Note&version=2.2.2`. Existing
   `/docs?id=Release-Note` links keep opening the latest release. Keep the
   sidebar as a single Release Note item in `src/components/Sidebar.jsx`; its
   current active-state logic will continue to work.
5. Extend the documentation search in `Documentation.jsx` so each archived
   release is independently searchable. Search-result navigation must set both
   the `id` and `version` query parameters.
6. Document the editorial workflow: create a new versioned Markdown file for
   every release, never edit an already-published release except for a clearly
   labelled correction, and review dates/version uniqueness before deploy.

## Critical files

- `Mysztech-Frontend/content/guidelines/PROLOGUE/Release-Note.md`
- `Mysztech-Frontend/content/release-notes/*.md` (new)
- `Mysztech-Frontend/src/data/guidelines.js`
- `Mysztech-Frontend/src/pages/Documentation.jsx`
- `Mysztech-Frontend/src/components/Sidebar.jsx`

## Verification

1. Confirm the current Release Note sidebar link opens the newest note.
2. Open an older note directly by URL, reload it, and use browser back/forward.
3. Confirm the sidebar stays highlighted, archive entries are newest-first, and
   Previous/Next navigation is correct on desktop and mobile in both themes.
4. Search for text unique to an older release and verify the result opens that
   exact version.
5. Verify duplicate/malformed metadata and an unknown version produce clear
   errors or an unavailable state.
6. Run `npm run build` and `npm run lint` from `Mysztech-Frontend`.
