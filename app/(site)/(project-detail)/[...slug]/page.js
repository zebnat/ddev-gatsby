import { notFound } from 'next/navigation'
import Markdown from 'markdown-to-jsx'

import config from '../../../../data/config.js'
import projectPageTranslation from '../../../../data/translations/projectPage'
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

  return (
    <article>
      <h1>{project.title}</h1>
      <p>{project.description}</p>

      <Markdown
        options={{
          overrides: {
            img: {
              props: {
                loading: 'lazy',
                style: { maxWidth: '100%', height: 'auto' },
              },
            },
          },
        }}
      >
        {project.body}
      </Markdown>

      {project.tags.includes('private-project') && (
        <aside
          style={{ border: '2px solid #ff6c00', padding: 12, margin: '12px 0' }}
        >
          {t.privateDisclaimer}
        </aside>
      )}

      <p>
        <a href={project.lang === 'es' ? '/proyectos/' : '/en/projects/'}>
          {t.projectPage}
        </a>
      </p>
    </article>
  )
}
