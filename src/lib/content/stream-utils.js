function formatDuration(durationMs) {
  const totalSeconds = Math.floor(durationMs / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  const hh = String(hours).padStart(2, '0')
  const mm = String(minutes).padStart(2, '0')
  const ss = String(seconds).padStart(2, '0')

  if (days > 0) {
    return `${days}d ${hh}:${mm}:${ss}`
  }

  return `${hh}:${mm}:${ss}`
}

function getTimeLeftLabel(targetDate, options = {}) {
  const nowMs = options.nowMs ?? Date.now()
  const targetMs = new Date(targetDate).getTime()
  const distance = targetMs - nowMs

  if (!Number.isFinite(targetMs) || distance <= 0) {
    return '???'
  }

  return formatDuration(distance)
}

module.exports = {
  formatDuration,
  getTimeLeftLabel,
}
