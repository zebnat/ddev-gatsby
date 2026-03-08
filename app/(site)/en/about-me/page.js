import { aboutPage } from '../../../../src/content/translations'
import AboutContent from '../../../../src/components/about/AboutContent'
import staticPageMetadata from '../../../../src/content/static-page-metadata.js'

const t = aboutPage.en
const { buildStaticPageMetadata } = staticPageMetadata

export const metadata = buildStaticPageMetadata({
  lang: 'en',
  uniqueId: 'about',
  title: t.title,
})

export default function AboutPageEn() {
  return <AboutContent lang="en" translation={t} />
}
