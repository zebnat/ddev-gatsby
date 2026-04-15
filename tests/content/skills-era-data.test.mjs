import assert from 'node:assert/strict'
import test from 'node:test'

import skills from '../../data/skills.js'

const VALID_ERAS = new Set(['monolith', 'framework', 'spa', 'platform'])

function getAllSkills() {
  return [...skills.languages, ...skills.libs, ...skills.tools, ...skills.other]
}

test('all skills include a valid era key', () => {
  const items = getAllSkills()

  assert.equal(items.length > 0, true)

  items.forEach((item) => {
    assert.equal(typeof item.era, 'string')
    assert.equal(VALID_ERAS.has(item.era), true)
  })
})

test('skills dataset uses canonical names for major frontend stack', () => {
  const names = new Set(getAllSkills().map((item) => item.skill))

  assert.equal(names.has('React'), true)
  assert.equal(names.has('Next.js'), true)
  assert.equal(names.has('Node.js'), true)
  assert.equal(names.has('TypeScript'), true)
  assert.equal(names.has('Tailwind CSS'), true)

  assert.equal(names.has('ReactJS'), false)
  assert.equal(names.has('NextJS'), false)
  assert.equal(names.has('Nodejs'), false)
  assert.equal(names.has('Typescript'), false)
  assert.equal(names.has('Tailwindcss'), false)
})

test('linkedin-derived platform and leadership skills are present', () => {
  const names = new Set(getAllSkills().map((item) => item.skill))

  assert.equal(names.has('Technical Documentation'), true)
  assert.equal(names.has('Technical Training'), true)
  assert.equal(names.has('Technical People Management'), true)
  assert.equal(names.has('Stakeholder Engagement'), true)
  assert.equal(names.has('Scalability Engineering'), true)
  assert.equal(names.has('DevOps'), true)
  assert.equal(names.has('Azure Entra'), true)
  assert.equal(names.has('Azure App Service'), true)
  assert.equal(names.has('Microsoft SQL Server'), true)
  assert.equal(names.has('AWS Lambda'), true)
})
