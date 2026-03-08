import { aboutPage } from '../../../src/content/translations'
import AboutContent from '../../../src/components/about/AboutContent'
import staticPageMetadata from '../../../src/content/static-page-metadata.js'

const t = aboutPage.es
const { buildStaticPageMetadata } = staticPageMetadata

export const metadata = buildStaticPageMetadata({
  lang: 'es',
  uniqueId: 'about',
  title: t.title,
})

export default function AboutPageEs() {
  return <AboutContent lang="es" translation={t} />
}
