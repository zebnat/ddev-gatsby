import { aboutPage } from '../../../../src/content/translations'
import staticPageMetadata from '../../../../src/content/static-page-metadata.js'

const t = aboutPage.en
const { buildStaticPageMetadata } = staticPageMetadata

export const metadata = buildStaticPageMetadata({
  lang: 'en',
  uniqueId: 'about',
  title: t.title,
})

export default function AboutPageEn() {
  return (
    <section>
      <h1>{t.h1}</h1>
      <p>{t.h2}</p>
      <p>{t.intro1}</p>
      <h2>{t.howiam}</h2>
      <p>{t.howiam_reply}</p>

      <h2>{t.hobbies_t}</h2>
      <p>{t.hobbies}</p>

      <h2>{t.history_title}</h2>
      <ul>
        <li>{t.history_1985}</li>
        <li>{t.history_1990}</li>
        <li>{t.history_1993}</li>
        <li>{t.history_1997}</li>
        <li>{t.history_1998}</li>
        <li>{t.history_2002}</li>
        <li>{t.history_2004}</li>
        <li>{t.history_2006}</li>
        <li>{t.history_2009}</li>
        <li>{t.history_2010}</li>
        <li>{t.history_2013}</li>
        <li>{t.history_2018}</li>
        <li>{t.history_2020}</li>
        <li>{t.history_2023}</li>
      </ul>

      <h2>{t.rng_title}</h2>
      <h3>{t.rng_q1}</h3>
      <p>{t.rng_r1}</p>
      <h3>{t.rng_q2}</h3>
      <p>{t.rng_r2}</p>
      <h3>{t.rng_q3}</h3>
      <p>{t.rng_r3}</p>
    </section>
  )
}
