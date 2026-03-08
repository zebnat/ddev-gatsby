# Gatsby Decommission Readiness

Use this checklist before removing Gatsby code and dependencies from the repository.

## Preconditions

- [ ] `npm test` passes.
- [ ] `npm run next:build` passes.
- [ ] `npm run parity:verify-phase1` passes with all checks green.

## Functional parity

- [ ] Static route parity validated for all pages from `src/pages/`.
- [ ] Dynamic project detail routes from `data/portfolio/**/*.md` render in both languages.
- [ ] Home/About/Skills/Projects pages show migration-baseline content, not placeholders.
- [ ] Streamer and embed routes render expected Twitch status module.

## SEO parity

- [ ] Canonical and `hreflang` tags present on static and project detail pages.
- [ ] `sitemap.xml` includes both language roots and project routes.
- [ ] HTML `lang` values are correct for `/` and `/en/` trees.

## Asset and document parity

- [ ] Static files under `static/` are available in `apps/next/public/`.
- [ ] Portfolio markdown images are available under `apps/next/public/portfolio/`.
- [ ] `/docs/*` downloads resolve correctly from exported output.

## Deployment readiness

- [ ] Next static deployment runbook validated (`docs/migration/deployment-next-static.md`).
- [ ] Cutover and rollback steps validated (`docs/migration/cutover-plan.md`).

## Safe cleanup plan

After all checks are green:

1. Remove Gatsby-only runtime dependencies from root `package.json`.
2. Remove Gatsby source files (`gatsby-*.js`, legacy page query code, and Gatsby-only components).
3. Remove Gatsby deployment scripts and replace with Next static deploy command path.
4. Re-run full verification (`npm test`, `npm run next:build`, `npm run parity:verify-phase1`).
