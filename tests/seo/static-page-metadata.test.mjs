import assert from 'node:assert/strict'
import test from 'node:test'

import staticPageMetadata from '../../src/content/static-page-metadata.js'

const { buildStaticPageMetadata } = staticPageMetadata

test('builds canonical and hreflang alternates for static menu page', () => {
  const metadata = buildStaticPageMetadata({
    lang: 'es',
    uniqueId: 'project',
    title: 'Proyectos',
  })

  assert.equal(metadata.title, 'Proyectos')
  assert.equal(
    metadata.alternates.canonical,
    'https://www.danieldev.es/proyectos/'
  )
  assert.equal(metadata.alternates.languages.en, '/en/projects/')
})
