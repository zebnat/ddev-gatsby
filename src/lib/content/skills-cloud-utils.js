const categoryBySource = {
  languages: 'languages',
  libs: 'frameworks',
  tools: 'tools',
  other: 'concepts',
}

function getSkillCloudItems(skills) {
  const dedupe = new Map()

  Object.entries(categoryBySource).forEach(([sourceKey, category]) => {
    const list = Array.isArray(skills[sourceKey]) ? skills[sourceKey] : []

    list.forEach((item) => {
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
      }
    })
  })

  return [...dedupe.values()]
}

module.exports = {
  getSkillCloudItems,
}
