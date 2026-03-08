import { projectsPage } from '../../../../src/content/translations'

const t = projectsPage.en

export const metadata = {
  title: t.title,
}

export default function ProjectsPageEn() {
  return (
    <section>
      <h1>{t.h1}</h1>
      <p>{t.h2}</p>
      <p>{t.summary}</p>
    </section>
  )
}
