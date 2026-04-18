# Homepage Intro Motion Refresh Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Extend homepage intro runtime to 4.5s and add richer HUD text motion while showing the intro on every homepage visit.

**Architecture:** Keep the existing overlay-based intro architecture so homepage content remains in place under the intro. Simplify entry logic to always show intro on `/` and `/en/`, remove one-time/query override paths, and introduce staged entrance plus subtle continuous text effects with a smooth exit transition.

**Tech Stack:** Next.js App Router client components, React hooks, Tailwind utility classes, global CSS keyframes, Node test runner.

---

### Task 1: Replace intro gating logic with always-show timeline

**Files:**

- Modify: `src/components/home/HomeEntryExperience.js`
- Test: `tests/pages/home-intro-behavior.test.mjs`

**Step 1: Write/adjust failing assertions for always-show behavior**

- Remove assertions tied to storage keys and query overrides.
- Add assertions for new timing constants and always-show startup flow.

**Step 2: Run test to verify it fails**

Run: `npm test -- tests/pages/home-intro-behavior.test.mjs`

**Step 3: Implement minimal always-show runtime model**

- Set total intro time to 4500ms.
- Add exit phase (~300ms) before deactivation.
- Keep reduced-motion path with shorter duration.
- Keep skip behavior and scroll lock.

**Step 4: Run test to verify it passes**

Run: `npm test -- tests/pages/home-intro-behavior.test.mjs`

### Task 2: Upgrade intro text choreography

**Files:**

- Modify: `src/components/home/HomeIntroOverlay.js`
- Modify: `app/globals.css`

**Step 1: Write/adjust failing assertions for enhanced phase classes**

- Assert presence of new class hooks for phase labels/sweep effects.

**Step 2: Run test to verify it fails**

Run: `npm test -- tests/pages/home-intro-behavior.test.mjs tests/pages/home-content.test.mjs`

**Step 3: Implement animation enhancements**

- Add phase-label wrappers for richer animation targeting.
- Add decrypt/sweep/shimmer and dimming/hold animation keyframes.
- Update phase delays to align with 4.5s choreography.
- Keep mobile readability by limiting effect intensity on small screens.

**Step 4: Run tests to verify they pass**

Run: `npm test -- tests/pages/home-intro-behavior.test.mjs tests/pages/home-content.test.mjs`

### Task 3: Full regression verification

**Files:**

- Verify only

**Step 1: Run full tests**

Run: `npm test`

**Step 2: Run production build**

Run: `npm run next:build`

**Step 3: Run parity contract**

Run: `npm run parity:verify-phase1`

**Step 4: Confirm all green and report changed files**

- Summarize updated behavior and test evidence.
