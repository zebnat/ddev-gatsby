# Homepage HUD Intro Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a first-visit-only, localized, command-center HUD intro on `/` and `/en/` that plays before homepage content reveal.

**Architecture:** Add a client-side homepage entry wrapper that controls intro state, persistence, reduced-motion behavior, and transition timing. Keep homepage SEO/parity stable by rendering the intro as a visual overlay rather than a separate route.

**Tech Stack:** Next.js App Router, React client components/hooks, Tailwind utility classes, global CSS keyframes, Node test suite.

---

### Task 1: Add intro copy contract and route scope

**Files:**

- Modify: `data/translations/homePage.js`
- Test: `tests/pages/home-content.test.mjs`

1. Add intro copy keys in both locales: `intro_phase_1`, `intro_phase_2`, `intro_phase_3`, `intro_skip`.
2. Keep existing keys and homepage content unchanged.
3. Extend homepage content tests to assert intro keys exist.
4. Run targeted page tests.

### Task 2: Build intro overlay component and animation styles

**Files:**

- Create: `src/components/home/HomeIntroOverlay.js`
- Modify: `app/globals.css`

1. Create fullscreen intro overlay with staged copy and skip button.
2. Implement ~2.2 second timeline with CSS class-driven animations.
3. Add reduced motion support and static reveal path.
4. Add HUD-specific keyframes/utilities in global CSS.

### Task 3: Add first-visit locale persistence wrapper and wire routes

**Files:**

- Create: `src/components/home/HomeEntryExperience.js`
- Modify: `app/(site)/page.js`
- Modify: `app/(site)/en/page.js`

1. Create client wrapper that owns intro display logic.
2. Persist intro completion in locale-specific keys:
   - `homeIntroSeen_es`
   - `homeIntroSeen_en`
3. Overlay intro on top of home content and unmount after reveal.
4. Keep route parity and existing HomeContent contract.

### Task 4: Accessibility behavior tests and hardening

**Files:**

- Add: `tests/pages/home-intro-behavior.test.mjs`
- Modify: `src/components/home/HomeIntroOverlay.js`
- Modify: `src/components/home/HomeEntryExperience.js`

1. Ensure skip control is keyboard accessible from frame one.
2. Ensure reduced-motion path bypasses timeline.
3. Add behavior tests for first visit, repeat visit, locale storage, and reduced-motion fallback.

### Task 5: Verification contract

1. Run `npm test`.
2. Run `npm run next:build`.
3. Run `npm run parity:verify-phase1`.
4. Fix any regressions and rerun until all pass.
