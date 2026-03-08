import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

test('top bar brand links to localized homepage', async () => {
  const source = await readFile(
    new URL('../../src/components/shell/TopBar.js', import.meta.url),
    'utf8'
  )

  assert.equal(
    source.includes("href={currentLang === 'en' ? '/en/' : '/'}"),
    true
  )
})
