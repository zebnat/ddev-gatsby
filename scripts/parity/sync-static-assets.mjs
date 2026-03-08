import { cp, mkdir, rm } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const REPO_ROOT = path.resolve(__dirname, '..', '..')

const SOURCE_DIR = path.join(REPO_ROOT, 'static')
const TARGET_DIR = path.join(REPO_ROOT, 'apps', 'next', 'public')

async function main() {
  await rm(TARGET_DIR, { recursive: true, force: true })
  await mkdir(TARGET_DIR, { recursive: true })
  await cp(SOURCE_DIR, TARGET_DIR, { recursive: true, force: true })

  process.stdout.write(`Synced static assets to ${TARGET_DIR}\n`)
}

main().catch((error) => {
  process.stderr.write(`${error.message}\n`)
  process.exit(1)
})
