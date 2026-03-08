import assert from 'node:assert/strict'
import test from 'node:test'

import streamUtils from '../../src/lib/content/stream-utils.js'

const { formatDuration, getTimeLeftLabel } = streamUtils

test('formats milliseconds as HH:MM:SS', () => {
  assert.equal(formatDuration(3723000), '01:02:03')
})

test('formats milliseconds with days when needed', () => {
  assert.equal(formatDuration(90061000), '1d 01:01:01')
})

test('returns ??? when stream start date is in the past', () => {
  const value = getTimeLeftLabel('2020-01-01T00:00:00.000Z', {
    nowMs: Date.UTC(2020, 0, 1, 0, 0, 1),
  })

  assert.equal(value, '???')
})
