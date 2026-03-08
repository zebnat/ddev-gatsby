import { skillsPage } from '../../../../src/content/translations'
import staticPageMetadata from '../../../../src/content/static-page-metadata.js'

const t = skillsPage.en
const { buildStaticPageMetadata } = staticPageMetadata

export const metadata = buildStaticPageMetadata({
  lang: 'en',
  uniqueId: 'tech',
  title: t.title,
})

export default function SkillsPageEn() {
  return (
    <section>
      <h1>{t.h1}</h1>
      <p>{t.h2}</p>
      <p>{t.levels_explained}</p>

      <ol>
        {t.wordLevel.map((label, index) => (
          <li key={label}>
            <strong>{label}</strong>
            <p>
              {[t.help_l1, t.help_l2, t.help_l3, t.help_l4, t.help_l5][index]}
            </p>
          </li>
        ))}
      </ol>

      <p>
        {t.blinking}: {t.help_blinking}
      </p>

      <ul>
        <li>{t.languages}</li>
        <li>{t.frameworks}</li>
        <li>{t.other_tools}</li>
        <li>{t.other_concepts}</li>
        <li>{t.future_skills}</li>
      </ul>
    </section>
  )
}
