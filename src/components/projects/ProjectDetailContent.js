import Markdown from 'markdown-to-jsx'

import Badge from '../ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export default function ProjectDetailContent({ project, translation }) {
  return (
    <article className="space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-slate-100 sm:text-4xl">
          {project.title}
        </h1>
        <p className="text-base text-slate-300 sm:text-lg">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} className="normal-case tracking-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      <Card className="border-cyan-300/20 bg-slate-950/70">
        <CardContent className="space-y-3 p-5 text-slate-300 [&_a]:text-cyan-300 [&_h2]:mt-6 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-slate-100 [&_h3]:mt-5 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-slate-100 [&_li]:leading-relaxed [&_p]:leading-relaxed [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-cyan-300/25 [&_pre]:bg-slate-900 [&_pre]:p-3">
          <Markdown
            options={{
              overrides: {
                img: {
                  props: {
                    loading: 'lazy',
                    className:
                      'h-auto max-w-full rounded-lg border border-cyan-300/25',
                  },
                },
              },
            }}
          >
            {project.body}
          </Markdown>
        </CardContent>
      </Card>

      {project.tags.includes('private-project') ? (
        <Card className="border-amber-300/45 bg-amber-500/10">
          <CardHeader className="pb-2">
            <CardTitle as="h2" className="text-lg text-amber-100">
              Private Project Notice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-amber-100/95">
              {translation.privateDisclaimer}
            </p>
          </CardContent>
        </Card>
      ) : null}

      <p>
        <a
          href={project.lang === 'es' ? '/proyectos/' : '/en/projects/'}
          className="font-semibold"
        >
          {translation.projectPage}
        </a>
      </p>
    </article>
  )
}
