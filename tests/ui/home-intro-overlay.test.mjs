import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const globalsCss = await readFile(
  new URL('../../app/globals.css', import.meta.url),
  'utf8'
)

test('page-enter avoids transforms so fixed overlays stay viewport-bound', () => {
  const pageEnterStart = globalsCss.indexOf('@keyframes page-enter')
  const fadeUpStart = globalsCss.indexOf('@keyframes fade-up')

  assert.notEqual(pageEnterStart, -1)
  assert.notEqual(fadeUpStart, -1)

  const pageEnterBlock = globalsCss.slice(pageEnterStart, fadeUpStart)

  assert.equal(pageEnterBlock.includes('opacity:'), true)
  assert.equal(pageEnterBlock.includes('transform:'), false)
})
