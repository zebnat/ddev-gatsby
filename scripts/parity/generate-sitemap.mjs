import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const REPO_ROOT = path.resolve(__dirname, '..', '..')

const BASELINE_PATH = path.join(
  REPO_ROOT,
  'docs',
  'migration',
  'baseline-routes.json'
)
const SITEMAP_PATH = path.join(REPO_ROOT, 'public', 'sitemap.xml')

const require = createRequire(import.meta.url)
const config = require('../../data/config.js')

function normalizePath(routePath) {
  if (!routePath || routePath === '/') {
    return '/'
  }

  let normalized = routePath.startsWith('/') ? routePath : `/${routePath}`
  if (!normalized.endsWith('/')) {
    normalized = `${normalized}/`
  }

  return normalized
}

function buildAbsoluteUrl(domainUrl, routePath) {
  const domain = domainUrl.replace(/\/$/, '')
  return `${domain}${normalizePath(routePath)}`
}

function buildSitemapXml(urls) {
  const body = urls
    .map((url) => `  <url>\n    <loc>${url}</loc>\n  </url>`)
    .join('\n')

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    body,
    '</urlset>',
    '',
  ].join('\n')
}

async function main() {
  const baselineRaw = await readFile(BASELINE_PATH, 'utf8')
  const baseline = JSON.parse(baselineRaw)

  const staticRoutes = baseline.static.map((entry) => entry.route)
  const markdownRoutes = baseline.markdown.map((entry) => entry.route)
  const allRoutes = Array.from(
    new Set([...staticRoutes, ...markdownRoutes])
  ).sort((a, b) => a.localeCompare(b))

  const urls = allRoutes.map((route) =>
    buildAbsoluteUrl(config.domainUrl, route)
  )
  const xml = buildSitemapXml(urls)

  await mkdir(path.dirname(SITEMAP_PATH), { recursive: true })
  await writeFile(SITEMAP_PATH, xml, 'utf8')

  process.stdout.write(
    `Generated sitemap with ${urls.length} URLs at ${SITEMAP_PATH}\n`
  )
}

main().catch((error) => {
  process.stderr.write(`${error.message}\n`)
  process.exit(1)
})
