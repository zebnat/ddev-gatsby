import { homePage } from '../../src/content/translations'
import HomeEntryExperience from '../../src/components/home/HomeEntryExperience'
import staticPageMetadata from '../../src/content/static-page-metadata.js'

const t = homePage.es
const { buildStaticPageMetadata } = staticPageMetadata

export const metadata = buildStaticPageMetadata({
  lang: 'es',
  uniqueId: 'home',
  title: t.title,
})

export default function HomePageEs() {
  return <HomeEntryExperience lang="es" translation={t} />
}
