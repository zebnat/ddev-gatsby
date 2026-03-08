import assert from 'node:assert/strict'
import test from 'node:test'

import localesLoader from '../../src/lib/content/locales.js'

const { getDefaultLang, getMenuByLang, getSiteMetadataByLang } = localesLoader

test('returns configured default language', () => {
  assert.equal(getDefaultLang(), 'es')
})

test('returns menu entries for es and en', () => {
  const esMenu = getMenuByLang('es')
  const enMenu = getMenuByLang('en')

  assert.ok(esMenu.length > 0)
  assert.ok(enMenu.length > 0)
})

test('normalizes menu routes keeping es without prefix and en with /en prefix', () => {
  const esHome = getMenuByLang('es').find((entry) => entry.uniqueId === 'home')
  const enHome = getMenuByLang('en').find((entry) => entry.uniqueId === 'home')

  assert.equal(esHome.fullRoute, '/')
  assert.equal(enHome.fullRoute, '/en/')
})

test('returns site metadata by language', () => {
  const esMeta = getSiteMetadataByLang('es')
  const enMeta = getSiteMetadataByLang('en')

  assert.equal(esMeta.currentLang, 'es')
  assert.equal(enMeta.currentLang, 'en')
})
