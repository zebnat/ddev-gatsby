import assert from 'node:assert/strict'
import test from 'node:test'

import skillsMapSummary from '../../src/lib/content/skills-map-summary.js'

const { buildSkillMapSummary } = skillsMapSummary

test('builds recruiter role-fit cards without grouped averages', () => {
  const items = [
    { skill: 'GitHub Actions', level: 4, isRecent: true },
    { skill: 'Azure Cloud', level: 4, isRecent: true },
    { skill: 'Software Architecture', level: 5, isRecent: true },
    { skill: 'Technical Leadership', level: 4, isRecent: true },
    { skill: 'AI Agent Orchestration', level: 3, isRecent: true },
    { skill: 'LLM Integration', level: 3, isRecent: true },
    { skill: 'ReactJS', level: 4, isRecent: true },
    { skill: 'Nodejs', level: 4, isRecent: true },
    { skill: 'MySQL', level: 4, isRecent: true },
    { skill: 'REST', level: 3, isRecent: true },
    { skill: 'Testing (TDD)', level: 3, isRecent: true },
    { skill: 'Jest', level: 3, isRecent: true },
  ]

  const summary = buildSkillMapSummary(items)

  assert.deepEqual(
    summary.map((item) => item.roleId),
    ['tech_lead', 'senior_fullstack', 'cloud_devops']
  )

  summary.forEach((item) => {
    assert.equal(typeof item.fit, 'string')
    assert.equal(['strong', 'good', 'developing'].includes(item.fit), true)
    assert.equal(Array.isArray(item.keyEvidence), true)
    assert.equal(item.keyEvidence.length > 0, true)
    assert.equal(item.keyEvidence.length <= 3, true)

    assert.equal(typeof item.recentCount, 'number')
    assert.equal(typeof item.totalCount, 'number')
    assert.equal(typeof item.depth.advancedPlus, 'number')
    assert.equal(typeof item.depth.intermediate, 'number')
    assert.equal(typeof item.depth.foundational, 'number')
    assert.equal(
      item.depth.advancedPlus +
        item.depth.intermediate +
        item.depth.foundational,
      item.totalCount
    )

    assert.equal('average' in item, false)
  })
})
