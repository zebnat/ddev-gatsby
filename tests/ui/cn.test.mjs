import assert from 'node:assert/strict'
import test from 'node:test'

import cn from '../../src/lib/ui/cn.js'

test('merges classes and resolves tailwind conflicts', () => {
  const className = cn(
    'px-2 py-1',
    'px-4',
    false && 'hidden',
    ['text-sm', null],
    { 'font-semibold': true, italic: false }
  )

  assert.equal(className, 'py-1 px-4 text-sm font-semibold')
})

test('returns an empty string for only falsy values', () => {
  assert.equal(cn(undefined, false, null), '')
})
