import assert from 'node:assert/strict'
import test from 'node:test'

import skillsUtils from '../../src/lib/content/skills-utils.js'

const { sortSkillsByLevelAndRecency, getCatalogSkillItems } = skillsUtils

test('sorts higher level skills first', () => {
  const sorted = sortSkillsByLevelAndRecency([
    { skill: 'A', level: 1, isRecent: true },
    { skill: 'B', level: 4, isRecent: false },
    { skill: 'C', level: 3, isRecent: true },
  ])

  assert.deepEqual(
    sorted.map((item) => item.skill),
    ['B', 'C', 'A']
  )
})

test('prioritizes recent skills when levels tie', () => {
  const sorted = sortSkillsByLevelAndRecency([
    { skill: 'A', level: 3, isRecent: false },
    { skill: 'B', level: 3, isRecent: true },
  ])

  assert.deepEqual(
    sorted.map((item) => item.skill),
    ['B', 'A']
  )
})

test('flattens all skill groups for catalog and cloud parity', () => {
  const items = getCatalogSkillItems({
    languages: [{ skill: 'PHP', level: 4, isRecent: true }],
    libs: [{ skill: 'React', level: 4, isRecent: true }],
    tools: [{ skill: 'Docker', level: 3, isRecent: true }],
    other: [{ skill: 'Technical Leadership', level: 4, isRecent: true }],
  })

  assert.deepEqual(
    items.map((item) => `${item.category}:${item.skill}`),
    [
      'languages:PHP',
      'libs:React',
      'tools:Docker',
      'other:Technical Leadership',
    ]
  )
})
