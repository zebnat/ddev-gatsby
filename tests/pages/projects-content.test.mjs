import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

async function readText(path) {
  return readFile(new URL(path, import.meta.url), 'utf8')
}

test('projects list routes use shared ProjectsListContent component', async () => {
  const pageEs = await readText('../../app/(site)/proyectos/page.js')
  const pageEn = await readText('../../app/(site)/en/projects/page.js')

  assert.equal(pageEs.includes('import ProjectsListContent'), true)
  assert.equal(pageEs.includes('<ProjectsListContent'), true)

  assert.equal(pageEn.includes('import ProjectsListContent'), true)
  assert.equal(pageEn.includes('<ProjectsListContent'), true)
})

test('project detail route renders through ProjectDetailContent component', async () => {
  const detailPage = await readText(
    '../../app/(site)/(project-detail)/[...slug]/page.js'
  )

  assert.equal(detailPage.includes('import ProjectDetailContent'), true)
  assert.equal(detailPage.includes('<ProjectDetailContent'), true)
})
