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

test('home shared component composes hero with action and capability blocks', async () => {
  const homeContent = await readText('../../src/components/home/HomeContent.js')

  assert.equal(homeContent.includes('import HeroPanel'), true)
  assert.equal(homeContent.includes('import HomeActionGrid'), true)
  assert.equal(homeContent.includes('import CapabilitySnapshot'), true)
  assert.equal(homeContent.includes('<HeroPanel'), true)
  assert.equal(homeContent.includes('<HomeActionGrid'), true)
  assert.equal(homeContent.includes('<CapabilitySnapshot'), true)
  assert.equal(homeContent.includes('ProofStrip'), false)
})

test('home translations include concise conversion-first keys', async () => {
  const source = await readText('../../data/translations/homePage.js')

  assert.equal(source.includes('quick_paths_title'), true)
  assert.equal(source.includes('capabilities_brief'), true)
  assert.equal(source.includes('capability_bullets'), true)
})

test('home action grid omits heading and subtitle text block', async () => {
  const source = await readText('../../src/components/home/HomeActionGrid.js')

  assert.equal(source.includes('translation.quick_paths_subtitle'), false)
  assert.equal(source.includes('<h2'), false)
})
