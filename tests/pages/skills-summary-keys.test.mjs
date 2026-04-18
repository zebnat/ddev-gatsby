import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

test('skill map summary cards use stable roleId key', async () => {
  const source = await readFile(
    new URL('../../src/components/skills/SkillMapSummary.js', import.meta.url),
    'utf8'
  )

  assert.equal(source.includes('key={item.roleId}'), true)
})
