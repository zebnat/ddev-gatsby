import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const ROOT = process.cwd()
const NEXT_SITE_APP_DIR = path.join(ROOT, 'apps', 'next', 'app', '(site)')
const PORTFOLIO_DIR = path.join(ROOT, 'data', 'portfolio')
const OUTPUT_FILE = path.join(ROOT, 'docs', 'migration', 'baseline-routes.json')

async function walkFiles(dirPath) {
  const entries = await readdir(dirPath, { withFileTypes: true })
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dirPath, entry.name)
      if (entry.isDirectory()) {
        return walkFiles(fullPath)
      }
      return fullPath
    })
  )

  return files.flat()
}

function normalizeSlashes(value) {
  return value.replace(/\\/g, '/')
}

function appPageFileToRoute(relativeFile) {
  const rel = normalizeSlashes(relativeFile)

  if (rel === 'page.js') {
    return '/'
  }

  if (!rel.endsWith('/page.js')) {
    return null
  }

  const withoutLeaf = rel.slice(0, -'/page.js'.length)
  const segments = withoutLeaf
    .split('/')
    .filter(Boolean)
    .filter((segment) => !segment.startsWith('('))

  if (segments.some((segment) => segment.startsWith('['))) {
    return null
  }

  if (segments.length === 0) {
    return '/'
  }

  return `/${segments.join('/')}/`
}

function parseFrontmatterField(markdown, fieldName) {
  const regex = new RegExp(`^${fieldName}:\\s*[\"']([^\"']+)[\"']\\s*$`, 'm')
  const match = markdown.match(regex)
  return match ? match[1] : null
}

async function extractStaticRoutes() {
  const files = (await walkFiles(NEXT_SITE_APP_DIR)).filter((filePath) =>
    filePath.endsWith('.js')
  )

  const routes = files
    .map((filePath) => {
      const relativeFile = normalizeSlashes(
        path.relative(NEXT_SITE_APP_DIR, filePath)
      )
      const route = appPageFileToRoute(relativeFile)
      if (!route) {
        return null
      }

      return {
        route,
        file: `apps/next/app/(site)/${relativeFile}`,
      }
    })
    .filter(Boolean)

  routes.push({
    route: '/404/',
    file: 'apps/next/out/404/index.html',
  })

  routes.sort((a, b) => a.route.localeCompare(b.route))

  return routes
}

async function extractMarkdownRoutes() {
  const files = (await walkFiles(PORTFOLIO_DIR)).filter((filePath) =>
    filePath.endsWith('.md')
  )

  const routes = []
  for (const filePath of files) {
    const relativeFile = normalizeSlashes(path.relative(ROOT, filePath))
    const markdown = await readFile(filePath, 'utf8')

    const route = parseFrontmatterField(markdown, 'path')
    const lang = parseFrontmatterField(markdown, 'lang')

    if (!route || !lang) {
      throw new Error(`Missing required frontmatter in ${relativeFile}`)
    }

    routes.push({
      route,
      lang,
      file: relativeFile,
    })
  }

  routes.sort((a, b) => a.route.localeCompare(b.route))
  return routes
}

function countByLanguage(markdownRoutes) {
  return markdownRoutes.reduce((acc, item) => {
    acc[item.lang] = (acc[item.lang] || 0) + 1
    return acc
  }, {})
}

async function main() {
  const staticRoutes = await extractStaticRoutes()
  const markdownRoutes = await extractMarkdownRoutes()

  const payload = {
    generatedAt: new Date().toISOString(),
    source: {
      nextSiteAppDir: 'apps/next/app/(site)',
      portfolioDir: 'data/portfolio',
    },
    counts: {
      static: staticRoutes.length,
      markdown: markdownRoutes.length,
      markdownByLanguage: countByLanguage(markdownRoutes),
    },
    static: staticRoutes,
    markdown: markdownRoutes,
  }

  await mkdir(path.dirname(OUTPUT_FILE), { recursive: true })
  await writeFile(OUTPUT_FILE, `${JSON.stringify(payload, null, 2)}\n`, 'utf8')

  process.stdout.write(
    `Generated ${payload.counts.static} static and ${payload.counts.markdown} markdown routes\n`
  )
}

main().catch((error) => {
  process.stderr.write(`${error.message}\n`)
  process.exit(1)
})
