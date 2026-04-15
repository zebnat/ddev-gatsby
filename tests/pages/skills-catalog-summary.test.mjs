import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

test('skills catalog renders era menu and inline expansion UI', async () => {
  const source = await readFile(
    new URL('../../src/components/skills/SkillsCatalog.js', import.meta.url),
    'utf8'
  )

  assert.equal(
    source.includes("const [activeEra, setActiveEra] = useState('platform')"),
    true
  )
  assert.equal(source.includes('aria-label={translation.era_menu_label}'), true)
  assert.equal(source.includes('setExpandedSkill'), true)
  assert.equal(source.includes('translation.tap_skill'), true)
  assert.equal(source.includes('scrollIntoView'), true)
  assert.equal(source.includes("matchMedia('(max-width: 639px)')"), true)
})
