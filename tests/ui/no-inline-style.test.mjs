import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

async function readText(path) {
  return readFile(new URL(path, import.meta.url), 'utf8')
}

test('skills catalog avoids inline style props and style map objects', async () => {
  const source = await readText('../../src/components/skills/SkillsCatalog.js')

  assert.equal(source.includes('style={'), false)
  assert.equal(source.includes('const styles ='), false)
})

test('stream card avoids inline style props and style map objects', async () => {
  const source = await readText('../../src/components/stream/StreamCard.js')

  assert.equal(source.includes('style={'), false)
  assert.equal(source.includes('const styles ='), false)
})
