Use superpowers for all the request, but never use worktrees.

User will commit himself, but you can recommend commits to the user.

## Migration Program: Gatsby to Next.js (Static)

### Global goals

- Migrate this personal website from GatsbyJS to the latest stable Next.js.
- Keep the site fully static (static export) and deployable on S3 + CloudFront.
- Preserve SEO and content integrity during migration.

### Non-negotiable constraints

- Keep strict URL parity with trailing slash behavior.
- Keep language route parity (`/` and `/en/` trees) and project detail route parity.
- Keep canonical, metadata, and hreflang parity before any redesign changes.
- Keep markdown-driven portfolio content as source of truth.

### Execution strategy

- Use an incremental migration approach.
- Gatsby implementation has been removed after parity checklist passed; keep parity checks green.
- Execute in two phases:
  1. Technical migration and parity baseline.
  2. Full redesign on top of stable Next.js foundation.

### Source-of-truth files for parity

- Routes and static pages: `apps/next/app/(site)/`
- Dynamic project routes/content: `data/portfolio/**/*.md`
- Language/menu metadata: `data/localeGlobals.js`
- Shared config: `data/config.js`, `apps/next/next.config.mjs`
- Translations and page copy: `data/translations/*.js`

### Required docs artifacts before and during implementation

- Keep migration docs under `docs/migration/`.
- Keep design and execution plans under `docs/plans/`.
- Update parity checklist and route inventory whenever scope changes.
