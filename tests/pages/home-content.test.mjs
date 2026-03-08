import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

async function readText(path) {
  return readFile(new URL(path, import.meta.url), 'utf8')
}

test('bilingual home pages render through shared HomeContent component', async () => {
  const homeEs = await readText('../../app/(site)/page.js')
  const homeEn = await readText('../../app/(site)/en/page.js')

  assert.equal(homeEs.includes('import HomeContent'), true)
  assert.equal(
    homeEs.includes('<HomeContent lang="es" translation={t} />'),
    true
  )

  assert.equal(homeEn.includes('import HomeContent'), true)
  assert.equal(
    homeEn.includes('<HomeContent lang="en" translation={t} />'),
    true
  )
})

test('home shared component composes hero and proof strip blocks', async () => {
  const homeContent = await readText('../../src/components/home/HomeContent.js')

  assert.equal(homeContent.includes('import HeroPanel'), true)
  assert.equal(homeContent.includes('import ProofStrip'), true)
  assert.equal(homeContent.includes('<HeroPanel'), true)
  assert.equal(homeContent.includes('<ProofStrip'), true)
})
