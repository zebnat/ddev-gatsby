import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const packageJson = JSON.parse(
  await readFile(new URL('../../package.json', import.meta.url), 'utf8')
)

test('package scripts include sitemap generation', () => {
  assert.equal(typeof packageJson.scripts['next:generate-sitemap'], 'string')
})

test('sitemap is generated with core static and project routes', async () => {
  const sitemapPath = 'public/sitemap.xml'
  assert.equal(existsSync(sitemapPath), true)

  const xml = await readFile(sitemapPath, 'utf8')
  assert.equal(xml.includes('<loc>https://www.danieldev.es/</loc>'), true)
  assert.equal(xml.includes('<loc>https://www.danieldev.es/en/</loc>'), true)
  assert.equal(
    xml.includes(
      '<loc>https://www.danieldev.es/proyectos/ytrends-una-alternativa-para-tendencias-de-youtube/</loc>'
    ),
    true
  )
})
