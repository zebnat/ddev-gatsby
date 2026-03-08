import assert from 'node:assert/strict'
import { createRequire } from 'node:module'
import process from 'node:process'
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
  assert.equal(typeof ytrendsEs.body, 'string')
  assert.equal(
    ytrendsEs.body.includes('Una alternativa a las tendencias de Youtube'),
    true
  )
  assert.equal(
    ytrendsEs.body.includes(
      '(/portfolio/2019-07-01-ytrends-an-alternative-for-youtube-trends/ytrends-mobile-home.png)'
    ),
    true
  )
})

test('loads portfolio items even when cwd is app', async () => {
  const require = createRequire(import.meta.url)
  const originalCwd = process.cwd()

  process.chdir('app')
  try {
    const modulePath = require.resolve('../../src/lib/content/portfolio.js')
    delete require.cache[modulePath]
    const isolatedLoader = require(modulePath)

    const items = await isolatedLoader.getPortfolioItems()
    assert.ok(items.length >= 60)
  } finally {
    process.chdir(originalCwd)
  }
})
