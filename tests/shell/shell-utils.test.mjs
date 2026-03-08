import assert from 'node:assert/strict'
import test from 'node:test'

import localesLoader from '../../src/lib/content/locales.js'
import shellUtils from '../../src/components/shell/shell-utils.js'

const { getDefaultLang, getMenuByLang } = localesLoader
const { detectCurrentLang, getLanguageLinks } = shellUtils

test('language links include both locales from menu home entry', () => {
  const defaultLang = getDefaultLang()
  const menuItems = getMenuByLang('es', { includeDisabled: false })
  const links = getLanguageLinks(menuItems, defaultLang)

  assert.deepEqual(links.map((item) => item.locale).sort(), ['en', 'es'])
})

test('language links fallback includes default and english routes', () => {
  const links = getLanguageLinks([], 'es')

  assert.deepEqual(links, [
    { locale: 'es', url: '/' },
    { locale: 'en', url: '/en/' },
  ])
})

test('detect current language from pathname', () => {
  assert.equal(detectCurrentLang('/'), 'es')
  assert.equal(detectCurrentLang('/en'), 'en')
  assert.equal(detectCurrentLang('/en/projects/'), 'en')
  assert.equal(detectCurrentLang('/proyectos/'), 'es')
})
