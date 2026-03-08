import assert from 'node:assert/strict'
import test from 'node:test'

import richText from '../../src/lib/content/rich-text.js'

const { injectLinkPlaceholder } = richText

test('injects route into Link placeholder tags', () => {
  const input = '<p>Hello <Link>world</Link></p>'
  const output = injectLinkPlaceholder(input, '/about/')

  assert.equal(output.includes('<a href="/about/">world</a>'), true)
})

test('keeps html unchanged if Link placeholder does not exist', () => {
  const input = '<p>No placeholders</p>'
  const output = injectLinkPlaceholder(input, '/about/')

  assert.equal(output, input)
})
