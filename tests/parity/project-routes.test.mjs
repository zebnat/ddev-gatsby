import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import test from 'node:test'

import projectRoutesLoader from '../../src/lib/content/project-routes.js'

const { getProjectPaths, pathToSlugSegments } = projectRoutesLoader

test('project route count matches markdown route count', async () => {
  const routes = await getProjectPaths()
  assert.equal(routes.length, 60)
})

test('converts project routes into catch-all slug segments', () => {
  assert.deepEqual(pathToSlugSegments('/proyectos/x/'), ['proyectos', 'x'])
  assert.deepEqual(pathToSlugSegments('/en/projects/x/'), [
    'en',
    'projects',
    'x',
  ])
})

test('next dynamic project detail route file exists', () => {
  assert.equal(
    existsSync('apps/next/app/(site)/(project-detail)/[...slug]/page.js'),
    true
  )
})
