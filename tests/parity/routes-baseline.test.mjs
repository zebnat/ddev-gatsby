import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const baselineRoutes = JSON.parse(
  await readFile(
    new URL('../../docs/migration/baseline-routes.json', import.meta.url),
    'utf8'
  )
)

const packageJson = JSON.parse(
  await readFile(new URL('../../package.json', import.meta.url), 'utf8')
)

test('baseline includes expected route totals', () => {
  assert.equal(baselineRoutes.counts.static, 16)
  assert.equal(baselineRoutes.counts.markdown, 60)
  assert.equal(baselineRoutes.counts.markdownByLanguage.es, 30)
  assert.equal(baselineRoutes.counts.markdownByLanguage.en, 30)
})

test('baseline includes critical bilingual routes', () => {
  const staticRoutes = baselineRoutes.static.map((entry) => entry.route)
  const markdownRoutes = baselineRoutes.markdown.map((entry) => entry.route)

  assert.ok(staticRoutes.includes('/'))
  assert.ok(staticRoutes.includes('/en/'))
  assert.ok(staticRoutes.includes('/proyectos/'))
  assert.ok(staticRoutes.includes('/en/projects/'))

  assert.ok(
    markdownRoutes.includes(
      '/proyectos/ytrends-una-alternativa-para-tendencias-de-youtube/'
    )
  )
  assert.ok(
    markdownRoutes.includes(
      '/en/projects/ytrends-an-alternative-for-youtube-trends/'
    )
  )
})

test('package exposes parity route extraction command', () => {
  assert.equal(typeof packageJson.scripts['parity:routes'], 'string')
})
