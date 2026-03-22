# Skills Role Fit Summary Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace grouped skill averages with recruiter-friendly role-fit cards that communicate fit, evidence, recency, and depth in under 10 seconds.

**Architecture:** Keep the existing `SkillMapSummary` mount point inside `SkillsCatalog`, but swap summary computation from domain averages to role scorecards. Build role mappings and scoring helpers in `skills-map-summary.js`, then render bilingual role-fit cards in `SkillMapSummary.js` using existing card and badge primitives.

**Tech Stack:** Next.js static export app, React components, Node test runner, existing translation dictionary.

---

### Task 1: Write failing tests for new role-fit contract

**Files:**

- Modify: `tests/content/skills-map-summary.test.mjs`

**Step 1: Write failing tests**

- Assert `buildSkillMapSummary(items)` returns three role cards.
- Assert each role has: `roleId`, `fit`, `keyEvidence`, `recentCount`, `totalCount`, `depth`.
- Assert fit tier is non-numeric (`strong`, `good`, `developing`).

**Step 2: Run test to verify failure**

Run: `node --test tests/content/skills-map-summary.test.mjs`
Expected: FAIL with missing fields/old average shape.

**Step 3: Keep failure evidence**

Do not implement yet.

**Step 4: Re-run failure check**

Run same command and confirm deterministic failure.

**Step 5: Move to implementation**

Proceed to Task 2.

### Task 2: Implement role-fit scoring utility

**Files:**

- Modify: `src/lib/content/skills-map-summary.js`

**Step 1: Define role mappings**

- Add role IDs: `tech_lead`, `senior_fullstack`, `cloud_devops`.
- Map each role to a keyword pattern list aligned with current `data/skills.js` names.

**Step 2: Compute scorecard values**

- Derive `keyEvidence` from highest level/recent weighted skills.
- Count recency with `recentCount` and `totalCount`.
- Build depth buckets: `advancedPlus`, `intermediate`, `foundational`.

**Step 3: Add fit classification**

- Convert weighted score to tiers: `strong`, `good`, `developing`.
- Keep logic deterministic and easy to read.

**Step 4: Verify targeted tests**

Run: `node --test tests/content/skills-map-summary.test.mjs`
Expected: PASS.

**Step 5: Continue to UI wiring**

Proceed to Task 3.

### Task 3: Replace summary UI with role-fit cards

**Files:**

- Modify: `src/components/skills/SkillMapSummary.js`

**Step 1: Render role-fit heading copy**

- Use new translation keys for title/subtitle.

**Step 2: Render role cards**

- Show role name, fit badge, key evidence chips, recency line, and depth line.
- Remove average/count-domain display.

**Step 3: Keep visual language stable**

- Reuse existing card/badge classes and spacing rhythm.

**Step 4: Verify page-level contract**

Run: `node --test tests/pages/skills-catalog-summary.test.mjs`
Expected: PASS.

**Step 5: Continue to translations**

Proceed to Task 4.

### Task 4: Add translation keys for role-fit labels

**Files:**

- Modify: `data/translations/skillsPage.js`

**Step 1: Add EN keys**

- Add `role_fit_*`, role labels, fit labels, and field labels.

**Step 2: Add ES keys**

- Add equivalent Spanish strings matching tone of existing copy.

**Step 3: Keep old keys untouched for compatibility**

- Leave legacy summary keys in place unless proven unused.

**Step 4: Verify content tests**

Run: `npm test -- tests/content/skills-map-summary.test.mjs`
Expected: PASS.

**Step 5: Move to full verification**

Proceed to Task 5.

### Task 5: Full verification contract

**Files:**

- No file changes.

**Step 1: Run unit/integration tests**

Run: `npm test`
Expected: PASS.

**Step 2: Verify static export build**

Run: `npm run next:build`
Expected: PASS.

**Step 3: Verify migration parity contract**

Run: `npm run parity:verify-phase1`
Expected: PASS.

**Step 4: Confirm no regressions in summary mount**

Run: `node --test tests/pages/skills-catalog-summary.test.mjs`
Expected: PASS.

**Step 5: Prepare handoff**

- Provide changed files and verification evidence.
