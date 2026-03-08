import { notFound } from 'next/navigation'

import config from '../../../../data/config.js'
import projectPageTranslation from '../../../../data/translations/projectPage'
import ProjectDetailContent from '../../../../src/components/projects/ProjectDetailContent'
import routeParams from '../../../../src/lib/content/next-route-params.js'
import projectRoutesLoader from '../../../../src/lib/content/project-routes.js'
import metadataHelpers from '../../../../src/lib/seo/metadata.js'

const { buildPageMetadata } = metadataHelpers
const { resolveCatchAllSlug } = routeParams
const { getProjectBySlug, getProjectPaths, pathToSlugSegments } =
  projectRoutesLoader

export async function generateStaticParams() {
  const paths = await getProjectPaths()
  return paths.map((routePath) => ({
    slug: pathToSlugSegments(routePath),
  }))
}

export async function generateMetadata({ params }) {
  const slug = await resolveCatchAllSlug(params)
  const project = await getProjectBySlug(slug)

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
  const slug = await resolveCatchAllSlug(params)
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const t = projectPageTranslation[project.lang]

  return <ProjectDetailContent project={project} translation={t} />
}
