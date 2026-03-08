# Gatsby Decommission Readiness

Use this checklist before removing Gatsby code and dependencies from the repository.

## Validation snapshot (2026-03-08, post-cleanup)

- Verified commands:
  - `npm test` (46/46 passing)
  - `npm run next:build` (Next static export succeeds)
  - `npm run parity:verify-phase1` (PASS 5/5)
- Gatsby cleanup verified:
  - Root `package.json` no longer includes Gatsby runtime/plugin dependencies.
  - Root scripts `build`/`develop` now target Next wrappers, and `deploy` now uses Next static deployment flow.
  - Gatsby runtime/config files removed: `gatsby-config.js`, `gatsby-node.js`, `gatsby-browser.js`.
  - Legacy Gatsby pages/templates/components removed from `src/pages/`, `src/templates/`, and `src/components/`.

## Preconditions

- [x] `npm test` passes.
- [x] `npm run next:build` passes.
- [x] `npm run parity:verify-phase1` passes with all checks green.

## Functional parity

- [x] Static route parity validated for all pages from `apps/next/app/(site)/`.
- [x] Dynamic project detail routes from `data/portfolio/**/*.md` render in both languages.
- [x] Home/About/Skills/Projects pages show migration-baseline content, not placeholders.
- [x] Streamer and embed routes render expected Twitch status module.

## SEO parity

- [x] Canonical and `hreflang` tags present on static and project detail pages.
- [x] `sitemap.xml` includes both language roots and project routes.
- [x] HTML `lang` values are correct for `/` and `/en/` trees.

## Asset and document parity

- [x] Static files under `static/` are available in `apps/next/public/`.
- [x] Portfolio markdown images are available under `apps/next/public/portfolio/`.
- [x] `/docs/*` downloads resolve correctly from exported output.

## Deployment readiness

- [x] Next static deployment runbook validated (`docs/migration/deployment-next-static.md`).
- [x] Cutover and rollback steps validated (`docs/migration/cutover-plan.md`).

## Current blockers to remove Gatsby

- No technical blockers remain in repository code for Gatsby removal.
- Remaining operational blocker: complete and sign off staging/production cutover runbook execution.

## Safe cleanup plan

After all checks are green:

1. [x] Remove Gatsby-only runtime dependencies from root `package.json`.
2. [x] Remove Gatsby source files (`gatsby-*.js`, legacy page query code, and Gatsby-only components).
3. [x] Remove Gatsby deployment scripts and replace with Next static deploy command path.
4. [x] Re-run full verification (`npm test`, `npm run next:build`, `npm run parity:verify-phase1`).
