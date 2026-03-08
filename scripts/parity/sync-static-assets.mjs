import { cp, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const REPO_ROOT = path.resolve(__dirname, '..', '..')

const SOURCE_DIR = path.join(REPO_ROOT, 'static')
const PORTFOLIO_SOURCE_DIR = path.join(REPO_ROOT, 'data', 'portfolio')
const TARGET_DIR = path.join(REPO_ROOT, 'apps', 'next', 'public')
const PORTFOLIO_TARGET_DIR = path.join(TARGET_DIR, 'portfolio')

const MEDIA_EXTENSIONS = new Set([
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.webp',
  '.svg',
])

function shouldCopyPortfolioFile(sourcePath) {
  const ext = path.extname(sourcePath).toLowerCase()
  return MEDIA_EXTENSIONS.has(ext)
}

async function main() {
  await mkdir(TARGET_DIR, { recursive: true })
  await cp(SOURCE_DIR, TARGET_DIR, { recursive: true, force: true })
  await mkdir(PORTFOLIO_TARGET_DIR, { recursive: true })
  await cp(PORTFOLIO_SOURCE_DIR, PORTFOLIO_TARGET_DIR, {
    recursive: true,
    force: true,
    filter: (sourcePath, _destinationPath) => {
      if (sourcePath === PORTFOLIO_SOURCE_DIR) {
        return true
      }

      return (
        shouldCopyPortfolioFile(sourcePath) || path.extname(sourcePath) === ''
      )
    },
  })

  process.stdout.write(
    `Synced static assets and portfolio media to ${TARGET_DIR}\n`
  )
}

main().catch((error) => {
  process.stderr.write(`${error.message}\n`)
  process.exit(1)
})
