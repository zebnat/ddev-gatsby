import { homePage } from '../../../src/content/translations'
import HomeEntryExperience from '../../../src/components/home/HomeEntryExperience'
import staticPageMetadata from '../../../src/content/static-page-metadata.js'

const t = homePage.en
const { buildStaticPageMetadata } = staticPageMetadata

export const metadata = buildStaticPageMetadata({
  lang: 'en',
  uniqueId: 'home',
  title: t.title,
})

export default function HomePageEn() {
  return <HomeEntryExperience lang="en" translation={t} />
}
