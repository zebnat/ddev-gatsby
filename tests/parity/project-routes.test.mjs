import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import test from 'node:test'

import projectRoutesLoader from '../../src/lib/content/project-routes.js'

const { getProjectPaths, pathToSlugSegments, getProjectByPath } =
  projectRoutesLoader

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
    existsSync('app/(site)/(project-detail)/[...slug]/page.js'),
    true
  )
})

test('project route loader includes markdown body for detail rendering', async () => {
  const project = await getProjectByPath(
    '/proyectos/ytrends-una-alternativa-para-tendencias-de-youtube/'
  )

  assert.ok(project)
  assert.equal(typeof project.body, 'string')
  assert.equal(project.body.length > 200, true)
})
