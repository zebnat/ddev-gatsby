# Immersive Storytelling UI Design

## Goal

Deliver a stronger personal-brand experience focused on professional credibility, readability, and visual storytelling by upgrading the About page, mobile navigation, and motion language while preserving static export and bilingual parity.

## Confirmed Scope

- Rebuild About page presentation and content hierarchy.
- Use personal portraits from `data/images/about/`.
- Improve copy quality and reduce verbosity in About + Home sections.
- Remove low-value content (FAQ/Q&A style blocks) from About.
- Add mobile drawer menu with close button and swipe-to-close.
- Add tasteful motion that improves clarity and polish.

## Non-Negotiable Constraints

- Keep `next.config.mjs` static export behavior (`output: 'export'`, `trailingSlash: true`).
- Preserve route parity (`/` and `/en/` plus localized sections).
- Preserve markdown portfolio source of truth (`data/portfolio/**/*.md`).
- Keep verification contract green:
  - `npm test`
  - `npm run next:build`
  - `npm run parity:verify-phase1`

## UX Direction

- Style mode: Immersive storytelling over minimal baseline.
- Experience target: modern technical identity with personality and warmth.
- Content target: concise, meaningful copy blocks that guide scanning and reduce fatigue.

## About Page Structure

1. Hero card with concise positioning statement and short intro.
2. Portrait gallery featuring 3 personal photos.
3. "Why programming" and "How I work" as short, outcome-focused paragraphs.
4. Lifestyle/hobbies section kept concise and relevant.
5. Timeline rendered as visual milestone cards instead of plain list.
6. FAQ section removed entirely.

## Mobile Navigation

- Desktop keeps horizontal nav.
- Mobile switches to off-canvas drawer.
- Drawer can close via:
  - close button,
  - backdrop tap,
  - swipe gesture,
  - Escape key.
- Drawer locks body scroll while open and closes on route change.

## Motion System

- Add reusable utility motion classes in global CSS.
- Apply motion to:
  - About hero reveal,
  - gallery transitions,
  - timeline stagger,
  - menu drawer transitions.
- Respect `prefers-reduced-motion` and keep motion subtle.

## Copy Strategy

- Rewrite long-form paragraphs to short, high-value blocks.
- Keep ES/EN translation parity by intent, not literal word count.
- Remove filler and overly personal tangents not aligned with professional narrative.

## Target Files

- `app/(site)/acerca-de-mi/page.js`
- `app/(site)/en/about-me/page.js`
- `src/components/about/*` (new)
- `src/components/shell/Menu.js`
- `src/components/shell/TopBar.js`
- `src/components/shell/SiteShell.js`
- `src/components/home/ProofStrip.js`
- `data/translations/aboutPage.js`
- `data/translations/homePage.js`
- `app/globals.css`
- `static/images/about/*` (new mirrored photo assets)
