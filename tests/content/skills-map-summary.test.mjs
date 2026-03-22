import assert from 'node:assert/strict'
import test from 'node:test'

import skillsMapSummary from '../../src/lib/content/skills-map-summary.js'

const { buildSkillMapSummary } = skillsMapSummary

test('builds summarized categories with count and average score', () => {
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

  assert.equal(summary.length >= 5, true)

  const ids = summary.map((item) => item.id)
  assert.equal(ids.includes('cloud_devops'), true)
  assert.equal(ids.includes('software_architecture'), true)
  assert.equal(ids.includes('ai_automation'), true)

  assert.equal(
    summary.every((item) => typeof item.count === 'number'),
    true
  )
  assert.equal(
    summary.every((item) => typeof item.average === 'number'),
    true
  )
})
