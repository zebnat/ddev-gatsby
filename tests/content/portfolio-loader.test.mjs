import assert from 'node:assert/strict'
import test from 'node:test'

import portfolioLoader from '../../src/lib/content/portfolio.js'

const { getPortfolioItems } = portfolioLoader

test('loads markdown entries with required fields', async () => {
  const items = await getPortfolioItems()

  assert.ok(items.length >= 60)
  assert.ok(items.every((item) => item.path && item.lang && item.title))
})

test('includes both supported languages', async () => {
  const items = await getPortfolioItems()
  const languages = new Set(items.map((item) => item.lang))

  assert.equal(languages.has('es'), true)
  assert.equal(languages.has('en'), true)
})

test('keeps a stable route from source markdown frontmatter', async () => {
  const items = await getPortfolioItems()
  const ytrendsEs = items.find(
    (item) =>
      item.path ===
      '/proyectos/ytrends-una-alternativa-para-tendencias-de-youtube/'
  )

  assert.ok(ytrendsEs)
  assert.equal(ytrendsEs.lang, 'es')
  assert.equal(typeof ytrendsEs.description, 'string')
})
