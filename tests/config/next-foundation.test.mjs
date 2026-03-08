import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

import nextConfig from '../../next.config.mjs'
import { localeRouting } from '../../src/i18n/routing.mjs'

const packageJson = JSON.parse(
  await readFile(new URL('../../package.json', import.meta.url), 'utf8')
)

test('next uses static export with trailing slash', () => {
  assert.equal(nextConfig.output, 'export')
  assert.equal(nextConfig.trailingSlash, true)
})

test('locale routing keeps Spanish as default without /es prefix', () => {
  assert.deepEqual(localeRouting.locales, ['es', 'en'])
  assert.equal(localeRouting.defaultLocale, 'es')
  assert.equal(localeRouting.localePrefix, 'as-needed')
})

test('next runtime dependencies are present', () => {
  assert.equal(typeof packageJson.dependencies.next, 'string')
  assert.equal(typeof packageJson.dependencies['markdown-to-jsx'], 'string')
  assert.equal(packageJson.dependencies.react.startsWith('^19'), true)
})
