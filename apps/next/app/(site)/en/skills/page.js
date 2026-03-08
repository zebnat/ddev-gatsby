import { skillsPage } from '../../../../src/content/translations'
import SkillsCatalog from '../../../../src/components/skills/SkillsCatalog'
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
      <SkillsCatalog lang="en" translation={t} />
    </section>
  )
}
