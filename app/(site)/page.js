import { homePage } from '../../src/content/translations'
import HomeContent from '../../src/components/home/HomeContent'
import staticPageMetadata from '../../src/content/static-page-metadata.js'

const t = homePage.es
const { buildStaticPageMetadata } = staticPageMetadata

export const metadata = buildStaticPageMetadata({
  lang: 'es',
  uniqueId: 'home',
  title: t.title,
})

export default function HomePageEs() {
  return <HomeContent lang="es" translation={t} />
}
