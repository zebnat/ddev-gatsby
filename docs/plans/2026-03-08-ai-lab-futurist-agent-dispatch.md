# AI Lab Futurist Agent Dispatch Playbook

Use this playbook to execute the styling refresh with parallel agents while keeping static export and parity guarantees intact.

## Session Objective

- Implement Tailwind + shadcn-style UI components for an AI Lab Futurist redesign.
- Prioritize high-impact surfaces: shell, home, projects list/detail, skills.
- Keep all required checks passing at each integration point.

## Global Rules For Every Agent

- Preserve `next.config.mjs` static export settings.
- Do not change language routing contracts (`/` and `/en/`).
- Do not change markdown source-of-truth flow from `data/portfolio/**/*.md`.
- Run verification for your scope and report command output summary.
- Avoid destructive git commands.

## Wave Plan

### Wave 0 (Sequential, single agent)

**Agent A0 - Foundation Setup**

- Scope:
  - `package.json`
  - `tailwind.config.js`
  - `postcss.config.js`
  - `app/globals.css`
  - `tests/config/next-foundation.test.mjs`
- Required verification:
  - `npm run test:next-foundation`
  - `npm test`
- Exit criteria:
  - Tailwind foundation active and tests green.

### Wave 1 (Parallel after Wave 0)

**Agent B1 - Shell Refactor**

- Scope:
  - `src/components/shell/SiteShell.js`
  - `src/components/shell/TopBar.js`
  - `src/components/shell/Menu.js`
  - `src/components/shell/Footer.js`
- Verification:
  - `npm run test:verify-phase1`

**Agent B2 - Home Experience Refactor**

- Scope:
  - `src/components/home/*` (new)
  - `app/(site)/page.js`
  - `app/(site)/en/page.js`
- Verification:
  - `npm run test:parity-routes`
  - `npm run next:build`

**Agent B3 - UI Primitives**

- Scope:
  - `src/lib/ui/cn.js`
  - `src/components/ui/*`
  - `tests/ui/cn.test.mjs`
- Verification:
  - `node --test tests/ui/cn.test.mjs`

### Wave 2 (Parallel after Wave 1 integration)

**Agent C1 - Projects List + Detail**

- Scope:
  - `src/components/projects/*` (new)
  - `app/(site)/proyectos/page.js`
  - `app/(site)/en/projects/page.js`
  - `app/(site)/(project-detail)/[...slug]/page.js`
- Verification:
  - `npm run test:verify-phase1`
  - `npm run next:build`

**Agent C2 - Skills + Stream Styling**

- Scope:
  - `src/components/skills/SkillsCatalog.js`
  - `src/components/skills/*` (optional split)
  - `src/components/stream/StreamCard.js`
- Verification:
  - `npm test`

### Wave 3 (Sequential integration)

**Agent D0 - Integrate, Verify, Document**

- Scope:
  - merge all accepted changes
  - `docs/migration/README.md`
  - `docs/migration/parity-checklist.md`
- Verification:
  - `npm test`
  - `npm run next:build`
  - `npm run parity:verify-phase1`
- Exit criteria:
  - all checks pass, docs updated, handoff summary complete.

## Subagent Prompt Templates

### Template: Implementation Agent

```
You are implementing one isolated scope in D:\dev\ddev-gatsby.

Scope:
- <insert exact files>

Constraints:
- Keep next static export (`output: export`, `trailingSlash: true`)
- Keep / and /en route parity
- Keep markdown project source flow untouched
- Do not edit files outside scope unless required by imports

Deliverables:
1) Code changes limited to scope
2) Verification command results summary
3) Short risk note (if any)

Required verification commands:
- <insert commands>
```

### Template: Validation Agent

```
Read only validation task.

Confirm that current branch changes preserve:
1) static export config
2) language route parity and baseline counts
3) markdown project route generation

Run:
- npm test
- npm run next:build
- npm run parity:verify-phase1

Return only: pass/fail per command + any failing file paths + likely root cause.
```

## Integration Checklist After Each Wave

- Resolve overlap conflicts before running full checks.
- Run required verification commands at wave boundary.
- Reject any changes that alter route shape or markdown routing contract.
- Keep docs updated if phase scope materially changes.

## Definition Of Done

- AI Lab Futurist design language is visible on shell, home, projects, and skills.
- UI is componentized with reusable primitives.
- No regressions in static export, route parity, or markdown content rendering.
- All required verification commands pass.
