# Gatsby to Next.js Static Migration Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Ship a Next.js static-export replacement for the Gatsby site with strict route, SEO, and content parity before removing Gatsby.

**Architecture:** Build a parity-first Next.js App Router implementation that reads markdown and JS data files directly from the repository, reproduces all existing routes, and validates parity using route and metadata checks before cutover.

**Tech Stack:** Next.js (latest stable), React, Node test runner (`node:test`), markdown/frontmatter parser, npm scripts, AWS S3 + CloudFront.

---

### Task 1: Bootstrap Next.js static foundation

**Files:**

- Create: `next.config.mjs`
- Create: `app/layout.js`
- Create: `app/page.js`
- Modify: `package.json`
- Test: `tests/config/next-config.test.mjs`

**Step 1: Write the failing test**

```js
import test from 'node:test'
import assert from 'node:assert/strict'
import config from '../../next.config.mjs'

test('next config enforces static export and trailing slash', () => {
  assert.equal(config.output, 'export')
  assert.equal(config.trailingSlash, true)
})
```

**Step 2: Run test to verify it fails**

Run: `node --test tests/config/next-config.test.mjs`
Expected: FAIL because `next.config.mjs` does not exist yet.

**Step 3: Write minimal implementation**

```js
// next.config.mjs
const nextConfig = {
  output: 'export',
  trailingSlash: true,
}

export default nextConfig
```

**Step 4: Run test to verify it passes**

Run: `node --test tests/config/next-config.test.mjs`
Expected: PASS.

**Step 5: Commit**

```bash
git add next.config.mjs app/layout.js app/page.js package.json tests/config/next-config.test.mjs
git commit -m "chore: bootstrap next static export baseline"
```

### Task 2: Create route baseline extractor and snapshots

**Files:**

- Create: `scripts/parity/extract-routes.mjs`
- Create: `docs/migration/baseline-routes.json`
- Create: `tests/parity/routes-baseline.test.mjs`

**Step 1: Write the failing test**

```js
import test from 'node:test'
import assert from 'node:assert/strict'
import routes from '../../docs/migration/baseline-routes.json' with { type: 'json' }

test('baseline includes static and markdown routes', () => {
  assert.ok(routes.static.length >= 16)
  assert.ok(routes.markdown.length >= 60)
})
```

**Step 2: Run test to verify it fails**

Run: `node --test tests/parity/routes-baseline.test.mjs`
Expected: FAIL because baseline json does not exist yet.

**Step 3: Write minimal implementation**

Create extractor script that reads `src/pages/**/*.js` and `data/portfolio/**/*.md`, then writes `docs/migration/baseline-routes.json`.

**Step 4: Run test to verify it passes**

Run: `node scripts/parity/extract-routes.mjs && node --test tests/parity/routes-baseline.test.mjs`
Expected: PASS.

**Step 5: Commit**

```bash
git add scripts/parity/extract-routes.mjs docs/migration/baseline-routes.json tests/parity/routes-baseline.test.mjs
git commit -m "test: add route baseline extraction for parity"
```

### Task 3: Implement markdown content loader

**Files:**

- Create: `src/lib/content/portfolio.js`
- Create: `tests/content/portfolio-loader.test.mjs`

**Step 1: Write the failing test**

```js
import test from 'node:test'
import assert from 'node:assert/strict'
import { getPortfolioItems } from '../../src/lib/content/portfolio.js'

test('loads markdown entries with required fields', async () => {
  const items = await getPortfolioItems()
  assert.ok(items.length >= 60)
  assert.ok(items.every((item) => item.path && item.lang && item.title))
})
```

**Step 2: Run test to verify it fails**

Run: `node --test tests/content/portfolio-loader.test.mjs`
Expected: FAIL because loader does not exist yet.

**Step 3: Write minimal implementation**

Implement `getPortfolioItems()` that parses frontmatter from `data/portfolio/**/*.md` and returns normalized items.

**Step 4: Run test to verify it passes**

Run: `node --test tests/content/portfolio-loader.test.mjs`
Expected: PASS.

**Step 5: Commit**

```bash
git add src/lib/content/portfolio.js tests/content/portfolio-loader.test.mjs
git commit -m "feat: add markdown portfolio content loader"
```

### Task 4: Implement locale/menu metadata loader

**Files:**

- Create: `src/lib/content/locales.js`
- Create: `tests/content/locales-loader.test.mjs`

**Step 1: Write the failing test**

```js
import test from 'node:test'
import assert from 'node:assert/strict'
import { getMenuByLang } from '../../src/lib/content/locales.js'

test('returns menu entries for es and en', () => {
  assert.ok(getMenuByLang('es').length > 0)
  assert.ok(getMenuByLang('en').length > 0)
})
```

**Step 2: Run test to verify it fails**

Run: `node --test tests/content/locales-loader.test.mjs`
Expected: FAIL because loader does not exist yet.

**Step 3: Write minimal implementation**

Implement loader based on `data/localeGlobals.js` and `data/config.js` with route-link helpers.

**Step 4: Run test to verify it passes**

Run: `node --test tests/content/locales-loader.test.mjs`
Expected: PASS.

**Step 5: Commit**

```bash
git add src/lib/content/locales.js tests/content/locales-loader.test.mjs
git commit -m "feat: add locale and menu data adapters"
```

### Task 5: Build SEO metadata and hreflang helpers

**Files:**

- Create: `src/lib/seo/metadata.js`
- Create: `tests/seo/metadata.test.mjs`

**Step 1: Write the failing test**

```js
import test from 'node:test'
import assert from 'node:assert/strict'
import { buildAlternates } from '../../src/lib/seo/metadata.js'

test('builds hreflang alternates for project pages', () => {
  const result = buildAlternates(['es%%/proyectos/x/', 'en%%/en/projects/x/'])
  assert.equal(result.languages.es, '/proyectos/x/')
  assert.equal(result.languages.en, '/en/projects/x/')
})
```

**Step 2: Run test to verify it fails**

Run: `node --test tests/seo/metadata.test.mjs`
Expected: FAIL because helper does not exist yet.

**Step 3: Write minimal implementation**

Implement canonical + alternates mapping helper consumed by Next metadata API.

**Step 4: Run test to verify it passes**

Run: `node --test tests/seo/metadata.test.mjs`
Expected: PASS.

**Step 5: Commit**

```bash
git add src/lib/seo/metadata.js tests/seo/metadata.test.mjs
git commit -m "feat: add metadata and hreflang helpers"
```

### Task 6: Port shared shell (layout, menu, topbar, footer)

**Files:**

- Create: `src/components/shell/*` (new Next-compatible shell)
- Create: `app/(site)/layout.js`
- Test: `tests/parity/shell-routes.test.mjs`

**Step 1: Write the failing test**

```js
import test from 'node:test'
import assert from 'node:assert/strict'
import routes from '../../docs/migration/baseline-routes.json' with { type: 'json' }

test('all enabled menu routes are in baseline static routes', () => {
  const staticRoutes = new Set(routes.static)
  assert.ok(staticRoutes.has('/'))
  assert.ok(staticRoutes.has('/en/'))
})
```

**Step 2: Run test to verify it fails**

Run: `node --test tests/parity/shell-routes.test.mjs`
Expected: FAIL until baseline and shell data wiring are complete.

**Step 3: Write minimal implementation**

Create shell components using locale/menu adapters and preserve language switcher behavior.

**Step 4: Run test to verify it passes**

Run: `node --test tests/parity/shell-routes.test.mjs`
Expected: PASS.

**Step 5: Commit**

```bash
git add src/components/shell app/(site)/layout.js tests/parity/shell-routes.test.mjs
git commit -m "feat: port shared site shell for next app"
```

### Task 7: Port static pages with route parity

**Files:**

- Create: `app/(site)/page.js`
- Create: `app/(site)/acerca-de-mi/page.js`
- Create: `app/(site)/tecnologias/page.js`
- Create: `app/(site)/proyectos/page.js`
- Create: `app/(site)/en/page.js`
- Create: `app/(site)/en/about-me/page.js`
- Create: `app/(site)/en/skills/page.js`
- Create: `app/(site)/en/projects/page.js`
- Test: `tests/parity/static-pages.test.mjs`

**Step 1: Write the failing test**

```js
import test from 'node:test'
import assert from 'node:assert/strict'
import routes from '../../docs/migration/baseline-routes.json' with { type: 'json' }

test('next static routes include key bilingual pages', () => {
  const mustHave = ['/', '/en/', '/proyectos/', '/en/projects/']
  for (const route of mustHave) assert.ok(routes.static.includes(route))
})
```

**Step 2: Run test to verify it fails**

Run: `node --test tests/parity/static-pages.test.mjs`
Expected: FAIL until route parity files exist.

**Step 3: Write minimal implementation**

Create parity pages using existing translation datasets.

**Step 4: Run test to verify it passes**

Run: `node --test tests/parity/static-pages.test.mjs`
Expected: PASS.

**Step 5: Commit**

```bash
git add app/(site) tests/parity/static-pages.test.mjs
git commit -m "feat: port bilingual static routes with parity"
```

### Task 8: Port markdown project detail routes

**Files:**

- Create: `app/(site)/(project-detail)/[...slug]/page.js`
- Create: `src/lib/content/project-routes.js`
- Test: `tests/parity/project-routes.test.mjs`

**Step 1: Write the failing test**

```js
import test from 'node:test'
import assert from 'node:assert/strict'
import { getProjectPaths } from '../../src/lib/content/project-routes.js'

test('project route count matches markdown route count', async () => {
  const routes = await getProjectPaths()
  assert.equal(routes.length, 60)
})
```

**Step 2: Run test to verify it fails**

Run: `node --test tests/parity/project-routes.test.mjs`
Expected: FAIL because route generator does not exist yet.

**Step 3: Write minimal implementation**

Implement `generateStaticParams()` using frontmatter `path` values from markdown entries.

**Step 4: Run test to verify it passes**

Run: `node --test tests/parity/project-routes.test.mjs`
Expected: PASS.

**Step 5: Commit**

```bash
git add app/(site)/(project-detail)/[...slug]/page.js src/lib/content/project-routes.js tests/parity/project-routes.test.mjs
git commit -m "feat: add static markdown project detail routing"
```

### Task 9: Migrate static assets and deploy contract

**Files:**

- Create/Copy: `public/*` from existing `static/*`
- Modify: deployment scripts in `package.json`
- Create: `docs/migration/deployment-next-static.md`
- Test: `tests/parity/static-assets.test.mjs`

**Step 1: Write the failing test**

```js
import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'

test('critical public assets exist', () => {
  assert.ok(existsSync('public/robots.txt'))
  assert.ok(existsSync('public/docs/cv.pdf'))
})
```

**Step 2: Run test to verify it fails**

Run: `node --test tests/parity/static-assets.test.mjs`
Expected: FAIL before asset copy.

**Step 3: Write minimal implementation**

Copy required static files into Next `public/` and document S3 + CloudFront deployment commands.

**Step 4: Run test to verify it passes**

Run: `node --test tests/parity/static-assets.test.mjs`
Expected: PASS.

**Step 5: Commit**

```bash
git add public package.json docs/migration/deployment-next-static.md tests/parity/static-assets.test.mjs
git commit -m "chore: migrate static assets and next deploy contract"
```

### Task 10: Add parity verification and migration cutover gate

**Files:**

- Create: `scripts/parity/verify-phase1.mjs`
- Create: `tests/parity/verify-phase1.test.mjs`
- Modify: `docs/migration/parity-checklist.md`
- Create: `docs/migration/cutover-plan.md`

**Step 1: Write the failing test**

```js
import test from 'node:test'
import assert from 'node:assert/strict'
import { verifyPhase1 } from '../../scripts/parity/verify-phase1.mjs'

test('phase1 verifier returns pass only when all checks pass', async () => {
  const result = await verifyPhase1()
  assert.equal(typeof result.ok, 'boolean')
})
```

**Step 2: Run test to verify it fails**

Run: `node --test tests/parity/verify-phase1.test.mjs`
Expected: FAIL until verifier exists.

**Step 3: Write minimal implementation**

Implement verifier for route counts, required assets, and checklist gate output.

**Step 4: Run test to verify it passes**

Run: `node --test tests/parity/verify-phase1.test.mjs`
Expected: PASS.

**Step 5: Commit**

```bash
git add scripts/parity/verify-phase1.mjs tests/parity/verify-phase1.test.mjs docs/migration/parity-checklist.md docs/migration/cutover-plan.md
git commit -m "test: add phase1 parity verification gate"
```
