# Homepage Conversion Refresh Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Refactor homepage post-hero sections into concise, conversion-oriented blocks that drive users toward the technical skills page.

**Architecture:** Keep `HeroPanel` intact and replace long narrative cards with modular action-first blocks: a clickable quick-path grid, a brief capabilities snapshot, and a compact resource links area. Maintain language parity by updating translation keys for both ES and EN.

**Tech Stack:** Next.js App Router static export, React components, Tailwind CSS utility styling, Node test runner.

---

### Task 1: Lock Homepage Composition Tests (TDD RED)

**Files:**

- Modify: `tests/pages/home-content.test.mjs`

**Step 1: Write failing test**

Update expectations to require `HomeActionGrid` and `CapabilitySnapshot` composition and ensure `ProofStrip` is not used in `HomeContent`.

**Step 2: Run test to verify failure**

Run: `node --test tests/pages/home-content.test.mjs`
Expected: FAIL because `HomeContent` still composes old sections.

**Step 3: Minimal implementation target**

Do not implement yet; keep failure evidence.

**Step 4: Re-run test**

Run same command to confirm deterministic failure.
Expected: FAIL.

**Step 5: Commit checkpoint**

No commit yet; continue to Task 2 implementation.

### Task 2: Implement Quick Paths + Capability Snapshot (TDD GREEN)

**Files:**

- Create: `src/components/home/HomeActionGrid.js`
- Create: `src/components/home/CapabilitySnapshot.js`
- Modify: `src/components/home/HomeContent.js`

**Step 1: Implement minimal components**

- `HomeActionGrid`: three full-card clickable items (skills, projects, about) with skills highlighted as primary.
- `CapabilitySnapshot`: short intro paragraph + concise bullet list + strong CTA to skills.

**Step 2: Wire new blocks**

Replace old `ProofStrip` and long HTML blocks usage in `HomeContent` with the new components.

**Step 3: Run home tests**

Run: `node --test tests/pages/home-content.test.mjs`
Expected: PASS.

**Step 4: Verify no route contract drift**

Run: `npm run test:parity-routes`
Expected: PASS.

**Step 5: Commit checkpoint**

Recommended message: `feat: refactor homepage sections for skills-first conversion`

### Task 3: Rewrite Homepage Copy to Be Brief and Marketing-Ready

**Files:**

- Modify: `data/translations/homePage.js`

**Step 1: Write failing content assertions**

Extend `tests/pages/home-content.test.mjs` (or add focused content test) to assert new short-copy keys are present (quick paths labels, capabilities bullets, concise summary).

**Step 2: Run test to verify failure**

Run: `node --test tests/pages/home-content.test.mjs`
Expected: FAIL on missing keys.

**Step 3: Implement concise ES/EN content**

- Add short capability copy.
- Add translation-backed labels for action cards and CTA buttons.
- Keep links semantically consistent with existing localized routes.

**Step 4: Re-run tests**

Run: `node --test tests/pages/home-content.test.mjs`
Expected: PASS.

**Step 5: Full suite check**

Run: `npm test`
Expected: PASS.

### Task 4: Final Verification

**Files:**

- Verify only; no required edits unless failures occur.

**Step 1: Run full contract**

Run:

- `npm test`
- `npm run next:build`
- `npm run parity:verify-phase1`

Expected: all PASS.

**Step 2: UX smoke check**

Validate generated pages in browser:

- `/`
- `/en/`

Check that post-hero content is concise, skills CTA is primary, and cards are easy to tap.

**Step 3: Prepare handoff summary**

List changed files and rationale for each section.
