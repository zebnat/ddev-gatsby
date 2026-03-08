import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export default function CapabilitySnapshot({ translation, routes }) {
  return (
    <Card className="border-cyan-300/25 bg-slate-950/75">
      <CardHeader className="space-y-2 pb-2">
        <CardTitle as="h2" className="text-2xl">
          {translation.skills}
        </CardTitle>
        <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
          {translation.capabilities_brief}
        </p>
      </CardHeader>

      <CardContent className="space-y-5">
        <ul className="m-0 grid list-disc gap-2 pl-5 text-sm text-slate-300 sm:grid-cols-2 sm:text-base">
          {translation.capability_bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="grid gap-2 sm:grid-cols-2">
          <a
            href={routes.skills}
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            {translation.skills_path_cta}
          </a>
          <a
            href={routes.projects}
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-cyan-300/40 px-4 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/70 hover:bg-cyan-300/10"
          >
            {translation.projects_path_cta}
          </a>
        </div>

        <section className="space-y-2 border-t border-cyan-300/20 pt-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-200">
            {translation.resources_title}
          </h3>

          <div className="grid gap-2 sm:grid-cols-3">
            <a
              href={routes.resume}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-600/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-200 transition hover:border-cyan-300/70 hover:text-cyan-100"
            >
              {translation.resume}
            </a>
            <a
              href="/docs/carta-recomendacion-pw.pdf"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-600/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-200 transition hover:border-cyan-300/70 hover:text-cyan-100"
            >
              {translation.recommendationPW}
            </a>
            <a
              href="/docs/certificado-experiencia-laboral-pw.pdf"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-600/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-200 transition hover:border-cyan-300/70 hover:text-cyan-100"
            >
              {translation.certificate}
            </a>
          </div>
        </section>
      </CardContent>
    </Card>
  )
}
