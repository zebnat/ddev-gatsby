import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

import localesLoader from '../../src/lib/content/locales.js'

const { getMenuByLang } = localesLoader

const routes = JSON.parse(
  await readFile(
    new URL('../../docs/migration/baseline-routes.json', import.meta.url),
    'utf8'
  )
)

test('all enabled menu routes are in baseline static routes', () => {
  const staticRoutes = new Set(routes.static.map((entry) => entry.route))

  for (const menu of getMenuByLang('es', { includeDisabled: false })) {
    assert.equal(staticRoutes.has(menu.fullRoute), true)
  }

  for (const menu of getMenuByLang('en', { includeDisabled: false })) {
    assert.equal(staticRoutes.has(menu.fullRoute), true)
  }
})

test('next site shell layout exists for route group', () => {
  assert.equal(existsSync('app/(site)/layout.js'), true)
})
