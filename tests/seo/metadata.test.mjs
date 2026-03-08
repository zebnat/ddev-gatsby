import assert from 'node:assert/strict'
import test from 'node:test'

import metadataHelpers from '../../src/lib/seo/metadata.js'

const { buildAlternates, buildCanonicalUrl, buildPageMetadata } =
  metadataHelpers

test('builds hreflang alternates for project pages', () => {
  const result = buildAlternates(['es%%/proyectos/x/', 'en%%/en/projects/x/'])

  assert.equal(result.languages.es, '/proyectos/x/')
  assert.equal(result.languages.en, '/en/projects/x/')
})

test('builds canonical url with domain and route', () => {
  assert.equal(
    buildCanonicalUrl('https://www.danieldev.es', '/proyectos/x/'),
    'https://www.danieldev.es/proyectos/x/'
  )
})

test('builds next metadata alternates payload', () => {
  const result = buildPageMetadata({
    domainUrl: 'https://www.danieldev.es',
    canonicalPath: '/en/projects/x/',
    hreflangs: ['es%%/proyectos/x/', 'en%%/en/projects/x/'],
  })

  assert.equal(
    result.alternates.canonical,
    'https://www.danieldev.es/en/projects/x/'
  )
  assert.equal(result.alternates.languages.es, '/proyectos/x/')
})
