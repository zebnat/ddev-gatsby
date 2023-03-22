import React from 'react'
import PropTypes from 'prop-types';
import Header from '../../components/Header'
import { Helmet } from 'react-helmet'
import translation from '../../../data/translations/skillsPage'
import skills from '../../../data/skills'
import SkillElement from '../SkillElement'
import { linkToSection } from '../../utils/links'
import CategoryButton from '../CategoryButton'

const SkillsPage = props => {
  const { lang, data } = props

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
    allMenuData: data.allMenu,
    defaultLang: data.site.siteMetadata.defaultLang,
  }
  const homeLink = linkToSection({ sectionId: 'home', ...linkOpts })

  const listSkills = skillList => {
    return skillList.map(el => (
      <SkillElement
        skill={el.skill}
        wordLevel={translation[lang].wordLevel[el.level - 1] || '------'}
        level={el.level}
        leveling={el.isRecent}
        description={el.description[lang]}
        key={el.skill.toLowerCase()}
      />
    ))
  }

  const listStyles = { display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '12px', justifyContent: 'space-between' }
  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{translation[lang].title}</title>
      </Helmet>
      <Header h1={translation[lang].h1} h2={translation[lang].h2} />
      <div>
        <h3>{translation[lang].levels_explained}</h3>
        <ul>
          <li>
            <b>{translation[lang].wordLevel[0]}:</b>{' '}
            {translation[lang].help_l1}
          </li>
          <li>
            <b>{translation[lang].wordLevel[1]}:</b>{' '}
            {translation[lang].help_l2}
          </li>
          <li>
            <b>{translation[lang].wordLevel[2]}:</b>{' '}
            {translation[lang].help_l3}
          </li>
          <li>
            <b>{translation[lang].wordLevel[3]}:</b>{' '}
            {translation[lang].help_l4}
          </li>
          <li>
            <b>{translation[lang].wordLevel[4]}:</b>{' '}
            {translation[lang].help_l5}
          </li>
        </ul>
        <p>{translation[lang].help_blinking}</p>
        <p
          css={{
            padding: '20px 5px',
            color: '#0961ff',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontSize: '134%',
          }}
        >
          
        </p>
      </div>
      <div css={skewStyle}>
        <span>{translation[lang].languages}</span>
      </div>
      <div css={listStyles}>
        {listSkills(programmingSkills)}
      </div>

      <div css={skewStyle}>
        <span>{translation[lang].frameworks}</span>
      </div>
      <div css={listStyles}>
        {listSkills(frameworkSkills)}
      </div>
      <div css={skewStyle}>
        <span>{translation[lang].other_tools}</span>
      </div>
      <div css={listStyles}>
        {listSkills(toolsSkills)}
      </div>
      <div css={skewStyle}>
        <span>{translation[lang].other_concepts}</span>
      </div>
      <div css={listStyles}>
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

SkillsPage.propTypes = {
  lang: PropTypes.string.isRequired,
  data: PropTypes.shape({
    allMenu: PropTypes.object,
    site: PropTypes.object
  }).isRequired
}

export default SkillsPage
