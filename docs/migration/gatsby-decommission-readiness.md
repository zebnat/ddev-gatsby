# Gatsby Decommission Readiness

Use this checklist before removing Gatsby code and dependencies from the repository.

## Validation snapshot (2026-03-08)

- Verified commands:
  - `npm test` (45/45 passing)
  - `npm run next:build` (Next static export succeeds)
  - `npm run parity:verify-phase1` (PASS 5/5)
- Verified Gatsby footprint still present and expected before decommission:
  - Root dependencies in `package.json` still include `gatsby` and 16 `gatsby-*` plugins/packages.
  - Root scripts `build`, `develop`, and `deploy` still execute Gatsby commands.
  - Gatsby runtime/config files still present: `gatsby-config.js`, `gatsby-node.js`, `gatsby-browser.js`.
  - Legacy Gatsby query/page code still present under `src/pages/`, `src/templates/portfolio.js`, and Gatsby-linked components in `src/components/`.

## Preconditions

- [x] `npm test` passes.
- [x] `npm run next:build` passes.
- [x] `npm run parity:verify-phase1` passes with all checks green.

## Functional parity

- [x] Static route parity validated for all pages from `src/pages/`.
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

- Root default scripts still point to Gatsby (`build`, `develop`, `deploy`) and must be switched to Next-safe equivalents.
- Gatsby runtime files (`gatsby-*.js`) are still required by current root flow and must be removed only after cutover sign-off.
- Legacy Gatsby components/pages still import `gatsby` APIs (`Link`, `StaticQuery`, `graphql`) and should be deleted in final cleanup PR.
- Root lockfile still includes Gatsby tree because Gatsby deps are still declared in root `package.json`.

## Safe cleanup plan

After all checks are green:

1. Remove Gatsby-only runtime dependencies from root `package.json`.
2. Remove Gatsby source files (`gatsby-*.js`, legacy page query code, and Gatsby-only components).
3. Remove Gatsby deployment scripts and replace with Next static deploy command path.
4. Re-run full verification (`npm test`, `npm run next:build`, `npm run parity:verify-phase1`).
