import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

test('site shell renders scroll-to-top button with localized label', async () => {
  const source = await readFile(
    new URL('../../src/components/shell/SiteShell.js', import.meta.url),
    'utf8'
  )

  assert.equal(
    source.includes("import ScrollToTopButton from './ScrollToTopButton'"),
    true
  )
  assert.equal(
    source.includes('<ScrollToTopButton label={shell.scrollToTop} />'),
    true
  )
})

test('scroll-to-top component uses threshold and window scroll', async () => {
  const source = await readFile(
    new URL('../../src/components/shell/ScrollToTopButton.js', import.meta.url),
    'utf8'
  )

  assert.equal(source.includes('window.scrollY > 300'), true)
  assert.equal(
    source.includes("window.matchMedia('(prefers-reduced-motion: reduce)')"),
    true
  )
  assert.equal(source.includes('window.scrollTo({'), true)
  assert.equal(
    source.includes("behavior: prefersReducedMotion ? 'auto' : 'smooth'"),
    true
  )
  assert.equal(source.includes('aria-label={label}'), true)
})

test('shell translations include scroll-to-top label', async () => {
  const source = await readFile(
    new URL('../../data/translations/shell.js', import.meta.url),
    'utf8'
  )

  assert.equal(source.includes("scrollToTop: 'Scroll to top'"), true)
  assert.equal(source.includes("scrollToTop: 'Volver arriba'"), true)
})
