# AI Lab Futurist Refresh Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Deliver an AI Lab Futurist visual refresh using Tailwind CSS and reusable UI components while preserving static export, language parity, and markdown-based project content.

**Architecture:** Add a token-driven Tailwind foundation, introduce shadcn-style local UI primitives, and migrate high-impact routes/components in phases. Keep server-rendered pages as default, isolate interactivity to existing client islands, and validate parity after every phase.

**Tech Stack:** Next.js App Router static export, Tailwind CSS, PostCSS, shadcn-style local primitives, React 19, markdown-to-jsx, Node test runner.

---

### Task 1: Bootstrap Tailwind Foundation Safely

**Files:**

- Modify: `package.json`
- Modify: `tests/config/next-foundation.test.mjs`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Modify: `app/globals.css`

**Step 1: Write the failing test**

Add a test in `tests/config/next-foundation.test.mjs` that asserts `tailwindcss`, `postcss`, and `autoprefixer` exist in dev dependencies.

**Step 2: Run test to verify it fails**

Run: `npm run test:next-foundation`
Expected: FAIL because styling dependencies are not present yet.

**Step 3: Write minimal implementation**

- Add dependencies in `package.json`.
- Add `tailwind.config.js` with strict content globs:
  - `./app/**/*.{js,jsx}`
  - `./src/**/*.{js,jsx}`
- Add `postcss.config.js` for Tailwind + Autoprefixer.
- Add Tailwind directives to `app/globals.css`.

**Step 4: Run test to verify it passes**

Run: `npm run test:next-foundation`
Expected: PASS.

**Step 5: Checkpoint**

Run: `npm test`
Expected: PASS before moving to component migration.

Recommended commit message: `chore: add tailwind foundation with static export safeguards`

### Task 2: Implement Theme Tokens and Base Styles

**Files:**

- Modify: `app/globals.css`
- Create: `src/styles/tokens.css`
- Modify: `app/layout.js`

**Step 1: Write the failing visual contract test (lightweight)**

Add a regression test in `tests/config/next-foundation.test.mjs` that checks `globals.css` contains token roots for `--bg`, `--fg`, and `--accent`.

**Step 2: Run test to verify it fails**

Run: `npm run test:next-foundation`
Expected: FAIL because tokens are not defined.

**Step 3: Write minimal implementation**

- Add token map in `src/styles/tokens.css`.
- Import token file from `app/globals.css`.
- Define AI Lab Futurist base typography, gradient background, focus ring, and reduced-motion rules.
- Add `next/font` usage in `app/layout.js` for display and mono fonts.

**Step 4: Run test to verify it passes**

Run: `npm run test:next-foundation`
Expected: PASS.

**Step 5: Build validation**

Run: `npm run next:build`
Expected: PASS and `out/` generated with unchanged route structure.

Recommended commit message: `feat: add ai-lab design tokens and global typography`

### Task 3: Create Reusable UI Primitives

**Files:**

- Create: `src/lib/ui/cn.js`
- Create: `src/components/ui/button.js`
- Create: `src/components/ui/card.js`
- Create: `src/components/ui/badge.js`
- Create: `src/components/ui/section-header.js`
- Create: `tests/ui/cn.test.mjs`

**Step 1: Write the failing test**

Add `tests/ui/cn.test.mjs` to validate class merging behavior in `cn` utility.

**Step 2: Run test to verify it fails**

Run: `node --test tests/ui/cn.test.mjs`
Expected: FAIL because utility is missing.

**Step 3: Write minimal implementation**

- Implement `cn` helper with `clsx` + `tailwind-merge`.
- Add shadcn-style primitives with variant props and accessible defaults.

**Step 4: Run test to verify it passes**

Run: `node --test tests/ui/cn.test.mjs`
Expected: PASS.

**Step 5: Verify full suite**

Run: `npm test`
Expected: PASS.

Recommended commit message: `feat: add reusable tailwind ui primitives`

### Task 4: Refactor Site Shell to Tokenized Components

**Files:**

- Modify: `src/components/shell/SiteShell.js`
- Modify: `src/components/shell/TopBar.js`
- Modify: `src/components/shell/Menu.js`
- Modify: `src/components/shell/Footer.js`

**Step 1: Write failing regression checks**

Add/extend tests that verify:

- language links still include Spanish and English targets
- menu source still comes from locale content

Use file: `tests/parity/verify-phase1.test.mjs` (or a focused new test file under `tests/shell/`).

**Step 2: Run tests to verify baseline**

Run: `npm run test:verify-phase1`
Expected: PASS before refactor.

**Step 3: Write minimal implementation**

- Replace inline style objects with Tailwind classes.
- Keep current language detection and menu behavior intact.
- Add active state styling and keyboard-visible focus states.

**Step 4: Run parity test again**

Run: `npm run test:verify-phase1`
Expected: PASS.

**Step 5: Build validation**

Run: `npm run next:build`
Expected: PASS with no route drift.

Recommended commit message: `feat: modernize shell with tailwind and locale-safe nav`

### Task 5: Rebuild Home Pages With Shared Futurist Blocks

**Files:**

- Create: `src/components/home/HomeContent.js`
- Create: `src/components/home/HeroPanel.js`
- Create: `src/components/home/ProofStrip.js`
- Modify: `app/(site)/page.js`
- Modify: `app/(site)/en/page.js`

**Step 1: Write failing route contract test**

Ensure existing parity route tests still lock `/` and `/en/` behavior. If missing a direct assertion, add one in `tests/parity/routes-baseline.test.mjs`.

**Step 2: Run test to verify baseline**

Run: `npm run test:parity-routes`
Expected: PASS.

**Step 3: Write minimal implementation**

- Extract shared structure into `HomeContent`.
- Keep locale text and links from existing translation sources.
- Apply AI Lab Futurist card and metric treatment.

**Step 4: Verify routes and build**

Run: `npm run test:parity-routes && npm run next:build`
Expected: PASS for both commands.

**Step 5: Contract verification**

Run: `npm run parity:verify-phase1`
Expected: PASS.

Recommended commit message: `feat: refresh bilingual home with shared futurist sections`

### Task 6: Upgrade Projects List and Project Detail Experience

**Files:**

- Create: `src/components/projects/ProjectCard.js`
- Create: `src/components/projects/ProjectsListContent.js`
- Create: `src/components/projects/ProjectDetailContent.js`
- Modify: `app/(site)/proyectos/page.js`
- Modify: `app/(site)/en/projects/page.js`
- Modify: `app/(site)/(project-detail)/[...slug]/page.js`

**Step 1: Write failing content contract test**

Add or extend tests to ensure markdown routes still resolve and render from `data/portfolio/**/*.md`.

Target: `tests/parity/verify-phase1.test.mjs`.

**Step 2: Run verification test to capture baseline**

Run: `npm run test:verify-phase1`
Expected: PASS.

**Step 3: Write minimal implementation**

- Replace inline styles in projects list pages with reusable components.
- Keep `generateStaticParams` and `generateMetadata` behavior untouched in project detail page.
- Add typography wrapper classes for markdown output and private-project alert panel.

**Step 4: Re-run verification**

Run: `npm run test:verify-phase1 && npm run next:build`
Expected: PASS.

**Step 5: Full parity gate**

Run: `npm run parity:verify-phase1`
Expected: PASS.

Recommended commit message: `feat: modernize projects listing and detail without markdown route regressions`

### Task 7: Refresh Skills and Stream Components

**Files:**

- Modify: `src/components/skills/SkillsCatalog.js`
- Modify: `src/components/stream/StreamCard.js`
- Optionally create: `src/components/skills/SkillCard.js`
- Optionally create: `src/components/skills/SkillGroup.js`

**Step 1: Write failing structural test (if needed)**

Add focused tests for sorted skills and recent markers if behavior is currently untested.

Target: `tests/content/skills-utils.test.mjs` (new file if absent).

**Step 2: Run test to verify baseline behavior**

Run: `node --test tests/content/skills-utils.test.mjs`
Expected: PASS on behavior before visual refactor.

**Step 3: Write minimal implementation**

- Convert style objects to Tailwind classes and UI primitives.
- Keep sorting logic and language text unchanged.
- Preserve stream status update behavior while improving visual hierarchy.

**Step 4: Run tests + build**

Run: `npm test && npm run next:build`
Expected: PASS.

**Step 5: Parity gate**

Run: `npm run parity:verify-phase1`
Expected: PASS.

Recommended commit message: `feat: apply ai-lab style system to skills and stream components`

### Task 8: Final Verification and Documentation Hygiene

**Files:**

- Modify: `docs/migration/README.md`
- Modify: `docs/migration/parity-checklist.md`
- Create/Update: `docs/plans/2026-03-08-ai-lab-futurist-design.md`

**Step 1: Run full verification contract**

Run:

- `npm test`
- `npm run next:build`
- `npm run parity:verify-phase1`

Expected: all PASS.

**Step 2: Verify generated output manually**

Check output pages in `out/` for:

- `/`
- `/en/`
- `/proyectos/`
- `/en/projects/`
- one project detail route per locale

**Step 3: Update migration docs**

Record styling modernization status, what changed, and any deferred work.

**Step 4: Remove stale planning notes**

Delete superseded migration planning notes if they are obsolete.

**Step 5: Release checkpoint**

Prepare a concise handoff summary with changed files, risks, and rollback notes.

Recommended commit message: `docs: record ai-lab styling modernization status and verification results`

---

## Execution Notes

- Do not use git worktrees for this repo session.
- Keep all parity checks green before claiming completion.
- Keep commits small and phase-aligned.
- If a phase fails verification, stop and fix before advancing.
