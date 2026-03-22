const ROLE_RULES = [
  {
    roleId: 'tech_lead',
    patterns: [
      /technical leadership/i,
      /software architecture/i,
      /team mentoring/i,
      /(domain-driven design|ddd)/i,
      /microservices architecture/i,
      /ci\/cd strategy/i,
      /observability/i,
    ],
  },
  {
    roleId: 'senior_fullstack',
    patterns: [
      /javascript/i,
      /typescript/i,
      /reactjs/i,
      /nextjs/i,
      /nodejs/i,
      /rest/i,
      /(testing library|jest)/i,
    ],
  },
  {
    roleId: 'cloud_devops',
    patterns: [
      /azure cloud/i,
      /aws/i,
      /docker/i,
      /container orchestration/i,
      /github actions/i,
      /nginx/i,
      /(debian linux|arch linux|linux)/i,
      /ssh/i,
    ],
  },
]

function getFitTier(weightedScore) {
  if (weightedScore >= 75) {
    return 'strong'
  }

  if (weightedScore >= 55) {
    return 'good'
  }

  return 'developing'
}

function getDepthBuckets(matchedItems) {
  return matchedItems.reduce(
    (acc, item) => {
      if (item.level >= 4) {
        acc.advancedPlus += 1
      } else if (item.level === 3) {
        acc.intermediate += 1
      } else {
        acc.foundational += 1
      }

      return acc
    },
    {
      advancedPlus: 0,
      intermediate: 0,
      foundational: 0,
    }
  )
}

function buildRoleSummary(items, roleRule) {
  const matchedPatternIndexes = new Set()
  const matchedItems = items.filter((item) => {
    const isMatch = roleRule.patterns.some((pattern, index) => {
      const matched = pattern.test(item.skill)
      if (matched) {
        matchedPatternIndexes.add(index)
      }

      return matched
    })

    return isMatch
  })

  const totalCount = matchedItems.length
  const recentCount = matchedItems.filter((item) => item.isRecent).length
  const totalLevels = matchedItems.reduce((sum, item) => sum + item.level, 0)
  const averageLevel = totalCount === 0 ? 0 : totalLevels / totalCount
  const depthScore = (averageLevel / 5) * 100
  const relevanceScore =
    (matchedPatternIndexes.size / roleRule.patterns.length) * 100
  const recencyScore = totalCount === 0 ? 0 : (recentCount / totalCount) * 100
  const weightedScore =
    depthScore * 0.5 + relevanceScore * 0.35 + recencyScore * 0.15

  const keyEvidence = matchedItems
    .slice()
    .sort((left, right) => {
      if (right.level !== left.level) {
        return right.level - left.level
      }

      if (left.isRecent !== right.isRecent) {
        return left.isRecent ? -1 : 1
      }

      return left.skill.localeCompare(right.skill)
    })
    .slice(0, 3)
    .map((item) => item.skill)

  return {
    roleId: roleRule.roleId,
    fit: getFitTier(weightedScore),
    keyEvidence,
    recentCount,
    totalCount,
    depth: getDepthBuckets(matchedItems),
  }
}

function buildSkillMapSummary(items) {
  return ROLE_RULES.map((roleRule) => buildRoleSummary(items, roleRule))
}

module.exports = {
  buildSkillMapSummary,
}
