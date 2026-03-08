import SectionHeader from '../ui/section-header'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import HeroPanel from './HeroPanel'
import ProofStrip from './ProofStrip'

import richText from '../../lib/content/rich-text.js'

const { injectLinkPlaceholder } = richText

const routeByLang = {
  en: {
    about: '/en/about-me/',
    skills: '/en/skills/',
    projects: '/en/projects/',
    resume: '/docs/cv-en.pdf',
  },
  es: {
    about: '/acerca-de-mi/',
    skills: '/tecnologias/',
    projects: '/proyectos/',
    resume: '/docs/cv.pdf',
  },
}

function HtmlBlock({ html }) {
  return (
    <div
      className="space-y-3 text-sm leading-relaxed text-slate-300 sm:text-base"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default function HomeContent({ lang, translation }) {
  const routes = routeByLang[lang] || routeByLang.es

  return (
    <section className="space-y-8">
      <HeroPanel
        lang={lang}
        title={translation.h1}
        subtitle={translation.h2}
        quote={translation.quote}
        aboutRoute={routes.about}
        aboutCta={translation.moreabout}
        projectsRoute={routes.projects}
        projectsCta={translation.fullProjects}
      />

      <ProofStrip lang={lang} />

      <Card>
        <CardHeader>
          <SectionHeader
            title={translation.skills}
            description={translation.h2}
          />
        </CardHeader>
        <CardContent className="space-y-5">
          <HtmlBlock
            html={injectLinkPlaceholder(translation.intro, routes.about)}
          />
          <HtmlBlock
            html={injectLinkPlaceholder(translation.skillsInfo, routes.skills)}
          />
          <HtmlBlock
            html={injectLinkPlaceholder(
              translation.projectInfo,
              routes.projects
            )}
          />
        </CardContent>
      </Card>

      <Card className="border-amber-300/25 bg-slate-950/65">
        <CardHeader>
          <CardTitle as="h2">{translation.academic}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <HtmlBlock html={translation.academicInfo} />
          <ul className="m-0 list-none space-y-2 p-0 text-sm">
            <li>
              <a href={routes.resume}>{translation.resume}</a>
            </li>
            <li>
              <a href="/docs/carta-recomendacion-pw.pdf">
                {translation.recommendationPW}
              </a>
            </li>
            <li>
              <a href="/docs/certificado-experiencia-laboral-pw.pdf">
                {translation.certificate}
              </a>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}
