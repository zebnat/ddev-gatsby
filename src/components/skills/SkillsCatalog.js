import skills from '../../../data/skills.js'
import skillsCloudUtils from '../../lib/content/skills-cloud-utils.js'
import skillsUtils from '../../lib/content/skills-utils.js'

import Badge from '../ui/badge'
import { Card, CardContent } from '../ui/card'
import SkillMapSummary from './SkillMapSummary'

const { sortSkillsByLevelAndRecency } = skillsUtils
const { getSkillCloudItems } = skillsCloudUtils

function SkillCard({ skill, wordLevel, description, recent }) {
  return (
    <Card
      as="article"
      className="h-full border-cyan-300/20 bg-slate-950/75 p-0 transition hover:border-cyan-300/45"
    >
      <CardContent className="space-y-3 p-4">
        <h4 className="m-0 text-lg font-semibold text-slate-100">{skill}</h4>
        <div className="flex flex-wrap gap-2">
          <Badge variant="accent" className="normal-case tracking-normal">
            {wordLevel}
          </Badge>
          {recent ? (
            <Badge variant="warning" className="normal-case tracking-normal">
              Recent
            </Badge>
          ) : null}
        </div>
        <p className="m-0 text-sm leading-relaxed text-slate-300">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}

function SkillsLevelGuide({ translation }) {
  return (
    <Card className="border-cyan-300/25 bg-slate-900/70">
      <CardContent className="space-y-4 p-5">
        <h3 className="m-0 text-xl font-semibold text-slate-100">
          {translation.levels_explained}
        </h3>
        <ol className="m-0 list-decimal space-y-2 pl-5 text-sm text-slate-300">
          <li>
            <strong className="text-slate-100">
              {translation.wordLevel[0]}:
            </strong>{' '}
            {translation.help_l1}
          </li>
          <li>
            <strong className="text-slate-100">
              {translation.wordLevel[1]}:
            </strong>{' '}
            {translation.help_l2}
          </li>
          <li>
            <strong className="text-slate-100">
              {translation.wordLevel[2]}:
            </strong>{' '}
            {translation.help_l3}
          </li>
          <li>
            <strong className="text-slate-100">
              {translation.wordLevel[3]}:
            </strong>{' '}
            {translation.help_l4}
          </li>
          <li>
            <strong className="text-slate-100">
              {translation.wordLevel[4]}:
            </strong>{' '}
            {translation.help_l5}
          </li>
        </ol>
        <p className="m-0 text-sm text-slate-300">
          <span className="font-semibold text-amber-200">
            {translation.blinking}:
          </span>{' '}
          {translation.help_blinking}
        </p>
      </CardContent>
    </Card>
  )
}

function SkillGroupTitle({ title }) {
  return (
    <h3 className="m-0 inline-flex items-center rounded-full border border-cyan-300/45 bg-cyan-400/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.14em] text-cyan-100">
      {title}
    </h3>
  )
}

function SkillGroup({ title, items, lang, translation }) {
  const sortedItems = sortSkillsByLevelAndRecency(items)

  return (
    <section className="space-y-3">
      <SkillGroupTitle title={title} />
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {sortedItems.map((item) => (
          <SkillCard
            key={item.skill}
            skill={item.skill}
            wordLevel={translation.wordLevel[item.level - 1] || '---'}
            description={item.description[lang]}
            recent={item.isRecent}
          />
        ))}
      </div>
    </section>
  )
}

export default function SkillsCatalog({ lang, translation }) {
  const cloudItems = getSkillCloudItems(skills)

  return (
    <div className="space-y-7">
      <SkillsLevelGuide translation={translation} />

      <SkillMapSummary items={cloudItems} translation={translation} />

      <SkillGroup
        title={translation.languages}
        items={skills.languages}
        lang={lang}
        translation={translation}
      />
      <SkillGroup
        title={translation.frameworks}
        items={skills.libs}
        lang={lang}
        translation={translation}
      />
      <SkillGroup
        title={translation.other_tools}
        items={skills.tools}
        lang={lang}
        translation={translation}
      />
      <SkillGroup
        title={translation.other_concepts}
        items={skills.other}
        lang={lang}
        translation={translation}
      />
    </div>
  )
}
