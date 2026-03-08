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
  sortSkillsByLevelAndRecency,
}
