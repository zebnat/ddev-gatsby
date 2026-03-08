# Markdown Loader Refactor Options (Post-Parity)

## Context

Phase 1 currently uses a lightweight custom markdown/frontmatter loader (`src/lib/content/portfolio.js`) to keep migration moving with minimal dependencies.

This document tracks a later refactor once technical parity is stable.

## Why consider refactor later

- Improve parser robustness for edge-case frontmatter formatting.
- Reduce maintenance cost of custom parsing logic.
- Align with richer markdown rendering pipelines in Next.js.

## Candidate approaches

### Option A: `gray-matter` + remark/rehype pipeline

- Pros:
  - Mature frontmatter parser.
  - Flexible markdown AST pipeline (remark plugins).
  - Good control over custom transformations.
- Cons:
  - More wiring and decisions to maintain.
  - Easy to over-customize too early.

### Option B: `contentlayer`

- Pros:
  - Typed content model and generated content artifacts.
  - Good DX for content-as-data sites.
  - Natural fit for structured markdown collections.
- Cons:
  - Adds build-time integration complexity.
  - Extra migration surface while route/SEO parity is still in progress.

### Option C: `next-mdx-remote` (+ frontmatter parser)

- Pros:
  - Useful if moving to MDX components incrementally.
  - Keeps rendering flexible per route.
- Cons:
  - Not necessary if we keep pure markdown for Phase 1 parity.
  - Adds another abstraction before core migration is complete.

## Recommended timing

- Keep current custom loader during Phase 1 parity migration.
- Re-evaluate after route/content/SEO checklist passes.
- Prefer Option A (`gray-matter` + remark/rehype) as first refactor step for minimal risk.

## Refactor acceptance criteria

- Route generation remains identical to markdown `path` frontmatter.
- Parsed `lang`, `title`, `description`, `tags`, and `hreflangs` match current outputs.
- Existing loader tests and parity tests still pass.
- No URL or metadata regressions in bilingual routes.
