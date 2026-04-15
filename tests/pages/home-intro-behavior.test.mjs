import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

async function readText(path) {
  return readFile(new URL(path, import.meta.url), 'utf8')
}

test('intro timing uses 4.5 second default with exit phase', async () => {
  const source = await readText(
    '../../src/components/home/HomeEntryExperience.js'
  )

  assert.equal(source.includes('const INTRO_TIMELINE_MS = 4500'), true)
  assert.equal(source.includes('const INTRO_EXIT_MS = 300'), true)
  assert.equal(
    source.includes(
      'const beginExitDelay = Math.max(closeDelay - INTRO_EXIT_MS, 0)'
    ),
    true
  )
})

test('intro always displays on homepage without storage or query gating', async () => {
  const source = await readText(
    '../../src/components/home/HomeEntryExperience.js'
  )

  assert.equal(source.includes('homeIntroSeen_en'), false)
  assert.equal(source.includes('homeIntroSeen_es'), false)
  assert.equal(
    source.includes('new URLSearchParams(window.location.search)'),
    false
  )
  assert.equal(source.includes('setIntroActive(true)'), true)
})

test('reduced motion path uses a dedicated shorter close duration', async () => {
  const source = await readText(
    '../../src/components/home/HomeEntryExperience.js'
  )

  assert.equal(source.includes('prefers-reduced-motion: reduce'), true)
  assert.equal(
    source.includes('const INTRO_REDUCED_MOTION_CLOSE_MS = 2600'),
    true
  )
  assert.equal(source.includes('const closeDelay = prefersReducedMotion'), true)
})

test('intro uses separate exit and close timers', async () => {
  const source = await readText(
    '../../src/components/home/HomeEntryExperience.js'
  )

  assert.equal(source.includes('const closeTimerRef = useRef()'), true)
  assert.equal(source.includes('const exitTimerRef = useRef()'), true)
  assert.equal(source.includes('setIntroExiting(true)'), true)
  assert.equal(source.includes('setIntroActive(false)'), true)
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

test('overlay keeps active guard and adds richer phase animation hooks', async () => {
  const source = await readText('../../src/components/home/HomeIntroOverlay.js')

  assert.equal(source.includes('if (!active)'), true)
  assert.equal(source.includes('exiting,'), true)
  assert.equal(source.includes('translation.intro_skip'), true)
  assert.equal(source.includes('translation.intro_phase_1'), true)
  assert.equal(source.includes('translation.intro_phase_2'), true)
  assert.equal(source.includes('translation.intro_phase_3'), true)
  assert.equal(source.includes('hud-intro-phase-label'), true)
  assert.equal(source.includes('hud-intro-phase-sweep'), true)
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

test('intro overlay uses a higher layer than mobile menu overlay', async () => {
  const source = await readText('../../src/components/home/HomeIntroOverlay.js')

  assert.equal(source.includes('z-[70]'), true)
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
    source.includes("typeof mediaQuery.addListener === 'function'"),
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
    source.includes("typeof mediaQuery.removeListener === 'function'"),
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
  assert.equal(
    source.includes("if (typeof window.matchMedia !== 'function')"),
    true
  )
  assert.equal(source.includes('try {'), true)
  assert.equal(source.includes('} catch {'), true)
})
