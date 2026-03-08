import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const routes = JSON.parse(
  await readFile(
    new URL('../../docs/migration/baseline-routes.json', import.meta.url),
    'utf8'
  )
)

test('next static routes include key bilingual pages', () => {
  const staticRoutes = routes.static.map((entry) => entry.route)
  const mustHave = ['/', '/en/', '/proyectos/', '/en/projects/']

  for (const route of mustHave) {
    assert.equal(staticRoutes.includes(route), true)
  }
})

test('next site static pages exist for migration baseline', () => {
  const pageFiles = [
    'app/(site)/page.js',
    'app/(site)/acerca-de-mi/page.js',
    'app/(site)/articulos/page.js',
    'app/(site)/contacto/page.js',
    'app/(site)/directos/page.js',
    'app/(site)/estudios-y-empresas/page.js',
    'app/(site)/embed/twitch/page.js',
    'app/(site)/tecnologias/page.js',
    'app/(site)/proyectos/page.js',
    'app/(site)/en/page.js',
    'app/(site)/en/about-me/page.js',
    'app/(site)/en/embed/twitch/page.js',
    'app/(site)/en/skills/page.js',
    'app/(site)/en/projects/page.js',
    'app/(site)/en/streamer/page.js',
  ]

  for (const filePath of pageFiles) {
    assert.equal(existsSync(filePath), true)
  }
})
