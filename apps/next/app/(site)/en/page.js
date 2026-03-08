import { homePage } from '../../../src/content/translations'

const t = homePage.en

export const metadata = {
  title: t.title,
}

export default function HomePageEn() {
  return (
    <section>
      <h1>{t.h1}</h1>
      <p>{t.h2}</p>
    </section>
  )
}
