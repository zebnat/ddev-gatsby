const portfolioLoader = require('./portfolio')

const { getPortfolioItems } = portfolioLoader

function normalizePath(routePath) {
  if (!routePath || routePath === '/') {
    return '/'
  }

  let normalized = routePath.startsWith('/') ? routePath : `/${routePath}`
  if (!normalized.endsWith('/')) {
    normalized = `${normalized}/`
  }

  return normalized
}

function pathToSlugSegments(routePath) {
  return normalizePath(routePath).split('/').filter(Boolean)
}

function slugSegmentsToPath(slugSegments) {
  return normalizePath(`/${(slugSegments || []).join('/')}`)
}

async function getProjectPaths() {
  const items = await getPortfolioItems()
  return items.map((item) => normalizePath(item.path))
}

async function getProjectByPath(routePath) {
  const normalizedPath = normalizePath(routePath)
  const items = await getPortfolioItems()
  return (
    items.find((item) => normalizePath(item.path) === normalizedPath) || null
  )
}

async function getProjectBySlug(slugSegments) {
  const routePath = slugSegmentsToPath(slugSegments)
  return getProjectByPath(routePath)
}

module.exports = {
  getProjectPaths,
  getProjectByPath,
  getProjectBySlug,
  normalizePath,
  pathToSlugSegments,
  slugSegmentsToPath,
}
