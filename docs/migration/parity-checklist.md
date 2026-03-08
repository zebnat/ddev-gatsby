# Phase 1 Checklist

## Completed

- [x] Gatsby runtime and Gatsby-only source files removed.
- [x] Next.js app moved from `apps/next/` to repository root.
- [x] Static route baseline preserved (16 static routes).
- [x] Markdown project detail baseline preserved (60 routes, 30/30 by language).
- [x] Static assets and `/docs/*` files preserved in exported output.
- [x] Canonical and `hreflang` metadata flow preserved.
- [x] Verification gate commands are green:
  - [x] `npm test`
  - [x] `npm run next:build`
  - [x] `npm run parity:verify-phase1`

## Deferred (intentional)

- [ ] Deploy/cutover validation (deferred to later session).
- [ ] Visual redesign/styling refactor (deferred to later session).
