Use superpowers for all the request, but never use worktrees.

User will commit himself, but you can recommend commits to the user.

## Current Project State

- Gatsby migration Phase 1 is complete.
- Next.js static app now runs from repository root (`app/`, `src/`, `public/`, `next.config.mjs`).
- Keep static export and trailing slash behavior stable (`next build` outputs to `out/`).
- Keep language route parity (`/` default Spanish, `/en/` English).
- Keep markdown portfolio content as source of truth (`data/portfolio/**/*.md`).

## Verification Contract

- Keep parity checks green after changes:
  - `npm test`
  - `npm run next:build`
  - `npm run parity:verify-phase1`

## Documentation Hygiene

- Keep project documentation concise and up to date.
- Remove stale migration-planning docs when they are no longer needed.
- Keep migration status artifacts under `docs/migration/`.
