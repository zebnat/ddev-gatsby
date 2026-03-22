import skillsMapSummary from '../../lib/content/skills-map-summary.js'

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

const { buildSkillMapSummary } = skillsMapSummary

const categoryLabelKey = {
  cloud_devops: 'summary_cloud_devops',
  software_architecture: 'summary_software_architecture',
  ai_automation: 'summary_ai_automation',
  web_engineering: 'summary_web_engineering',
  data_integration: 'summary_data_integration',
  quality_testing: 'summary_quality_testing',
}

function avgToneClass(average) {
  if (average >= 4) {
    return 'text-cyan-200'
  }

  if (average >= 3) {
    return 'text-sky-200'
  }

  return 'text-slate-300'
}

export default function SkillMapSummary({ items, translation }) {
  const summary = buildSkillMapSummary(items)

  return (
    <section className="space-y-3">
      <Card className="border-cyan-300/30 bg-slate-900/70">
        <CardHeader className="pb-2">
          <CardTitle as="h3" className="text-xl">
            {translation.summary_title}
          </CardTitle>
          <p className="text-sm text-slate-300">
            {translation.summary_subtitle}
          </p>
        </CardHeader>
      </Card>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {summary.map((item) => (
          <Card
            key={item.id}
            className="border-cyan-300/20 bg-slate-950/70 p-0"
          >
            <CardContent className="space-y-2 p-4">
              <h4 className="m-0 text-sm font-semibold uppercase tracking-[0.12em] text-slate-100">
                {translation[categoryLabelKey[item.id]]}
              </h4>
              <p className="m-0 text-sm text-slate-300">
                {item.count} {translation.summary_count_label}
              </p>
              <p
                className={`m-0 text-lg font-semibold ${avgToneClass(
                  item.average
                )}`}
              >
                {translation.summary_average_label}: {item.average}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
