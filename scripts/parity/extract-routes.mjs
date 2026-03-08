import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const ROOT = process.cwd()
const STATIC_PAGES_DIR = path.join(ROOT, 'src', 'pages')
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

function pageFileToRoute(relativeFile) {
  const rel = normalizeSlashes(relativeFile)

  if (rel === '404.js') {
    return '/404/'
  }

  if (rel === 'index.js') {
    return '/'
  }

  if (rel.endsWith('/index.js')) {
    return `/${rel.slice(0, -'/index.js'.length)}/`
  }

  return `/${rel.slice(0, -'.js'.length)}/`
}

function parseFrontmatterField(markdown, fieldName) {
  const regex = new RegExp(`^${fieldName}:\\s*[\"']([^\"']+)[\"']\\s*$`, 'm')
  const match = markdown.match(regex)
  return match ? match[1] : null
}

async function extractStaticRoutes() {
  const files = (await walkFiles(STATIC_PAGES_DIR)).filter((filePath) =>
    filePath.endsWith('.js')
  )

  const routes = files
    .map((filePath) => {
      const relativeFile = normalizeSlashes(
        path.relative(STATIC_PAGES_DIR, filePath)
      )
      return {
        route: pageFileToRoute(relativeFile),
        file: `src/pages/${relativeFile}`,
      }
    })
    .sort((a, b) => a.route.localeCompare(b.route))

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
      staticPagesDir: 'src/pages',
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
