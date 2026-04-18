import { projectsPage } from '../../../../src/content/translations'
import ProjectsListContent from '../../../../src/components/projects/ProjectsListContent'

import projectsIndex from '../../../../src/lib/content/projects-index.js'
import staticPageMetadata from '../../../../src/content/static-page-metadata.js'

const { getProjectsByLang, getTagStats } = projectsIndex
const { buildStaticPageMetadata } = staticPageMetadata

const t = projectsPage.en

export const metadata = buildStaticPageMetadata({
  lang: 'en',
  uniqueId: 'project',
  title: t.title,
})

export default async function ProjectsPageEn() {
  const projects = await getProjectsByLang('en')
  const tagStats = getTagStats(projects)

  return (
    <ProjectsListContent
      translation={t}
      projects={projects}
      tagStats={tagStats}
    />
  )
}
