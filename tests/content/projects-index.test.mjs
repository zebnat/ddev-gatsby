import assert from 'node:assert/strict'
import test from 'node:test'

import projectsIndex from '../../src/lib/content/projects-index.js'

const { getProjectsByLang, getTagStats } = projectsIndex

test('returns bilingual project collections from markdown source', async () => {
  const esProjects = await getProjectsByLang('es')
  const enProjects = await getProjectsByLang('en')

  assert.equal(esProjects.length, 30)
  assert.equal(enProjects.length, 30)
})

test('builds ordered tag stats for filtering UI', async () => {
  const esProjects = await getProjectsByLang('es')
  const tagStats = getTagStats(esProjects)

  assert.equal(Array.isArray(tagStats), true)
  assert.equal(tagStats.length > 0, true)
  assert.equal(tagStats[0].count >= tagStats[tagStats.length - 1].count, true)
})
