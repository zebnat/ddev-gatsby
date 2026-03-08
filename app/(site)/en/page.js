import { homePage } from '../../../src/content/translations'
import HomeContent from '../../../src/components/home/HomeContent'
import staticPageMetadata from '../../../src/content/static-page-metadata.js'

const t = homePage.en
const { buildStaticPageMetadata } = staticPageMetadata

export const metadata = buildStaticPageMetadata({
  lang: 'en',
  uniqueId: 'home',
  title: t.title,
})

export default function HomePageEn() {
  return <HomeContent lang="en" translation={t} />
}
