function isClosingSwipe({
  startX,
  endX,
  startY,
  endY,
  minDistance = 70,
  maxVerticalDrift = 56,
}) {
  if (
    [startX, endX, startY, endY].some(
      (value) => typeof value !== 'number' || Number.isNaN(value)
    )
  ) {
    return false
  }

  const horizontalDistance = endX - startX
  const verticalDistance = Math.abs(endY - startY)

  return (
    horizontalDistance >= minDistance && verticalDistance <= maxVerticalDrift
  )
}

module.exports = {
  isClosingSwipe,
}
