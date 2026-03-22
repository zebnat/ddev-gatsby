# Migration Status

Phase 1 is complete.

## Finalized outcomes

- Gatsby runtime and Gatsby-only source files were removed.
- Next.js App Router now runs from repository root (`app/`, `src/`, `public/`, `next.config.mjs`).
- Static export behavior is preserved (`next build` outputs to `out/`).
- Language route parity is preserved (`/` for Spanish, `/en/` for English).
- Markdown portfolio files in `data/portfolio/**/*.md` remain the source of truth.

## Phase 1 verification commands

- `npm test`
- `npm run next:build`
- `npm run parity:verify-phase1`

## Deferred items

- Staging/production deploy validation is deferred to a later session.
- Deploy mechanism is now available via `npm run deploy` using `scripts/deploy/cloudfront-static.mjs`.
- Visual redesign/styling work is deferred to a later session.

## Parity artifact

- Route baseline snapshot: `docs/migration/baseline-routes.json`
