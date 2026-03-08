import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

async function readText(path) {
  return readFile(new URL(path, import.meta.url), 'utf8')
}

test('about translation removes legacy FAQ keys', async () => {
  const source = await readText('../../data/translations/aboutPage.js')

  assert.equal(source.includes('rng_title'), false)
  assert.equal(source.includes('rng_q1'), false)
  assert.equal(source.includes('rng_r1'), false)
  assert.equal(source.includes('rng_q2'), false)
  assert.equal(source.includes('rng_r2'), false)
  assert.equal(source.includes('rng_q3'), false)
  assert.equal(source.includes('rng_r3'), false)
})

test('about translation defines concise storytelling keys', async () => {
  const source = await readText('../../data/translations/aboutPage.js')

  assert.equal(source.includes('focus_title'), true)
  assert.equal(source.includes('focus_items'), true)
  assert.equal(source.includes('timeline'), true)
  assert.equal(source.includes('Technical Lead'), true)
  assert.equal(source.includes('equipo de 3'), true)
  assert.equal(
    source.includes('2023 · Joined fintech as Senior Full Stack Developer.'),
    true
  )
  assert.equal(
    source.includes(
      '2023 · Inicio en fintech como Senior Full Stack Developer.'
    ),
    true
  )
})

test('home proof strip avoids route parity messaging', async () => {
  const source = await readText('../../src/components/home/ProofStrip.js')

  assert.equal(source.includes('Route parity'), false)
  assert.equal(source.includes('Paridad de rutas'), false)
})

test('global styles include motion utility classes', async () => {
  const source = await readText('../../app/globals.css')

  assert.equal(source.includes('.motion-fade-up'), true)
  assert.equal(source.includes('.motion-stagger'), true)
  assert.equal(source.includes('.motion-delay-2'), true)
  assert.equal(source.includes('@keyframes fade-up'), true)
})
