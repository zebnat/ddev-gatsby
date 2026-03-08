import assert from 'node:assert/strict'
import test from 'node:test'

import routeParams from '../../src/lib/content/next-route-params.js'

const { resolveCatchAllSlug } = routeParams

test('resolves slug from plain params object', async () => {
  const slug = await resolveCatchAllSlug({ slug: ['proyectos', 'x'] })
  assert.deepEqual(slug, ['proyectos', 'x'])
})

test('resolves slug from promised params object', async () => {
  const slug = await resolveCatchAllSlug(
    Promise.resolve({ slug: ['en', 'projects', 'x'] })
  )
  assert.deepEqual(slug, ['en', 'projects', 'x'])
})
