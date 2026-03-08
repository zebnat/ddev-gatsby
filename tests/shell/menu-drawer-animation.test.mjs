import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

test('menu drawer avoids double transform animation classes', async () => {
  const source = await readFile(
    new URL('../../src/components/shell/Menu.js', import.meta.url),
    'utf8'
  )

  assert.equal(source.includes('motion-slide-in-right'), false)
  assert.equal(source.includes('transition-transform duration-300'), true)
})
