const portfolioLoader = require('./portfolio')

const { getPortfolioItems } = portfolioLoader

async function getProjectsByLang(lang) {
  return getPortfolioItems({ lang })
}

function getTagStats(projects) {
  const counts = new Map()

  for (const project of projects) {
    for (const tag of project.tags || []) {
      counts.set(tag, (counts.get(tag) || 0) + 1)
    }
  }

  return Array.from(counts.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => {
      if (a.count !== b.count) {
        return b.count - a.count
      }
      return a.name.localeCompare(b.name)
    })
}

module.exports = {
  getProjectsByLang,
  getTagStats,
}
