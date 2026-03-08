import HeroPanel from './HeroPanel'
import HomeActionGrid from './HomeActionGrid'
import CapabilitySnapshot from './CapabilitySnapshot'

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

      <HomeActionGrid translation={translation} routes={routes} />

      <CapabilitySnapshot translation={translation} routes={routes} />
    </section>
  )
}
