import { aboutPage } from '../../../src/content/translations'

const t = aboutPage.es

export const metadata = {
  title: t.title,
}

export default function AboutPageEs() {
  return (
    <section>
      <h1>{t.h1}</h1>
      <p>{t.h2}</p>
      <p>{t.intro1}</p>
    </section>
  )
}
