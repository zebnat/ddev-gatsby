import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

import nextConfig from '../../apps/next/next.config.mjs'
import { localeRouting } from '../../apps/next/src/i18n/routing.mjs'

const packageJson = JSON.parse(
  await readFile(
    new URL('../../apps/next/package.json', import.meta.url),
    'utf8'
  )
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

test('next i18n dependency is present', () => {
  assert.equal(typeof packageJson.dependencies.next, 'string')
  assert.equal(typeof packageJson.dependencies['next-intl'], 'string')
  assert.equal(packageJson.dependencies.react.startsWith('^19'), true)
})
