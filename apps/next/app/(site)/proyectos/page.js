import { projectsPage } from '../../../src/content/translations'

const t = projectsPage.es

export const metadata = {
  title: t.title,
}

export default function ProjectsPageEs() {
  return (
    <section>
      <h1>{t.h1}</h1>
      <p>{t.h2}</p>
      <p>{t.summary}</p>
    </section>
  )
}
