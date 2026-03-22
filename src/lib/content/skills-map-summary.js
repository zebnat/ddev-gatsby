const SUMMARY_RULES = [
  {
    id: 'ai_automation',
    pattern: /\b(ai|llm|agent|automation)\b/i,
  },
  {
    id: 'cloud_devops',
    pattern:
      /\b(aws|azure|cloud|docker|container|orchestration|kubernetes|linux|nginx|github actions|ci\/cd|devops|ssh|rsync|bash|php-fpm|observability)\b/i,
  },
  {
    id: 'software_architecture',
    pattern:
      /\b(architecture|technical leadership|team mentoring|domain-driven|ddd|microservices|solid|oop|stakeholder|clean architecture|software design patterns)\b/i,
  },
  {
    id: 'data_integration',
    pattern:
      /\b(mysql|postgresql|sql|graphql|rest|message bus|social api|regexp)\b/i,
  },
  {
    id: 'quality_testing',
    pattern: /\b(testing|jest|testing library|agile testing)\b/i,
  },
  {
    id: 'web_engineering',
    pattern:
      /\b(react|nextjs|javascript|typescript|php|nodejs|html|css|tailwind|gatsby|express|laravel|jquery|bootstrap|ui design|ux|responsive|web development)\b/i,
  },
]

function getCategoryId(skillName) {
  const matched = SUMMARY_RULES.find((rule) => rule.pattern.test(skillName))
  return matched ? matched.id : 'web_engineering'
}

function buildSkillMapSummary(items) {
  const summary = new Map(
    SUMMARY_RULES.map((rule) => [rule.id, { id: rule.id, count: 0, total: 0 }])
  )

  items.forEach((item) => {
    const categoryId = getCategoryId(item.skill)
    const target = summary.get(categoryId)

    target.count += 1
    target.total += item.level
  })

  return [...summary.values()].map((item) => ({
    id: item.id,
    count: item.count,
    average:
      item.count === 0 ? 0 : Number((item.total / item.count).toFixed(1)),
  }))
}

module.exports = {
  buildSkillMapSummary,
}
