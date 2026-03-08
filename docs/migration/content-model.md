# Content Model Baseline

## Source of truth

- Portfolio content: `data/portfolio/**/*.md`
- Locale + menu metadata: `data/localeGlobals.js`
- Site defaults: `data/config.js`, `gatsby-config.js`
- UI copy/translations: `data/translations/*.js`
- Skills dataset: `data/skills.js`

## Markdown frontmatter schema (portfolio)

Required fields currently used by Gatsby templates:

- `path` (string): final route URL for detail page
- `date` (string/date): publication/project date
- `title` (string): page title
- `description` (string): summary used in lists/SEO
- `lang` (`es` | `en`): content language
- `tags` (string[]): project tags and labels
- `hreflangs` (string[]): language alternates using `locale%%/url/` format

Rendered template baseline is in `src/templates/portfolio.js`.

## Locale and navigation model

`data/localeGlobals.js` stores:

- `siteMetaData`: title + shortTitle per language
- `menuList`: menu definitions per language with
  - `uniqueId`
  - `route`
  - `lang`
  - `sortOrder`
  - `disabled`

In Gatsby, `gatsby-node.js` builds per-menu `hrefLangs` arrays used by layout and topbar language switchers.

## Translation model

Each page/section uses plain JS translation dictionaries, for example:

- `data/translations/homePage.js`
- `data/translations/projectsPage.js`
- `data/translations/projectPage.js`

Migration requirement: keep these files usable as initial source to avoid copy regressions.

## Asset model

- Public static files currently in `static/` (favicons, robots, docs, scripts)
- Content images are co-located with markdown files in `data/portfolio/**`
- Shared UI images in `data/images/**`

Migration requirement: keep public URLs stable (same paths) for downloads and media references.

## Next.js Phase 1 target model

- Introduce content adapters under `src/lib/content/`:
  - `portfolio.ts|js`: load and parse markdown/frontmatter
  - `locales.ts|js`: menu + metadata normalization
  - `translations.ts|js`: translation lookup helpers
- Use markdown `path` as canonical route contract.
- Validate all `hreflangs` entries map to existing routes.
