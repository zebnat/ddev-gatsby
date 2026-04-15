import skillsMapSummary from '../../lib/content/skills-map-summary.js'

import Badge from '../ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

const { buildSkillMapSummary } = skillsMapSummary

const roleLabelKey = {
  tech_lead: 'role_tech_lead',
  senior_fullstack: 'role_senior_fullstack',
  cloud_devops: 'role_cloud_devops',
}

const fitLabelKey = {
  strong: 'fit_strong',
  good: 'fit_good',
  developing: 'fit_developing',
}

function fitVariant(fit) {
  if (fit === 'strong') {
    return 'accent'
  }

  if (fit === 'good') {
    return 'warning'
  }

  return 'neutral'
}

export default function SkillMapSummary({ items, translation }) {
  const summary = buildSkillMapSummary(items)

  return (
    <section className="space-y-3">
      <Card className="border-cyan-300/30 bg-slate-900/70">
        <CardHeader className="pb-2">
          <CardTitle as="h3" className="text-xl">
            {translation.role_fit_title}
          </CardTitle>
          <p className="text-sm text-slate-300">
            {translation.role_fit_subtitle}
          </p>
        </CardHeader>
      </Card>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {summary.map((item) => (
          <Card
            key={item.roleId}
            className="border-cyan-300/20 bg-slate-950/70 p-0"
          >
            <CardContent className="space-y-2 p-4">
              <div className="flex items-start justify-between gap-3">
                <h4 className="m-0 text-sm font-semibold uppercase tracking-[0.12em] text-slate-100">
                  {translation[roleLabelKey[item.roleId]]}
                </h4>
                <Badge
                  variant={fitVariant(item.fit)}
                  className="normal-case tracking-normal"
                >
                  {translation[fitLabelKey[item.fit]]}
                </Badge>
              </div>

              <p className="m-0 text-sm text-slate-300">
                {translation.label_key_evidence}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.keyEvidence.map((skill) => (
                  <Badge
                    key={`${item.roleId}-${skill}`}
                    className="normal-case tracking-normal"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              <p className="m-0 text-sm text-slate-300">
                {translation.label_recency}: {item.recentCount}/
                {item.totalCount}
              </p>
              <p className="m-0 text-sm text-slate-300">
                {translation.label_depth}: {translation.depth_advanced_plus}{' '}
                {item.depth.advancedPlus} | {translation.depth_intermediate}{' '}
                {item.depth.intermediate} | {translation.depth_foundational}{' '}
                {item.depth.foundational}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
