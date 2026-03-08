import { notFound } from 'next/navigation'

import config from '../../../../../../data/config.js'
import projectRoutesLoader from '../../../../../../src/lib/content/project-routes.js'
import metadataHelpers from '../../../../../../src/lib/seo/metadata.js'

const { buildPageMetadata } = metadataHelpers
const { getProjectBySlug, getProjectPaths, pathToSlugSegments } =
  projectRoutesLoader

export async function generateStaticParams() {
  const paths = await getProjectPaths()
  return paths.map((routePath) => ({
    slug: pathToSlugSegments(routePath),
  }))
}

export async function generateMetadata({ params }) {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    return {}
  }

  return {
    title: project.title,
    description: project.description,
    ...buildPageMetadata({
      domainUrl: config.domainUrl,
      canonicalPath: project.path,
      hreflangs: project.hreflangs,
    }),
  }
}

export default async function ProjectDetailPage({ params }) {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <article>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>
        <strong>Route:</strong> {project.path}
      </p>
      <p>
        <strong>Language:</strong> {project.lang}
      </p>
    </article>
  )
}
