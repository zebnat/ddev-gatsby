import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

import skillsCloudUtils from '../../src/lib/content/skills-cloud-utils.js'

const { getSkillCloudItems } = skillsCloudUtils

async function readText(path) {
  return readFile(new URL(path, import.meta.url), 'utf8')
}

test('skills pages include 3D cloud component above catalog', async () => {
  const pageEs = await readText('../../app/(site)/tecnologias/page.js')
  const pageEn = await readText('../../app/(site)/en/skills/page.js')

  assert.equal(pageEs.includes('import SkillsTagCloud3D'), true)
  assert.equal(pageEs.includes('<SkillsTagCloud3D'), true)

  assert.equal(pageEn.includes('import SkillsTagCloud3D'), true)
  assert.equal(pageEn.includes('<SkillsTagCloud3D'), true)
})

test('3D cloud component uses canvas and drag rotation controls', async () => {
  const component = await readText(
    '../../src/components/skills/SkillsTagCloud3D.js'
  )

  assert.equal(component.includes('Canvas'), true)
  assert.equal(component.includes('OrbitControls'), true)
  assert.equal(component.includes('Billboard'), true)
  assert.equal(component.includes('enableZoom={true}'), true)
  assert.equal(component.includes('minDistance={10}'), true)
  assert.equal(component.includes('maxDistance={24}'), true)
  assert.equal(component.includes('autoRotate'), true)
  assert.equal(component.includes('translation.cloud_hint'), false)
})

test('skill cloud dataset utility flattens categories and deduplicates skill names', () => {
  const items = getSkillCloudItems({
    languages: [{ skill: 'Nodejs', level: 3, isRecent: true }],
    libs: [
      { skill: 'Nodejs', level: 2, isRecent: false },
      { skill: 'ReactJS', level: 4, isRecent: true },
    ],
    tools: [{ skill: 'Docker', level: 3, isRecent: true }],
    other: [{ skill: 'Software Architecture', level: 4, isRecent: true }],
  })
  const names = items.map((item) => item.skill)

  assert.equal(items.length, 4)
  assert.equal(names.includes('Nodejs'), true)
  assert.equal(names.includes('ReactJS'), true)
  assert.equal(names.includes('Docker'), true)
  assert.equal(names.includes('Software Architecture'), true)
})

test('skills data includes linkedin-derived leadership and AI skills', async () => {
  const source = await readText('../../data/skills.js')

  assert.equal(source.includes('Technical Leadership'), true)
  assert.equal(source.includes('AI Agent Orchestration'), true)
  assert.equal(source.includes('GitHub Actions'), true)
})
