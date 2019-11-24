import React from 'react'
import Header from '../../components/Header'
import { Helmet } from 'react-helmet'
import translation from '../../../data/translations/skillsPage'
import skills from '../../../data/skills'
import SkillElement from '../SkillElement'
import { linkToSection } from '../../utils/links'
import CategoryButton from '../CategoryButton'

const SkillsPage = props => {
  const sortDescByLevel = function(a, b) {
    if (a.level > b.level) {
      return -1
    } else if (a.level < b.level) {
      return 1
    } else {
      return a.isRecent === true && b.isRecent === false ? -1 : 0
    }
  }
  const programmingSkills = skills.languages.sort(sortDescByLevel)
  const frameworkSkills = skills.libs.sort(sortDescByLevel)
  const toolsSkills = skills.tools.sort(sortDescByLevel)
  const otherSkills = skills.other.sort(sortDescByLevel)

  const linkOpts = {
    allMenuData: props.data.allMenu,
    defaultLang: props.data.site.siteMetadata.defaultLang,
  }
  const homeLink = linkToSection({ sectionId: 'home', ...linkOpts })

  const listSkills = skillList => {
    return skillList.map(el => (
      <SkillElement
        skill={el.skill}
        wordLevel={translation[props.lang].wordLevel[el.level - 1] || '------'}
        level={el.level}
        leveling={el.isRecent}
        description={el.description[props.lang]}
        key={el.skill.toLowerCase()}
      />
    ))
  }

  return (
    <>
      <Helmet>
        <html lang={props.lang} />
        <title>{translation[props.lang].title}</title>
      </Helmet>
      <Header h1={translation[props.lang].h1} h2={translation[props.lang].h2} />
      <div>
        <h3>{translation[props.lang].levels_explained}</h3>
        <ul>
          <li>
            <b>{translation[props.lang].wordLevel[0]}:</b>{' '}
            {translation[props.lang].help_l1}
          </li>
          <li>
            <b>{translation[props.lang].wordLevel[1]}:</b>{' '}
            {translation[props.lang].help_l2}
          </li>
          <li>
            <b>{translation[props.lang].wordLevel[2]}:</b>{' '}
            {translation[props.lang].help_l3}
          </li>
          <li>
            <b>{translation[props.lang].wordLevel[3]}:</b>{' '}
            {translation[props.lang].help_l4}
          </li>
          <li>
            <b>{translation[props.lang].wordLevel[4]}:</b>{' '}
            {translation[props.lang].help_l5}
          </li>
        </ul>
        <p>{translation[props.lang].help_blinking}</p>
        <p
          css={{
            padding: 10,
            background: '#262626',
            color: '#ead776',
            textAlign: 'center',
            textTransform: 'uppercase',
          }}
        >
          {'-->  ' + translation[props.lang].tap_skill + '  <--'}
        </p>
      </div>
      <div css={skewStyle}>
        <span>{translation[props.lang].languages}</span>
      </div>
      <div css={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {listSkills(programmingSkills)}
      </div>

      <div css={skewStyle}>
        <span>{translation[props.lang].frameworks}</span>
      </div>
      <div css={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {listSkills(frameworkSkills)}
      </div>
      <div css={skewStyle}>
        <span>{translation[props.lang].other_tools}</span>
      </div>
      <div css={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {listSkills(toolsSkills)}
      </div>
      <div css={skewStyle}>
        <span>{translation[props.lang].other_concepts}</span>
      </div>
      <div css={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {listSkills(otherSkills)}
      </div>
      <div css={{ textAlign: 'center', margin: '3rem 0' }}>
        <CategoryButton route={homeLink} inside gatsbyLink name="HOME" />
      </div>
    </>
  )
}

// old bg #39568c
const skewStyle = {
  background: '#0a61ff',
  color: 'white',
  padding: '5px 8px',
  transform: 'skew(-20deg)',
}

export default SkillsPage
