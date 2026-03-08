# Gatsby to Next.js Static Migration Design

Date: 2026-03-08
Status: Approved for implementation kickoff

## Goal

Move the current Gatsby-based personal site to latest Next.js with static export, preserving URL/SEO/content parity in Phase 1, then applying a full redesign in Phase 2.

## Constraints and decisions

- Strict URL parity, including trailing slashes.
- Keep language parity for `/` and `/en/` trees.
- Keep markdown-driven project content as source of truth.
- Keep deploy target as AWS S3 + CloudFront.
- Execute in two phases:
  1. Technical migration + parity baseline
  2. Full redesign

## Current architecture summary

- Gatsby pages in `src/pages/**` use `StaticQuery` and GraphQL fragments.
- Dynamic project pages are generated from markdown frontmatter `path` in `gatsby-node.js`.
- SEO alternates and language links are assembled from menu metadata and markdown `hreflangs`.
- Translations are plain JS objects under `data/translations/`.

## Target architecture (Phase 1)

### Application runtime

- Next.js App Router.
- Static export mode for S3 hosting.
- Explicit trailing slash config to match current behavior.

### Data layer

- Replace Gatsby GraphQL dependency with filesystem adapters:
  - load markdown entries and parse frontmatter
  - load menu/site metadata from `data/localeGlobals.js` and `data/config.js`
  - load translations from existing JS dictionaries

### Routing

- Keep static route set equivalent to `src/pages/**`.
- Keep markdown detail route generation from frontmatter `path`.
- Keep embed routes and 404 behavior.

### SEO and metadata

- Centralize metadata generation per route and locale.
- Preserve canonical and `hreflang` parity with existing behavior.
- Keep sitemap coverage equivalent.

### Assets and public files

- Migrate `static/*` behavior to Next public output.
- Preserve downloadable documents under `/docs/*`.

## Migration phases

### Phase 1: Technical migration and parity

1. Bootstrap Next static project config.
2. Implement content loaders and route model.
3. Port layouts and pages with parity-first rendering.
4. Verify routes/content/metadata against checklist.
5. Remove Gatsby only after checklist pass.

### Phase 2: Full redesign

1. Introduce new visual system and page compositions.
2. Keep parity contracts from Phase 1.
3. Re-run parity and smoke tests before release.

## Risk log and mitigations

- Risk: hidden URL regressions due to trailing slash mismatch.
  - Mitigation: enforce config + route parity checks.
- Risk: markdown parsing differences from Gatsby remark pipeline.
  - Mitigation: parity snapshots on representative project pages.
- Risk: metadata/hreflang drift.
  - Mitigation: route-level metadata verification checklist.
- Risk: static asset URL breakage.
  - Mitigation: explicit asset inventory and smoke tests.

## Validation strategy

- Maintain `docs/migration/route-inventory.md` and `docs/migration/parity-checklist.md` as release gates.
- Run automated checks for route existence and metadata parity.
- Run manual bilingual smoke tests on key pages and project details.
