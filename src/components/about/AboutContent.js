import Badge from '../ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import SectionHeader from '../ui/section-header'
import AboutPhotoCarousel from './AboutPhotoCarousel'

const caseLabelsByLang = {
  en: {
    context: 'Context',
    challenge: 'Challenge',
    approach: 'Approach',
    outcome: 'Outcome',
  },
  es: {
    context: 'Contexto',
    challenge: 'Reto',
    approach: 'Enfoque',
    outcome: 'Resultado',
  },
}

function FocusPill({ value }) {
  return (
    <Badge variant="accent" className="normal-case tracking-normal">
      {value}
    </Badge>
  )
}

function isExternalHref(href) {
  return /^https?:\/\//.test(href)
}

export default function AboutContent({ lang, translation }) {
  const caseLabels = caseLabelsByLang[lang] || caseLabelsByLang.es

  return (
    <article className="motion-stagger space-y-7" data-lang={lang}>
      <AboutPhotoCarousel translation={translation} />

      <Card className="motion-fade-up border-cyan-300/35 bg-slate-950/80">
        <CardHeader className="space-y-3">
          <Badge className="w-fit normal-case tracking-normal">
            {translation.bioquote}
          </Badge>
          <SectionHeader title={translation.h1} description={translation.h2} />
        </CardHeader>
        <CardContent className="space-y-4">
          <h2 className="m-0 text-xl font-semibold text-slate-100">
            {translation.snapshot_title}
          </h2>
          <p className="text-sm text-slate-300 sm:text-base">
            {translation.snapshot_body}
          </p>

          <div className="grid gap-2 sm:grid-cols-3">
            {translation.snapshot_points.map((item, index) => (
              <div
                key={`snapshot-point-${index}-${item}`}
                className="rounded-lg border border-cyan-300/20 bg-slate-900/60 p-3"
              >
                <p className="m-0 text-sm leading-relaxed text-slate-200">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-2 border-t border-cyan-300/15 pt-3">
            <p className="m-0 text-sm text-slate-200 sm:text-base">
              {translation.intro1}
            </p>
            <p className="m-0 text-sm text-slate-300 sm:text-base">
              {translation.intro2}
            </p>
          </div>

          <section className="space-y-2">
            <h2 className="m-0 text-xl font-semibold text-slate-100">
              {translation.focus_title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {translation.focus_items.map((item, index) => (
                <FocusPill key={`focus-${index}-${item}`} value={item} />
              ))}
            </div>
          </section>
        </CardContent>
      </Card>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-100">
          {translation.expertise_title}
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {translation.expertise_areas.map((item, index) => (
            <Card
              key={`expertise-${index}-${item.title}`}
              className="motion-fade-up border-cyan-300/20 bg-slate-950/70"
            >
              <CardHeader className="pb-2">
                <CardTitle as="h3" className="text-base sm:text-lg">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                  {item.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-100">
          {translation.case_studies_title}
        </h2>
        <div className="grid gap-3 lg:grid-cols-3">
          {translation.case_studies.map((item, index) => (
            <Card
              key={`case-${index}-${item.title}`}
              className="motion-fade-up border-cyan-300/20 bg-slate-950/70"
            >
              <CardHeader className="space-y-2 pb-2">
                <CardTitle as="h3" className="text-base sm:text-lg">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                  <span className="font-semibold text-slate-100">
                    {caseLabels.context}:{' '}
                  </span>
                  {item.context}
                </p>
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                  <span className="font-semibold text-slate-100">
                    {caseLabels.challenge}:{' '}
                  </span>
                  {item.challenge}
                </p>
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                  <span className="font-semibold text-slate-100">
                    {caseLabels.approach}:{' '}
                  </span>
                  {item.approach}
                </p>
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                  <span className="font-semibold text-slate-100">
                    {caseLabels.outcome}:{' '}
                  </span>
                  {item.outcome}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <Card className="motion-fade-up motion-delay-1">
          <CardHeader className="pb-2">
            <CardTitle as="h2" className="text-xl">
              {translation.why_title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              {translation.why_answer}
            </p>
          </CardContent>
        </Card>

        <Card className="motion-fade-up motion-delay-2">
          <CardHeader className="pb-2">
            <CardTitle as="h2" className="text-xl">
              {translation.how_i_work_title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              {translation.how_i_work}
            </p>
          </CardContent>
        </Card>
      </section>

      <Card className="motion-fade-up motion-delay-2 border-cyan-300/30 bg-slate-950/80">
        <CardHeader className="pb-2">
          <CardTitle as="h2" className="text-xl">
            {translation.proof_title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            {translation.proof_intro}
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {translation.proof_links.map((item, index) => (
              <a
                key={`proof-link-${index}-${item.label}`}
                href={item.href}
                target={isExternalHref(item.href) ? '_blank' : undefined}
                rel={isExternalHref(item.href) ? 'noreferrer' : undefined}
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-cyan-300/35 px-3 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/70 hover:bg-cyan-300/10"
              >
                {item.label}
              </a>
            ))}
          </div>
        </CardContent>
      </Card>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-slate-100">
          {translation.timeline_title}
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {translation.timeline.map((item, index) => (
            <Card
              key={`timeline-${index}-${item}`}
              className="motion-fade-up border-cyan-300/20 bg-slate-950/70 p-0"
            >
              <CardContent className="p-4">
                <p className="m-0 text-sm leading-relaxed text-slate-300">
                  {item}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Card className="motion-fade-up motion-delay-2 border-cyan-300/25 bg-slate-900/70">
        <CardHeader className="pb-2">
          <CardTitle as="h2" className="text-xl">
            {translation.lifestyle_title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            {translation.lifestyle}
          </p>
          <h3 className="m-0 text-lg font-semibold text-slate-100">
            {translation.hobbies_title}
          </h3>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            {translation.hobbies}
          </p>
        </CardContent>
      </Card>
    </article>
  )
}
