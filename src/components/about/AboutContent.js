import Badge from '../ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import SectionHeader from '../ui/section-header'
import AboutPhotoCarousel from './AboutPhotoCarousel'

function FocusPill({ value }) {
  return (
    <Badge variant="accent" className="normal-case tracking-normal">
      {value}
    </Badge>
  )
}

export default function AboutContent({ lang, translation }) {
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
          <p className="text-base text-slate-200">{translation.intro1}</p>
          <p className="text-sm text-slate-300 sm:text-base">
            {translation.intro2}
          </p>

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
    </article>
  )
}
