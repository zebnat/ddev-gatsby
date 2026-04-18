import { skillsPage } from '../../../../src/content/translations'
import SkillsCatalog from '../../../../src/components/skills/SkillsCatalog'
import SkillsTagCloud3D from '../../../../src/components/skills/SkillsTagCloud3D'
import staticPageMetadata from '../../../../src/content/static-page-metadata.js'
import skillsCloudUtils from '../../../../src/lib/content/skills-cloud-utils.js'
import skills from '../../../../data/skills.js'

const t = skillsPage.en
const { buildStaticPageMetadata } = staticPageMetadata
const { getSkillCloudItems } = skillsCloudUtils

export const metadata = buildStaticPageMetadata({
  lang: 'en',
  uniqueId: 'tech',
  title: t.title,
})

export default function SkillsPageEn() {
  const cloudItems = getSkillCloudItems(skills)

  return (
    <section className="space-y-6">
      <h1>{t.h1}</h1>
      <p>{t.h2}</p>
      <SkillsTagCloud3D items={cloudItems} translation={t} />
      <SkillsCatalog lang="en" translation={t} />
    </section>
  )
}
