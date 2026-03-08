# Immersive Storytelling UI Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Upgrade About and mobile navigation UX with immersive storytelling visuals, better copy, and swipe-capable mobile interactions while preserving static-export parity.

**Architecture:** Introduce a shared About content component and portrait gallery, refactor shell navigation into responsive desktop + mobile drawer behavior, and add reusable motion utilities. Keep language parity by feeding ES/EN translation data into shared components and validating static-export constraints after each batch.

**Tech Stack:** Next.js App Router static export, Tailwind CSS, React client interactions for menu gestures, Node test runner, translation data files.

---

### Task 1: Lock Behavioral Tests Before Refactor

**Files:**

- Create: `tests/pages/about-experience.test.mjs`
- Create: `tests/content/about-copy-cleanup.test.mjs`
- Create: `tests/shell/menu-gesture-utils.test.mjs`

**Step 1: Write failing tests**

Add tests asserting:

- About routes render through a shared `AboutContent` component.
- About translation no longer includes FAQ keys (`rng_*`).
- Swipe-close utility module exists and detects close gestures.

**Step 2: Run tests to verify failure**

Run: `node --test tests/pages/about-experience.test.mjs tests/content/about-copy-cleanup.test.mjs tests/shell/menu-gesture-utils.test.mjs`
Expected: FAIL with missing imports or stale keys.

**Step 3: Implement only what tests require**

Create component/module scaffolding with minimal exports.

**Step 4: Re-run tests**

Run same command.
Expected: PASS.

**Step 5: Checkpoint**

Run: `npm test`
Expected: PASS.

### Task 2: Build Shared About Experience With Portraits

**Files:**

- Create: `src/components/about/AboutContent.js`
- Modify: `app/(site)/acerca-de-mi/page.js`
- Modify: `app/(site)/en/about-me/page.js`
- Add assets: `static/images/about/p1002.jpg`, `static/images/about/p1004.jpg`, `static/images/about/p1005.jpg`

**Step 1: Add failing structure test**

Assert the shared About component contains gallery image paths and timeline block.

**Step 2: Run test to verify it fails**

Run: `node --test tests/pages/about-experience.test.mjs`
Expected: FAIL before implementation.

**Step 3: Implement minimal shared About component**

- Build hero + narrative + lifestyle + timeline sections.
- Include portrait gallery using `/images/about/*` assets.
- Remove FAQ section rendering.

**Step 4: Run targeted tests**

Run: `node --test tests/pages/about-experience.test.mjs`
Expected: PASS.

**Step 5: Build check**

Run: `npm run next:build`
Expected: PASS.

### Task 3: Rewrite Copy for Clarity and Marketing Signal

**Files:**

- Modify: `data/translations/aboutPage.js`
- Modify: `data/translations/homePage.js`
- Modify: `src/components/home/ProofStrip.js`

**Step 1: Add failing copy cleanup test**

Assert:

- `rng_title`, `rng_q*`, `rng_r*` keys are absent.
- About/home copy is present with expected replacement keys.
- Proof strip no longer references route parity wording.

**Step 2: Run test to verify failure**

Run: `node --test tests/content/about-copy-cleanup.test.mjs`
Expected: FAIL with stale key checks.

**Step 3: Implement minimal copy changes**

- Replace verbose blocks with concise, value-driven paragraphs in ES/EN.
- Keep route and metadata semantics unchanged.
- Replace parity proof-strip item with professional credibility signal.

**Step 4: Re-run tests**

Run: `node --test tests/content/about-copy-cleanup.test.mjs`
Expected: PASS.

**Step 5: Full test check**

Run: `npm test`
Expected: PASS.

### Task 4: Mobile Drawer Menu With Swipe-to-Close

**Files:**

- Create: `src/components/shell/menu-gesture-utils.js`
- Modify: `src/components/shell/Menu.js`
- Modify: `src/components/shell/TopBar.js`
- Modify: `src/components/shell/SiteShell.js`

**Step 1: Add failing gesture test**

Cover close-swipe detection and non-close scenarios.

**Step 2: Run test to verify failure**

Run: `node --test tests/shell/menu-gesture-utils.test.mjs`
Expected: FAIL when utility is absent.

**Step 3: Implement minimal drawer behavior**

- Add mobile trigger button.
- Add off-canvas drawer, close button, backdrop close.
- Add swipe close + Escape close + route-change close.
- Keep desktop nav visible on `md+`.

**Step 4: Re-run gesture tests**

Run: `node --test tests/shell/menu-gesture-utils.test.mjs`
Expected: PASS.

**Step 5: Integration checks**

Run: `npm test && npm run next:build`
Expected: PASS.

### Task 5: Motion Utilities and Final Polish

**Files:**

- Modify: `app/globals.css`
- Modify: `src/components/about/AboutContent.js`
- Modify: `src/components/shell/Menu.js`
- Modify: `src/components/home/HomeContent.js`

**Step 1: Add failing motion utility presence checks**

Assert reusable motion class names exist in `globals.css`.

**Step 2: Run test to verify failure**

Run: `node --test tests/content/about-copy-cleanup.test.mjs`
Expected: FAIL for missing utility class tokens.

**Step 3: Implement minimal motion classes**

- Add utility classes (`motion-fade-up`, `motion-stagger`, `motion-delay-*`).
- Apply classes to key sections only.
- Preserve reduced-motion support.

**Step 4: Re-run tests**

Run: `npm test`
Expected: PASS.

**Step 5: Final parity gate**

Run: `npm run parity:verify-phase1`
Expected: PASS.

---

## Final Verification Contract

Run in order:

1. `npm test`
2. `npm run next:build`
3. `npm run parity:verify-phase1`

All commands must pass before declaring completion.
