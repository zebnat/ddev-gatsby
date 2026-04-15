const skillsUtils = require('./skills-utils.js')

const categoryBySource = {
  languages: 'languages',
  libs: 'frameworks',
  tools: 'tools',
  other: 'concepts',
}

const { getCatalogSkillItems } = skillsUtils

function getSkillCloudItems(skills) {
  const dedupe = new Map()

  getCatalogSkillItems(skills).forEach((item) => {
    const category = categoryBySource[item.category]
    const key = item.skill.toLowerCase()

    if (!dedupe.has(key)) {
      dedupe.set(key, {
        skill: item.skill,
        level: item.level,
        isRecent: item.isRecent,
        category,
      })
      return
    }

    const existing = dedupe.get(key)
    if (item.level > existing.level) {
      dedupe.set(key, {
        ...existing,
        level: item.level,
        isRecent: item.isRecent || existing.isRecent,
        category,
      })
      return
    }

    if (item.isRecent && !existing.isRecent) {
      dedupe.set(key, {
        ...existing,
        isRecent: true,
      })
    }
  })

  return [...dedupe.values()]
}

module.exports = {
  getSkillCloudItems,
}
