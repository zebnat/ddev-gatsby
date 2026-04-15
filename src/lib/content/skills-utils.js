const SKILL_GROUP_KEYS = ['languages', 'libs', 'tools', 'other']

function getCatalogSkillItems(skills) {
  return SKILL_GROUP_KEYS.flatMap((groupKey) => {
    const items = Array.isArray(skills[groupKey]) ? skills[groupKey] : []

    return items.map((item) => ({ ...item, category: groupKey }))
  })
}

function sortSkillsByLevelAndRecency(skills) {
  return [...skills].sort((a, b) => {
    if (a.level !== b.level) {
      return b.level - a.level
    }

    if (a.isRecent !== b.isRecent) {
      return a.isRecent ? -1 : 1
    }

    return a.skill.localeCompare(b.skill)
  })
}

module.exports = {
  getCatalogSkillItems,
  sortSkillsByLevelAndRecency,
}
