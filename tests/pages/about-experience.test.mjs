import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

async function readText(path) {
  return readFile(new URL(path, import.meta.url), 'utf8')
}

test('about routes render through shared AboutContent component', async () => {
  const pageEs = await readText('../../app/(site)/acerca-de-mi/page.js')
  const pageEn = await readText('../../app/(site)/en/about-me/page.js')

  assert.equal(pageEs.includes('import AboutContent'), true)
  assert.equal(
    pageEs.includes('<AboutContent lang="es" translation={t} />'),
    true
  )

  assert.equal(pageEn.includes('import AboutContent'), true)
  assert.equal(
    pageEn.includes('<AboutContent lang="en" translation={t} />'),
    true
  )
})

test('shared AboutContent renders top-level photo carousel and timeline cards', async () => {
  const aboutContent = await readText(
    '../../src/components/about/AboutContent.js'
  )

  assert.equal(aboutContent.includes('import AboutPhotoCarousel'), true)
  assert.equal(
    aboutContent.includes('<AboutPhotoCarousel translation={translation} />'),
    true
  )
  assert.equal(aboutContent.includes('translation.timeline.map'), true)
})

test('shared AboutContent renders expertise, cases, and proof links', async () => {
  const aboutContent = await readText(
    '../../src/components/about/AboutContent.js'
  )

  assert.equal(aboutContent.includes('translation.expertise_areas.map'), true)
  assert.equal(aboutContent.includes('translation.case_studies.map'), true)
  assert.equal(aboutContent.includes('translation.proof_links.map'), true)
})

test('shared AboutContent places carousel before the about snapshot card', async () => {
  const aboutContent = await readText(
    '../../src/components/about/AboutContent.js'
  )

  const carouselIndex = aboutContent.indexOf(
    '<AboutPhotoCarousel translation={translation} />'
  )
  const snapshotCardIndex = aboutContent.indexOf('translation.snapshot_title')

  assert.equal(carouselIndex !== -1, true)
  assert.equal(snapshotCardIndex !== -1, true)
  assert.equal(carouselIndex < snapshotCardIndex, true)
})

test('photo carousel rotates one image every 2 seconds', async () => {
  const carouselSource = await readText(
    '../../src/components/about/AboutPhotoCarousel.js'
  )

  assert.equal(carouselSource.includes('/images/about/p1002.jpg'), true)
  assert.equal(carouselSource.includes('/images/about/p1004.jpg'), true)
  assert.equal(carouselSource.includes('/images/about/p1005.jpg'), true)
  assert.equal(carouselSource.includes('setInterval'), true)
  assert.equal(carouselSource.includes('2000'), true)
  assert.equal(carouselSource.includes('translation.gallery_title'), false)
  assert.equal(carouselSource.includes('translation.gallery_intro'), false)
})
