import { homePage } from '../../src/content/translations'

const t = homePage.es

export const metadata = {
  title: t.title,
}

export default function HomePageEs() {
  return (
    <section>
      <h1>{t.h1}</h1>
      <p>{t.h2}</p>
    </section>
  )
}
