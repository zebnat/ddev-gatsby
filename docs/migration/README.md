# Gatsby to Next.js Migration

## Objective

Migrate `ddev-gatsby` from GatsbyJS to the latest stable Next.js while keeping static hosting on AWS S3 + CloudFront and preserving current SEO-critical behavior.

## Current baseline

- Framework: Gatsby 3 + React 17
- Content model: markdown-driven portfolio entries in `data/portfolio/**/*.md`
- Language model: Spanish default (`/`) and English under `/en/`
- Current route source: `src/pages/` + markdown `path` frontmatter
- Current deploy model: static build uploaded to S3 + CloudFront invalidation

## Repository strategy during migration

- Keep Gatsby at repository root for parity comparison while migration is in progress.
- Build Next.js in an isolated app package at `apps/next/` to avoid React peer dependency conflicts.
- Use root scripts as wrappers for Next commands (`npm --prefix apps/next ...`).

## Tooling prerequisite

- Latest stable Next.js currently requires Node.js `>=20.9.0`.
- If local or CI uses older Node (for example `20.5.0`), `next build` will fail until runtime is upgraded.

## Migration principles

- Keep strict URL parity including trailing slash behavior.
- Keep canonical/hreflang/metadata parity in Phase 1.
- Keep markdown files as source of truth for project details.
- Migrate incrementally; do not remove Gatsby until parity checks pass.

## Phases

### Phase 1: Technical migration and parity baseline

- Introduce Next.js static export foundation.
- Port data loading from Gatsby GraphQL to filesystem/content helpers.
- Port routes and page rendering with parity-first metadata.
- Validate route/content/SEO parity.

### Phase 2: Full redesign

- Redesign UI and visual system on top of stable Next.js routes/content.
- Preserve route and content parity guarantees from Phase 1.

## Required artifacts

- `docs/migration/baseline-routes.json`
- `docs/migration/route-inventory.md`
- `docs/migration/content-model.md`
- `docs/migration/parity-checklist.md`
- `docs/plans/2026-03-08-gatsby-to-nextjs-design.md`
- `docs/plans/2026-03-08-gatsby-to-nextjs-implementation-plan.md`

## Definition of done for Phase 1

- Next.js static export builds successfully.
- Route parity confirmed for static pages and markdown project pages.
- Canonical/hreflang/title/description behavior matches current baseline.
- Static assets and downloadable docs remain accessible under same URLs.
- Gatsby runtime and dependencies can be safely removed.
