import SectionHeader from '../ui/section-header'
import Badge from '../ui/badge'
import { Card, CardContent } from '../ui/card'
import ProjectCard from './ProjectCard'

export default function ProjectsListContent({
  translation,
  projects,
  tagStats,
}) {
  return (
    <section className="space-y-6">
      <SectionHeader title={translation.h1} description={translation.h2} />

      <Card className="border-cyan-300/25 bg-slate-900/70">
        <CardContent className="space-y-4 p-5">
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            {translation.summary}
          </p>

          <p className="font-mono text-xs uppercase tracking-[0.1em] text-cyan-100">
            {translation.totalProjects} {projects.length}
          </p>

          <details className="rounded-lg border border-cyan-300/20 bg-slate-950/60 p-4">
            <summary className="cursor-pointer text-sm font-semibold text-slate-100">
              {translation.filter}
            </summary>
            <div className="mt-3 flex flex-wrap gap-2">
              {tagStats.map((tag) => (
                <Badge
                  key={tag.name}
                  variant="accent"
                  className="normal-case tracking-normal"
                >
                  {tag.name} ({tag.count})
                </Badge>
              ))}
            </div>
          </details>
        </CardContent>
      </Card>

      <ol className="m-0 grid list-none gap-4 p-0 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.path} project={project} />
        ))}
      </ol>
    </section>
  )
}
