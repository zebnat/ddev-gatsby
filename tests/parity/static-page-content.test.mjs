import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

async function readPage(relativePath) {
  const url = new URL(`../../${relativePath}`, import.meta.url)
  return readFile(url, 'utf8')
}

test('articles page keeps baseline lorem content block', async () => {
  const source = await readPage('app/(site)/articulos/page.js')
  assert.equal(source.includes('Lorem ipsum dolor sit amet'), true)
})

test('contact page keeps baseline lorem content block', async () => {
  const source = await readPage('app/(site)/contacto/page.js')
  assert.equal(source.includes('Lorem ipsum dolor sit amet'), true)
})

test('resume page keeps both baseline content blocks', async () => {
  const source = await readPage('app/(site)/estudios-y-empresas/page.js')
  assert.equal(source.includes('Lorem ipsum dolor sit amet'), true)
  assert.equal(
    source.includes('Proin tempus, ex quis dignissim tincidunt'),
    true
  )
})
