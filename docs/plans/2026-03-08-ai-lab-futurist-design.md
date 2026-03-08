# AI Lab Futurist Design

## Goal

Upgrade the current static bilingual portfolio into a high-signal AI Lab Futurist experience that presents senior engineering depth (systems, search, recommendations, platform thinking) without regressing static export performance or route parity.

## Locked Constraints

- Keep static export behavior in `next.config.mjs` (`output: 'export'`, `trailingSlash: true`).
- Keep language parity (`/` default Spanish, `/en/` English).
- Keep markdown projects as source of truth (`data/portfolio/**/*.md`).
- Keep verification contract green:
  - `npm test`
  - `npm run next:build`
  - `npm run parity:verify-phase1`

## Product Positioning

- Primary audience: hiring managers and technical peers evaluating senior-level ownership.
- Core story: long track record building production systems, recommendation/search logic, API and platform work, with present-day MLOps and AI engineering direction.
- Experience target: "technical, intentional, modern" rather than generic developer template.

## Visual Direction

- Theme: AI Lab Futurist.
- Palette: graphite surfaces, cool neutrals, electric cyan accents, amber warning accents.
- Typography:
  - Display: `Space Grotesk` (headings and hero labels).
  - Utility/technical labels: `IBM Plex Mono`.
  - Body: system-safe sans fallback stack to keep render fast.
- Background language: subtle gradient mesh + lightweight data-grid pattern.
- Motion: sparse, meaningful animation only (hero reveal, section stagger, focus transitions), with `prefers-reduced-motion` fallback.

## Component Strategy

- Styling foundation: Tailwind CSS.
- UI primitives: shadcn-style local components (Button, Card, Badge, Tabs, Accordion), implemented in repo and themed with tokens.
- Reuse strategy:
  - Shared primitives in `src/components/ui/*`.
  - Domain components in `src/components/home/*`, `src/components/projects/*`, `src/components/skills/*`, `src/components/shell/*`.
- Keep interactivity as isolated client islands. Prefer server-rendered markup by default.

## Information Architecture Focus

1. Home (`app/(site)/page.js`, `app/(site)/en/page.js`)
   - Hero with concise positioning statement.
   - "Proof strip" with impact metrics and technical capabilities.
   - Fast routes to case studies and skills.
2. Projects listing (`app/(site)/proyectos/page.js`, `app/(site)/en/projects/page.js`)
   - Stronger project cards and tag signals.
   - Cleaner scanning for system complexity and outcomes.
3. Project detail (`app/(site)/(project-detail)/[...slug]/page.js`)
   - Better markdown typography and metadata rail.
   - Preserve canonical and hreflang behavior.
4. Skills (`src/components/skills/SkillsCatalog.js`)
   - Reframe inventory into capability groups.

## Performance and Static Export Strategy

- Keep route structure and data loaders unchanged for markdown projects.
- Avoid heavyweight animation libraries; use CSS transitions/keyframes only.
- Keep Tailwind `content` globs strict to avoid CSS bloat.
- Keep shell and content mostly server-rendered; only interactive widgets stay client-side.
- Track regression risk by running verification contract after each phase.

## Accessibility and Quality Bars

- Ensure semantic landmarks (`header`, `nav`, `main`, `footer`) remain clear.
- Maintain keyboard-visible focus states with high contrast.
- Validate color contrast for text, links, and badges.
- Respect reduced motion.
- Keep bilingual route parity for every upgraded section.

## Success Criteria

- Design: clear AI Lab Futurist identity across shell, home, projects, and skills.
- Product: stronger senior/AI-systems signal visible within first screen and project scan.
- Technical: no regressions in static export, parity scripts, or markdown routing.
- Operational: implementation can be executed in independent agent lanes with deterministic integration points.

## Artifacts in This Session

- Design doc: `docs/plans/2026-03-08-ai-lab-futurist-design.md`
- Implementation plan: `docs/plans/2026-03-08-ai-lab-futurist-implementation.md`
- Agent dispatch playbook: `docs/plans/2026-03-08-ai-lab-futurist-agent-dispatch.md`
