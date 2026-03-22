import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

test('skills catalog renders summary map before skill groups', async () => {
  const source = await readFile(
    new URL('../../src/components/skills/SkillsCatalog.js', import.meta.url),
    'utf8'
  )

  assert.equal(source.includes('import SkillMapSummary'), true)
  assert.equal(source.includes('<SkillMapSummary'), true)
})
