import { projectsPage } from '../../../src/content/translations'
import ProjectsListContent from '../../../src/components/projects/ProjectsListContent'

import projectsIndex from '../../../src/lib/content/projects-index.js'
import staticPageMetadata from '../../../src/content/static-page-metadata.js'

const { getProjectsByLang, getTagStats } = projectsIndex
const { buildStaticPageMetadata } = staticPageMetadata

const t = projectsPage.es

export const metadata = buildStaticPageMetadata({
  lang: 'es',
  uniqueId: 'project',
  title: t.title,
})

export default async function ProjectsPageEs() {
  const projects = await getProjectsByLang('es')
  const tagStats = getTagStats(projects)

  return (
    <ProjectsListContent
      translation={t}
      projects={projects}
      tagStats={tagStats}
    />
  )
}
