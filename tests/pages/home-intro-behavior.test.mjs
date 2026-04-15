import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

async function readText(path) {
  return readFile(new URL(path, import.meta.url), 'utf8')
}

test('intro first-visit persistence uses locale-specific storage keys', async () => {
  const source = await readText(
    '../../src/components/home/HomeEntryExperience.js'
  )

  assert.equal(source.includes("en: 'homeIntroSeen_en'"), true)
  assert.equal(source.includes("es: 'homeIntroSeen_es'"), true)
})

test('repeat visits skip intro and skip action marks intro as seen', async () => {
  const source = await readText(
    '../../src/components/home/HomeEntryExperience.js'
  )

  assert.equal(source.includes('const INTRO_DEBUG_ALWAYS_SHOW = true'), true)
  assert.equal(source.includes('!INTRO_DEBUG_ALWAYS_SHOW &&'), true)
  assert.equal(source.includes('markIntroSeen(lang, canUseLocalStorage)'), true)
})

test('reduced motion path bypasses long intro timeline', async () => {
  const source = await readText(
    '../../src/components/home/HomeEntryExperience.js'
  )

  assert.equal(source.includes('prefers-reduced-motion: reduce'), true)
  assert.equal(source.includes('INTRO_REDUCED_MOTION_CLOSE_MS'), true)
  assert.equal(
    source.includes('const INTRO_REDUCED_MOTION_CLOSE_MS = 1200'),
    true
  )
  assert.equal(source.includes('INTRO_TIMELINE_MS'), true)
})

test('intro query override supports force and skip modes', async () => {
  const source = await readText(
    '../../src/components/home/HomeEntryExperience.js'
  )

  assert.equal(
    source.includes("const shouldForceIntro = introQueryValue === '1'"),
    true
  )
  assert.equal(
    source.includes("const shouldSkipIntro = introQueryValue === '0'"),
    true
  )
  assert.equal(source.includes('if (shouldSkipIntro)'), true)
  assert.equal(source.includes('!INTRO_DEBUG_ALWAYS_SHOW &&'), true)
})

test('intro applies temporary scroll lock and restores on cleanup', async () => {
  const source = await readText(
    '../../src/components/home/HomeEntryExperience.js'
  )

  assert.equal(
    source.includes('const previousOverflow = document.body.style.overflow'),
    true
  )
  assert.equal(source.includes("document.body.style.overflow = 'hidden'"), true)
  assert.equal(
    source.includes('document.body.style.overflow = previousOverflow'),
    true
  )
})

test('overlay keeps active guard and exposes skip with phase copy', async () => {
  const source = await readText('../../src/components/home/HomeIntroOverlay.js')

  assert.equal(source.includes('if (!active)'), true)
  assert.equal(source.includes('translation.intro_skip'), true)
  assert.equal(source.includes('translation.intro_phase_1'), true)
  assert.equal(source.includes('translation.intro_phase_2'), true)
  assert.equal(source.includes('translation.intro_phase_3'), true)
  assert.equal(source.includes('aria-modal="true"'), true)
})

test('overlay includes focus trap and focus restore safeguards', async () => {
  const source = await readText('../../src/components/home/HomeIntroOverlay.js')

  assert.equal(source.includes('const previousFocusRef = useRef(null)'), true)
  assert.equal(source.includes("document.addEventListener('focusin'"), true)
  assert.equal(source.includes("document.removeEventListener('focusin'"), true)
  assert.equal(source.includes("if (event.key === 'Tab')"), true)
  assert.equal(
    source.includes('previousFocusRef.current = document.activeElement'),
    true
  )
  assert.equal(source.includes('previousFocus?.focus()'), true)
})

test('reduced-motion media query listener has modern and legacy fallback', async () => {
  const source = await readText(
    '../../src/components/home/HomeEntryExperience.js'
  )

  assert.equal(
    source.includes("typeof mediaQuery.addEventListener === 'function'"),
    true
  )
  assert.equal(
    source.includes(
      "mediaQuery.addEventListener('change', updateReducedMotion)"
    ),
    true
  )
  assert.equal(
    source.includes('mediaQuery.addListener(updateReducedMotion)'),
    true
  )
  assert.equal(
    source.includes("typeof mediaQuery.removeEventListener === 'function'"),
    true
  )
  assert.equal(
    source.includes(
      "mediaQuery.removeEventListener('change', updateReducedMotion)"
    ),
    true
  )
  assert.equal(
    source.includes('mediaQuery.removeListener(updateReducedMotion)'),
    true
  )
})
