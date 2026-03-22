# Skills 3D Cloud Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add an interactive Three.js tag cloud with all skills on top of the skills page while preserving existing catalog blocks below.

**Architecture:** Create a cloud dataset utility to flatten all skill categories, render a client-only 3D scene with React Three Fiber and Drei controls, and mount it above `SkillsCatalog` in both locale routes. Extend skills data with recent leadership and AI-oriented entries from updated LinkedIn source.

**Tech Stack:** Next.js App Router static export, React 19, `three`, `@react-three/fiber`, `@react-three/drei`, Node test runner.

---

### Task 1: Add failing tests for 3D cloud contract

**Files:**

- Create: `tests/pages/skills-cloud.test.mjs`

**Step 1: Write failing tests**

- Assert skills pages import and render `SkillsTagCloud3D`.
- Assert 3D component uses `Canvas` and `OrbitControls` with drag rotation.
- Assert cloud dataset includes LinkedIn-derived skills.

**Step 2: Run tests to verify failure**

Run: `node --test tests/pages/skills-cloud.test.mjs`
Expected: FAIL because utility/component is missing.

**Step 3: Keep failure evidence**

Do not implement in this step.

**Step 4: Re-run**

Run same command and confirm deterministic failure.

**Step 5: Proceed**

Move to implementation tasks.

### Task 2: Build cloud dataset utility + 3D component

**Files:**

- Create: `src/lib/content/skills-cloud-utils.js`
- Create: `src/components/skills/SkillsTagCloud3D.js`
- Modify: `package.json`

**Step 1: Implement dataset flattening**

- Flatten all categories from `data/skills.js`.
- Include `skill`, `level`, `isRecent`, `category`.

**Step 2: Implement 3D renderer**

- Use `Canvas` + `Text` + `OrbitControls`.
- Map `level` to size and glow intensity.
- Enable drag rotation and idle auto-rotation.

**Step 3: Add required dependencies**

- Install `three`, `@react-three/fiber`, `@react-three/drei`.

**Step 4: Run tests**

Run: `node --test tests/pages/skills-cloud.test.mjs`
Expected: PASS.

**Step 5: Verify build compiles**

Run: `npm run next:build`
Expected: PASS.

### Task 3: Mount cloud on skills pages and update translations

**Files:**

- Modify: `app/(site)/tecnologias/page.js`
- Modify: `app/(site)/en/skills/page.js`
- Modify: `data/translations/skillsPage.js`

**Step 1: Add cloud component above catalog**

- Keep `SkillsCatalog` unchanged below renderer.

**Step 2: Add cloud hint translation key**

- Add ES/EN string for drag instruction.

**Step 3: Run targeted tests**

Run: `node --test tests/pages/skills-cloud.test.mjs`
Expected: PASS.

**Step 4: Route parity check**

Run: `npm run test:parity-routes`
Expected: PASS.

**Step 5: Continue to data expansion**

Proceed to Task 4.

### Task 4: Expand skills dataset with LinkedIn updates

**Files:**

- Modify: `data/skills.js`

**Step 1: Add new recent skills**

- Add technical leadership, software architecture, CI/CD, cloud, observability, and AI orchestration entries.

**Step 2: Keep bilingual descriptions**

- Add `en` and `es` descriptions for each new skill.

**Step 3: Validate cloud includes new entries**

Run: `node --test tests/pages/skills-cloud.test.mjs`
Expected: PASS with name checks.

**Step 4: Run full suite**

Run: `npm test`
Expected: PASS.

**Step 5: Build and parity verify**

Run:

- `npm run next:build`
- `npm run parity:verify-phase1`

Expected: PASS for both.
