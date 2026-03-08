import { skillsPage } from '../../../src/content/translations'
import SkillsCatalog from '../../../src/components/skills/SkillsCatalog'
import staticPageMetadata from '../../../src/content/static-page-metadata.js'

const t = skillsPage.es
const { buildStaticPageMetadata } = staticPageMetadata

export const metadata = buildStaticPageMetadata({
  lang: 'es',
  uniqueId: 'tech',
  title: t.title,
})

export default function SkillsPageEs() {
  return (
    <section>
      <h1>{t.h1}</h1>
      <p>{t.h2}</p>
      <SkillsCatalog lang="es" translation={t} />
    </section>
  )
}
