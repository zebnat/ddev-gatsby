import { projectsPage } from '../../../../src/content/translations'
import Link from 'next/link'

import projectsIndex from '../../../../../../src/lib/content/projects-index.js'
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
    <section>
      <h1>{t.h1}</h1>
      <p>{t.h2}</p>
      <p>{t.summary}</p>

      <p>
        <strong>{t.totalProjects}</strong> {projects.length}
      </p>

      <details>
        <summary>{t.filter}</summary>
        <ul>
          {tagStats.map((tag) => (
            <li key={tag.name}>
              {tag.name} ({tag.count})
            </li>
          ))}
        </ul>
      </details>

      <ol style={{ padding: 0, listStyle: 'none' }}>
        {projects.map((project) => (
          <li
            key={project.path}
            style={{ marginBottom: 16, borderBottom: '1px solid #ddd' }}
          >
            <h3 style={{ marginBottom: 4 }}>
              <Link href={project.path}>{project.title}</Link>
            </h3>
            <p style={{ marginTop: 0 }}>{project.description}</p>
            <small>{project.date}</small>
          </li>
        ))}
      </ol>
    </section>
  )
}
