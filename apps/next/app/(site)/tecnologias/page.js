import { skillsPage } from '../../../src/content/translations'

const t = skillsPage.es

export const metadata = {
  title: t.title,
}

export default function SkillsPageEs() {
  return (
    <section>
      <h1>{t.h1}</h1>
      <p>{t.h2}</p>
      <p>{t.levels_explained}</p>
    </section>
  )
}
