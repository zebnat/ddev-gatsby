'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

import skills from '../../../data/skills.js'
import skillsUtils from '../../lib/content/skills-utils.js'

import Badge from '../ui/badge'
import { Card, CardContent } from '../ui/card'

const ERA_ORDER = ['monolith', 'framework', 'spa', 'platform', 'ai']
const { getCatalogSkillItems } = skillsUtils

const ERA_LABEL_KEYS = {
  monolith: 'era_monolith',
  framework: 'era_framework',
  spa: 'era_spa',
  platform: 'era_platform',
  ai: 'era_ai',
}

const CATEGORY_LABEL_KEYS = {
  languages: 'languages',
  libs: 'frameworks',
  tools: 'other_tools',
  other: 'other_concepts',
}

export default function SkillsCatalog({ lang, translation }) {
  const allSkills = useMemo(() => getCatalogSkillItems(skills), [])
  const [activeEra, setActiveEra] = useState('platform')
  const [expandedSkill, setExpandedSkill] = useState(null)
  const expandedPanelRef = useRef(null)

  const sortedItems = useMemo(
    () => [...allSkills].sort((a, b) => a.skill.localeCompare(b.skill)),
    [allSkills]
  )

  const expandedItem = sortedItems.find((item) => item.skill === expandedSkill)

  const handleToggleExpand = (skillName) => {
    setExpandedSkill((current) => (current === skillName ? null : skillName))
  }

  useEffect(() => {
    if (
      !expandedSkill ||
      !expandedPanelRef.current ||
      typeof window === 'undefined'
    ) {
      return
    }

    if (!window.matchMedia('(max-width: 639px)').matches) {
      return
    }

    const frame = window.requestAnimationFrame(() => {
      expandedPanelRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })

    return () => {
      window.cancelAnimationFrame(frame)
    }
  }, [expandedSkill])

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/90">
          {translation.era_menu_label}
        </span>
        <div className="w-full" aria-label={translation.era_menu_label}>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
            {ERA_ORDER.map((era) => {
              const isActive = era === activeEra

              return (
                <button
                  key={era}
                  type="button"
                  onClick={() => setActiveEra(era)}
                  className={`w-full rounded-full border px-4 py-1.5 text-center text-xs font-semibold uppercase tracking-[0.14em] transition ${
                    isActive
                      ? 'border-cyan-200/70 bg-cyan-300/20 text-cyan-50 shadow-[0_0_20px_rgba(34,211,238,0.35)]'
                      : 'border-slate-400/30 bg-slate-900/70 text-slate-300 hover:border-cyan-300/45 hover:text-cyan-100'
                  }`}
                  aria-pressed={isActive}
                >
                  {translation[ERA_LABEL_KEYS[era]]}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <p className="m-0 text-sm text-slate-300">{translation.tap_skill}</p>

      <div className="flex flex-wrap gap-2">
        {sortedItems.map((item) => {
          const isEraMatch = item.era === activeEra
          const isExpanded = expandedSkill === item.skill

          return (
            <Badge
              key={item.skill}
              as="button"
              type="button"
              variant={isEraMatch ? 'accent' : 'neutral'}
              onClick={() => handleToggleExpand(item.skill)}
              className={`normal-case tracking-normal transition ${
                isEraMatch
                  ? 'border-cyan-200/70 shadow-[0_0_20px_rgba(34,211,238,0.32)]'
                  : 'opacity-50'
              } ${
                isExpanded
                  ? 'ring-2 ring-cyan-300/65 ring-offset-2 ring-offset-slate-950'
                  : ''
              }`}
              aria-expanded={isExpanded}
            >
              {item.skill}
            </Badge>
          )
        })}
      </div>

      {expandedItem ? (
        <div ref={expandedPanelRef} className="scroll-mt-24 sm:scroll-mt-20">
          <Card className="border-cyan-300/35 bg-slate-900/80 p-0 transition-all">
            <CardContent className="space-y-3 p-4">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="m-0 mr-1 text-lg font-semibold text-slate-100">
                  {expandedItem.skill}
                </h3>
                <Badge variant="accent" className="normal-case tracking-normal">
                  {translation.wordLevel[expandedItem.level - 1] || '---'}
                </Badge>
                {expandedItem.isRecent ? (
                  <Badge
                    variant="warning"
                    className="normal-case tracking-normal"
                  >
                    {translation.recent_label}
                  </Badge>
                ) : null}
              </div>

              <p className="m-0 text-sm leading-relaxed text-slate-200/90">
                {expandedItem.description[lang]}
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge className="normal-case tracking-normal">
                  {translation[ERA_LABEL_KEYS[expandedItem.era]]}
                </Badge>
                <Badge className="normal-case tracking-normal">
                  {translation[CATEGORY_LABEL_KEYS[expandedItem.category]]}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : null}
    </div>
  )
}
