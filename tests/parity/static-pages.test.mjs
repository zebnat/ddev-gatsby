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
    'apps/next/app/(site)/page.js',
    'apps/next/app/(site)/acerca-de-mi/page.js',
    'apps/next/app/(site)/tecnologias/page.js',
    'apps/next/app/(site)/proyectos/page.js',
    'apps/next/app/(site)/en/page.js',
    'apps/next/app/(site)/en/about-me/page.js',
    'apps/next/app/(site)/en/skills/page.js',
    'apps/next/app/(site)/en/projects/page.js',
  ]

  for (const filePath of pageFiles) {
    assert.equal(existsSync(filePath), true)
  }
})
