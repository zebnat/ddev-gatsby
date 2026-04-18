import Link from 'next/link'

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

function ActionCard({ href, title, description, cta, featured = false }) {
  return (
    <Link href={href} className="group block">
      <Card
        className={`h-full border transition duration-200 ${
          featured
            ? 'border-cyan-300/45 bg-cyan-500/10 hover:border-cyan-200/80 hover:bg-cyan-400/15'
            : 'border-slate-700/80 bg-slate-900/70 hover:border-cyan-300/55 hover:bg-slate-900/90'
        }`}
      >
        <CardHeader className="pb-2">
          <CardTitle as="h2" className="text-xl text-slate-100">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            {description}
          </p>
          <p className="inline-flex rounded-md border border-cyan-300/35 px-3 py-2 text-sm font-semibold text-cyan-100 transition group-hover:border-cyan-200 group-hover:text-cyan-50">
            {cta}
          </p>
        </CardContent>
      </Card>
    </Link>
  )
}

export default function HomeActionGrid({ translation, routes }) {
  return (
    <section className="space-y-3" aria-label={translation.quick_paths_title}>
      <div className="grid gap-3 md:grid-cols-3">
        <div className="md:col-span-2">
          <ActionCard
            href={routes.skills}
            title={translation.skills_path_title}
            description={translation.skills_path_desc}
            cta={translation.skills_path_cta}
            featured
          />
        </div>

        <ActionCard
          href={routes.projects}
          title={translation.projects_path_title}
          description={translation.projects_path_desc}
          cta={translation.projects_path_cta}
        />

        <ActionCard
          href={routes.about}
          title={translation.about_path_title}
          description={translation.about_path_desc}
          cta={translation.about_path_cta}
        />
      </div>
    </section>
  )
}
