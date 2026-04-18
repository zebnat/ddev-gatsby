# Homepage HUD Intro Design

## Goal

Create a high-impact presentation before homepage rendering that reinforces Daniel's positioning as a technical lead who drives measurable business outcomes and executes practical AI in production.

## Experience Summary

- Show a command-center HUD intro before homepage content on `/` and `/en/`.
- Play only on first visit per locale.
- Keep runtime around 2.2 seconds.
- Keep the visual language aligned with current cyan-on-slate technical aesthetics.

## Approved Narrative Script

### 0.0-0.6s: Identity lock

- ES: `DANIEL DOMINGUEZ // TECHNICAL LEAD`
- EN: `DANIEL DOMINGUEZ // TECHNICAL LEAD`

### 0.6-1.5s: Impact framing

- ES: `DE DECISIONES TECNICAS A IMPACTO DE NEGOCIO`
- EN: `FROM TECHNICAL DECISIONS TO BUSINESS IMPACT`

### 1.6-2.2s: AI differentiator

- ES: `IA APLICADA CON FOCO EN VALOR Y EJECUCION`
- EN: `APPLIED AI FOCUSED ON VALUE AND EXECUTION`

## Motion and Presentation Direction

- Scene 1: HUD grid fade-in with center lock-on and scanline sweep.
- Scene 2: Data-band pulse with impact line and subtle corner ticks.
- Scene 3: Stronger center lock for AI message and dissolve to homepage.
- Keep transitions transform/opacity-based for smooth mobile performance.

## Interaction Rules

- Run intro only for homepage routes.
- Persist first-visit completion per locale in browser storage.
- Provide immediate `Skip intro` control.
- Respect `prefers-reduced-motion` with near-instant static reveal.
- Lock scroll only while intro is active.

## Constraints

- Preserve static export behavior.
- Preserve `/` and `/en/` language route parity.
- Keep markdown content as source of truth (no portfolio content migration changes).

## Validation Criteria

- Intro appears on first visit and does not replay on repeat visits (per locale).
- Intro is localized by route.
- Skip action is keyboard accessible.
- Reduced motion path bypasses animation timeline.
- Verification commands remain green:
  - `npm test`
  - `npm run next:build`
  - `npm run parity:verify-phase1`
