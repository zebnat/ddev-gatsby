import React from 'react'
import Header from '../../components/Header'
import { Helmet } from 'react-helmet'
import translation from '../../../data/translations/skillsPage'
import skills from '../../../data/skills'
import SkillLevel from '../SkillLevel'

const SkillsPage = props => {
  const sortDescByLevel = function(a, b) {
    if (a.level > b.level) {
      return -1
    } else if (a.level < b.level) {
      return 1
    } else {
      return 0
    }
  }
  const programmingSkills = skills.languages.sort(sortDescByLevel)
  const frameworkSkills = skills.libs.sort(sortDescByLevel)
  const otherSkills = skills.other.sort(sortDescByLevel)
  const futureSkills = skills.future.sort(sortDescByLevel)

  console.log(programmingSkills)
  return (
    <>
      <Helmet>
        <html lang={props.lang} />
        <title>{translation[props.lang].title}</title>
      </Helmet>
      <Header h1={translation[props.lang].h1} h2={translation[props.lang].h2} />
      <div>
        <h3>{translation[props.lang].levels_explained}</h3>
        <ul css={{ fontSize: '80%' }}>
          <li>
            <b>Nivel 1:</b> {translation[props.lang].help_l1}
          </li>
          <li>
            <b>Nivel 2:</b> {translation[props.lang].help_l2}
          </li>
          <li>
            <b>Nivel 3:</b> {translation[props.lang].help_l3}
          </li>
          <li>
            <b>Nivel 4:</b> {translation[props.lang].help_l4}
          </li>
          <li>
            <b>Nivel 5:</b> {translation[props.lang].help_l5}
          </li>
          <li>
            <b css={{ animation: 'blink 2s linear infinite' }}>
              {translation[props.lang].blinking}:
            </b>{' '}
            {translation[props.lang].help_blinking}
          </li>
        </ul>
      </div>
      <div
        css={{
          background: '#39568c',
          color: 'white',
          padding: '5px 8px',
          transform: 'skew(-20deg)',
        }}
      >
        <span>{translation[props.lang].languages}</span>
      </div>
      <div css={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {programmingSkills.map(el => (
          <SkillElement
            skill={el.skill}
            wordLevel={translation[props.lang].wordLevel}
            level={el.level}
            leveling={el.isRecent}
            key={el.skill.toLowerCase()}
          />
        ))}
      </div>

      <div
        css={{
          background: '#39568c',
          color: 'white',
          padding: '5px 8px',
          transform: 'skew(-20deg)',
        }}
      >
        <span>{translation[props.lang].frameworks}</span>
      </div>
      <div css={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {frameworkSkills.map(el => (
          <SkillElement
            skill={el.skill}
            wordLevel={translation[props.lang].wordLevel}
            level={el.level}
            leveling={el.isRecent}
            key={el.skill.toLowerCase()}
          />
        ))}
      </div>
      <div
        css={{
          background: '#39568c',
          color: 'white',
          padding: '5px 8px',
          transform: 'skew(-20deg)',
        }}
      >
        <span>{translation[props.lang].other_tools}</span>
      </div>
      <div css={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {otherSkills.map(el => (
          <SkillElement
            skill={el.skill}
            wordLevel={translation[props.lang].wordLevel}
            level={el.level}
            leveling={el.isRecent}
            key={el.skill.toLowerCase()}
          />
        ))}
      </div>
      <div
        css={{
          background: '#39568c',
          color: 'white',
          padding: '5px 8px',
          transform: 'skew(-20deg)',
        }}
      >
        <span>{translation[props.lang].future_skills}</span>
      </div>
      <div css={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {futureSkills.map(el => (
          <SkillElement
            skill={el.skill}
            wordLevel={translation[props.lang].wordLevel}
            level={1}
            leveling={el.isRecent}
            key={el.skill.toLowerCase()}
          />
        ))}
      </div>
    </>
  )
}

export default SkillsPage
