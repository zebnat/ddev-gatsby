import assert from 'node:assert/strict'
import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const repoRoot = new URL('../../', import.meta.url)

const spanishTextFiles = [
  'data/translations/homePage.js',
  'data/translations/aboutPage.js',
  'data/translations/skillsPage.js',
  'data/translations/shell.js',
  'data/translations/footer.js',
  'data/translations/projectsPage.js',
  'data/translations/projectPage.js',
  'data/translations/streamerPage.js',
  'data/skills.js',
  'app/(site)/articulos/page.js',
  'app/(site)/estudios-y-empresas/page.js',
  'src/components/home/ProofStrip.js',
  'src/components/home/HeroPanel.js',
]

const forbiddenWords = [
  'anos',
  'capitulo',
  'interseccion',
  'practico',
  'direccion',
  'modulos',
  'criticos',
  'diseno',
  'comunicacion',
  'mentoria',
  'ejecucion',
  'automatizacion',
  'innovacion',
  'practicas',
  'capsulas',
  'evolucion',
  'habilitacion',
  'rapido',
  'friccion',
  'consolide',
  'estandares',
  'adopcion',
  'utiles',
  'validacion',
  'integracion',
  'ingenieria',
  'programacion',
  'codigo',
  'tecnologias',
  'articulos',
  'indice',
  'opinion',
  'academico',
  'asi',
  'categorias',
  'movil',
  'portatil',
  'bilingue',
]

const forbiddenRegex = new RegExp(`\\b(${forbiddenWords.join('|')})\\b`, 'giu')

function stripMarkdownFrontmatter(source) {
  return source.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/u, '')
}

async function readRepoFile(relativePath) {
  const fileUrl = new URL(relativePath, repoRoot)
  return readFile(fileUrl, 'utf8')
}

test('spanish UI copy avoids frequent missing-accent forms', async () => {
  const offenders = []

  for (const relativePath of spanishTextFiles) {
    const source = await readRepoFile(relativePath)
    const matches = source.match(forbiddenRegex)

    if (matches?.length) {
      offenders.push(`${relativePath}: ${[...new Set(matches)].join(', ')}`)
    }
  }

  assert.equal(offenders.length, 0, offenders.join('\n'))
})

test('spanish portfolio markdown body avoids frequent missing-accent forms', async () => {
  const portfolioDir = fileURLToPath(new URL('data/portfolio/', repoRoot))
  const rootDir = fileURLToPath(repoRoot)

  async function walk(dirPath) {
    const dirEntries = await readdir(dirPath, { withFileTypes: true })
    const nested = await Promise.all(
      dirEntries.map(async (entry) => {
        const fullPath = path.join(dirPath, entry.name)
        if (entry.isDirectory()) {
          return walk(fullPath)
        }
        if (
          entry.isFile() &&
          entry.name.endsWith('.md') &&
          !entry.name.endsWith('.en.md')
        ) {
          return [fullPath]
        }
        return []
      })
    )
    return nested.flat()
  }

  const markdownFiles = await walk(portfolioDir)
  const offenders = []

  for (const markdownFile of markdownFiles) {
    const source = await readFile(markdownFile, 'utf8')
    const markdownBody = stripMarkdownFrontmatter(source)
    const matches = markdownBody.match(forbiddenRegex)

    if (matches?.length) {
      const relativePath = path.relative(rootDir, markdownFile)
      offenders.push(`${relativePath}: ${[...new Set(matches)].join(', ')}`)
    }
  }

  assert.equal(offenders.length, 0, offenders.join('\n'))
})
