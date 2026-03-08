import skills from '../../../data/skills.js'
import skillsUtils from '../../lib/content/skills-utils.js'

const { sortSkillsByLevelAndRecency } = skillsUtils

function SkillCard({ skill, wordLevel, description, recent }) {
  return (
    <article style={styles.card}>
      <h4 style={styles.title}>
        {skill} {recent ? <span style={styles.recentDot}>●</span> : null}
      </h4>
      <p style={styles.level}>{wordLevel}</p>
      <p style={styles.description}>{description}</p>
    </article>
  )
}

function SkillGroup({ title, items, lang, translation }) {
  const sortedItems = sortSkillsByLevelAndRecency(items)

  return (
    <section>
      <h3 style={styles.groupTitle}>{title}</h3>
      <div style={styles.grid}>
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
  return (
    <>
      <section>
        <h3>{translation.levels_explained}</h3>
        <ol>
          <li>
            <strong>{translation.wordLevel[0]}:</strong> {translation.help_l1}
          </li>
          <li>
            <strong>{translation.wordLevel[1]}:</strong> {translation.help_l2}
          </li>
          <li>
            <strong>{translation.wordLevel[2]}:</strong> {translation.help_l3}
          </li>
          <li>
            <strong>{translation.wordLevel[3]}:</strong> {translation.help_l4}
          </li>
          <li>
            <strong>{translation.wordLevel[4]}:</strong> {translation.help_l5}
          </li>
        </ol>
        <p>
          {translation.blinking}: {translation.help_blinking}
        </p>
      </section>

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
    </>
  )
}

const styles = {
  groupTitle: {
    background: '#0a61ff',
    color: '#fff',
    padding: '4px 8px',
    display: 'inline-block',
    transform: 'skew(-14deg)',
    marginTop: 24,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
    gap: 12,
    marginTop: 12,
  },
  card: {
    border: '1px solid #d4d4d4',
    borderRadius: 6,
    background: '#fff',
    padding: 12,
  },
  title: {
    margin: '0 0 6px 0',
  },
  level: {
    margin: '0 0 8px 0',
    fontWeight: 700,
    color: '#194f9a',
  },
  description: {
    margin: 0,
    fontSize: 14,
  },
  recentDot: {
    color: '#f07f00',
  },
}
