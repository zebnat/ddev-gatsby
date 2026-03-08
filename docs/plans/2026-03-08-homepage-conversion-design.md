# Homepage Conversion Refresh Design

## Goal

Keep the hero as-is and redesign the homepage follow-up sections to prioritize fast skill-page conversion, clearer value messaging, and more clickable navigation paths.

## User Direction Captured

- Hero is good and should remain.
- Existing post-hero blocks feel purposeless.
- Technical capabilities content is too long.
- Homepage links should be more attractive and easier to click.
- Primary conversion target after hero: technical skills page.

## Content + UX Strategy

- Replace passive summary blocks with action-oriented sections.
- Reduce text density and avoid repeated long paragraphs.
- Present high-value content in scan-friendly cards and bullet points.
- Use full-card clickable targets for major paths.

## Proposed Homepage Structure

1. **Hero (unchanged).**
2. **Quick Paths section (new):** three large clickable cards with clear outcomes:
   - Technical Skills (primary visual priority)
   - Projects archive
   - About / leadership story
3. **Technical capabilities snapshot (new):** one short paragraph + 4 concise bullets.
4. **Professional resources bar (new):** high-visibility links to resume and credentials.

## Conversion Rules

- Skills CTA must be visually dominant and first in reading order.
- Every card should be easy to tap on mobile (`min-height`, full-card click area).
- Keep secondary links present but visually subordinate.

## i18n and Static Constraints

- Keep ES and EN parity.
- Keep static export behavior unchanged.
- Keep route/link contracts:
  - `/tecnologias/` and `/en/skills/`
  - `/proyectos/` and `/en/projects/`
  - `/acerca-de-mi/` and `/en/about-me/`

## Files in Scope

- `src/components/home/HomeContent.js`
- `src/components/home/HeroPanel.js`
- `src/components/home/ProofStrip.js` (remove or repurpose)
- `src/components/home/HomeActionGrid.js` (new)
- `src/components/home/CapabilitySnapshot.js` (new)
- `data/translations/homePage.js`
- `tests/pages/home-content.test.mjs`
