import { existsSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const REPO_ROOT = path.resolve(__dirname, '..', '..')

function normalizeRouteToOutputPath(route) {
  if (route === '/') {
    return path.join('out', 'index.html')
  }

  const normalized = route.replace(/^\/+|\/+$/g, '')
  return path.join('out', normalized, 'index.html')
}

async function readJsonFile(relativePath) {
  const absolutePath = path.join(REPO_ROOT, relativePath)
  const content = await readFile(absolutePath, 'utf8')
  return JSON.parse(content)
}

function createCheck(id, ok, details) {
  return { id, ok, details }
}

async function checkStaticRouteParity(baseline) {
  const staticRoutes = baseline.static.map((entry) => entry.route)
  const missing = staticRoutes.filter((route) => {
    const outputPath = path.join(REPO_ROOT, normalizeRouteToOutputPath(route))
    return !existsSync(outputPath)
  })

  return createCheck(
    'static-route-parity',
    missing.length === 0,
    missing.length === 0
      ? `All ${staticRoutes.length} static routes exist in out`
      : `Missing ${missing.length}/${
          staticRoutes.length
        } static routes: ${missing.slice(0, 8).join(', ')}`
  )
}

async function checkProjectRouteParity(baseline) {
  const markdownRoutes = baseline.markdown.map((entry) => entry.route)
  const missing = markdownRoutes.filter((route) => {
    const outputPath = path.join(REPO_ROOT, normalizeRouteToOutputPath(route))
    return !existsSync(outputPath)
  })

  return createCheck(
    'project-route-parity',
    missing.length === 0,
    missing.length === 0
      ? `All ${markdownRoutes.length} markdown routes exist in out`
      : `Missing ${missing.length}/${markdownRoutes.length} markdown routes`
  )
}

function checkStaticAssets() {
  const requiredAssets = [
    'out/robots.txt',
    'out/site.webmanifest',
    'out/docs/cv.pdf',
    'out/scripts/vimrc.cfg',
  ]

  const missing = requiredAssets.filter(
    (relativePath) => !existsSync(path.join(REPO_ROOT, relativePath))
  )

  return createCheck(
    'static-assets',
    missing.length === 0,
    missing.length === 0
      ? `Required static assets are present (${requiredAssets.length} files)`
      : `Missing static assets: ${missing.join(', ')}`
  )
}

async function checkSitemap() {
  const sitemapPath = path.join(REPO_ROOT, 'out', 'sitemap.xml')
  if (!existsSync(sitemapPath)) {
    return createCheck('sitemap', false, 'Missing out/sitemap.xml')
  }

  const xml = await readFile(sitemapPath, 'utf8')
  const hasEsRoot = xml.includes('<loc>https://www.danieldev.es/</loc>')
  const hasEnRoot = xml.includes('<loc>https://www.danieldev.es/en/</loc>')

  const ok = hasEsRoot && hasEnRoot
  return createCheck(
    'sitemap',
    ok,
    ok
      ? 'Sitemap exists and includes bilingual root URLs'
      : 'Sitemap exists but missing expected bilingual root URLs'
  )
}

function checkRequiredDocs() {
  const requiredDocs = [
    'docs/migration/README.md',
    'docs/migration/parity-checklist.md',
  ]

  const missing = requiredDocs.filter(
    (relativePath) => !existsSync(path.join(REPO_ROOT, relativePath))
  )

  return createCheck(
    'required-docs',
    missing.length === 0,
    missing.length === 0
      ? `Required migration docs exist (${requiredDocs.length} files)`
      : `Missing docs: ${missing.join(', ')}`
  )
}

export async function verifyPhase1() {
  const baseline = await readJsonFile('docs/migration/baseline-routes.json')

  const checks = [
    await checkStaticRouteParity(baseline),
    await checkProjectRouteParity(baseline),
    checkStaticAssets(),
    await checkSitemap(),
    checkRequiredDocs(),
  ]

  const ok = checks.every((check) => check.ok)
  return { ok, checks }
}

async function main() {
  const result = await verifyPhase1()

  for (const check of result.checks) {
    const status = check.ok ? 'PASS' : 'FAIL'
    process.stdout.write(`[${status}] ${check.id}: ${check.details}\n`)
  }

  process.stdout.write(
    `Phase 1 parity gate: ${result.ok ? 'PASS' : 'FAIL'} (${
      result.checks.filter((c) => c.ok).length
    }/${result.checks.length} checks)\n`
  )

  process.exit(result.ok ? 0 : 1)
}

const invokedAsScript =
  process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href

if (invokedAsScript) {
  main().catch((error) => {
    process.stderr.write(`${error.message}\n`)
    process.exit(1)
  })
}
