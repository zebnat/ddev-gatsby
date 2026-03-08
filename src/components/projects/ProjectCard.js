import Link from 'next/link'

import Badge from '../ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export default function ProjectCard({ project }) {
  return (
    <Card as="li" className="list-none border-cyan-300/25 bg-slate-950/70 p-0">
      <CardHeader className="space-y-3 p-5 pb-2">
        <div className="flex flex-wrap items-center gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} className="normal-case tracking-normal">
              {tag}
            </Badge>
          ))}
        </div>
        <CardTitle as="h3" className="text-xl">
          <Link href={project.path} className="hover:text-cyan-100">
            {project.title}
          </Link>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3 p-5 pt-0">
        <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
          {project.description}
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-cyan-200">
          {project.date}
        </p>
      </CardContent>
    </Card>
  )
}
