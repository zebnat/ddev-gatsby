import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const packageJson = JSON.parse(
  await readFile(new URL('../../package.json', import.meta.url), 'utf8')
)

test('critical public assets exist in next app', () => {
  assert.equal(existsSync('apps/next/public/robots.txt'), true)
  assert.equal(existsSync('apps/next/public/docs/cv.pdf'), true)
  assert.equal(existsSync('apps/next/public/site.webmanifest'), true)
  assert.equal(existsSync('apps/next/public/scripts/vimrc.cfg'), true)
})

test('package scripts include next static asset sync', () => {
  assert.equal(typeof packageJson.scripts['next:sync-static'], 'string')
})
