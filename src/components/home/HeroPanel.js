import Link from 'next/link'

import Badge from '../ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

const focusByLang = {
  en: ['AI Engineering', 'MLOps Foundations', 'Platform Thinking'],
  es: ['Ingenieria de IA', 'Fundamentos MLOps', 'Pensamiento de Plataforma'],
}

export default function HeroPanel({
  lang,
  title,
  subtitle,
  quote,
  aboutRoute,
  aboutCta,
  projectsRoute,
  projectsCta,
}) {
  const focus = focusByLang[lang] || focusByLang.es

  return (
    <Card className="relative overflow-hidden border-cyan-300/35 bg-slate-950/75">
      <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan-400/20 blur-3xl" />
      <CardHeader className="relative">
        <Badge variant="accent" className="w-fit">
          Senior Engineer
        </Badge>
        <CardTitle as="h1" className="text-3xl sm:text-4xl">
          {title}
        </CardTitle>
        <p className="max-w-3xl text-base text-slate-200 sm:text-lg">
          {subtitle}
        </p>
      </CardHeader>

      <CardContent className="relative space-y-5">
        <blockquote className="border-l-2 border-cyan-300/45 pl-4 text-sm italic text-slate-300 sm:text-base">
          {quote}
        </blockquote>

        <div className="flex flex-wrap gap-2">
          {focus.map((item, index) => (
            <Badge
              key={`focus-${index}-${item}`}
              variant="neutral"
              className="normal-case tracking-normal"
            >
              {item}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href={aboutRoute}
            className="inline-flex h-10 items-center justify-center rounded-md bg-cyan-400 px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            {aboutCta}
          </Link>
          <Link
            href={projectsRoute}
            className="inline-flex h-10 items-center justify-center rounded-md border border-cyan-300/40 px-4 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/70 hover:bg-cyan-300/10"
          >
            {projectsCta}
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
