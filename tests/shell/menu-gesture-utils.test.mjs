import assert from 'node:assert/strict'
import test from 'node:test'

import menuGestureUtils from '../../src/components/shell/menu-gesture-utils.js'

const { isClosingSwipe } = menuGestureUtils

test('detects a valid close swipe gesture', () => {
  const shouldClose = isClosingSwipe({
    startX: 20,
    endX: 120,
    startY: 100,
    endY: 110,
  })

  assert.equal(shouldClose, true)
})

test('ignores short horizontal movement', () => {
  const shouldClose = isClosingSwipe({
    startX: 20,
    endX: 60,
    startY: 100,
    endY: 104,
  })

  assert.equal(shouldClose, false)
})

test('ignores mostly vertical swipes', () => {
  const shouldClose = isClosingSwipe({
    startX: 20,
    endX: 120,
    startY: 100,
    endY: 190,
  })

  assert.equal(shouldClose, false)
})
