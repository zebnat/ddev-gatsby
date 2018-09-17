import React from 'react'
import Header from '../../components/Header'
import { Helmet } from 'react-helmet'
import Social from '../Social'
import { Link } from 'gatsby'
import { linker, menuNodeFinder } from '../../utils/links'
import translation from '../../../data/translations/skillsPage'

import SkillLevel from '../SkillLevel'

const SkillElement = props => {
  return (
    <>
      <div css={{ width: '245px', height: '50px', margin: 5 }}>
        <div css={{ float: 'left', width: '125px', textAlign: 'center' }}>
          <span
            css={{
              display: 'inline-block',
              minWidth: '100px',
              color: 'white',
              fontSize: '80%',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              padding: 4,
              margin: '10px 0',
              background: 'gray',
              borderRadius: 10,
            }}
          >
            {props.skill}
          </span>
        </div>
        <div css={{ float: 'right' }}>
          <SkillLevel
            wordLevel={props.wordLevel}
            level={props.level}
            leveling={props.leveling}
          />
        </div>
        <div css={{ clear: 'both' }} />
      </div>
    </>
  )
}

const SkillsPage = props => {
  return (
    <>
      <Helmet>
        <html lang={props.lang} />
        <title>{translation[props.lang].title}</title>
      </Helmet>
      <Header h1={translation[props.lang].h1} h2={translation[props.lang].h2} />
      <div>
        <h3>Explicación de los niveles</h3>
        <ul css={{ fontSize: '80%' }}>
          <li>
            <b>Nivel 1:</b> Conocimiento teórico básico sobre la herramienta.
          </li>
          <li>
            <b>Nivel 2:</b> Teoría y además se ha practicado la herramienta para
            comprenderla.
          </li>
          <li>
            <b>Nivel 3:</b> Ya se ha utilizado en algunos proyectos con
            problemas reales.
          </li>
          <li>
            <b>Nivel 4:</b> Se ha utilizado de forma consolidada durante años,
            se conoce lo suficiente.
          </li>
          <li>
            <b>Nivel 5:</b> Muchos años de uso, gran confianza, conocimiento
            avanzado.
          </li>
          <li>
            <b css={{ animation: 'blink 2s linear infinite' }}>Parpadeo:</b> Se
            ha utilizado de forma reciente, al menos en los últimos 2 años.
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
        <span>Lenguajes y similares</span>
      </div>
      <div css={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <SkillElement
          skill="PHP"
          wordLevel={translation[props.lang].wordLevel}
          level={5}
          leveling
        />
        <SkillElement
          skill="Javascript"
          wordLevel={translation[props.lang].wordLevel}
          level={5}
          leveling
        />
        <SkillElement
          skill="ES6"
          wordLevel={translation[props.lang].wordLevel}
          level={4}
          leveling
        />
        <SkillElement
          skill="SQL (mysql)"
          wordLevel={translation[props.lang].wordLevel}
          level={4}
          leveling
        />
        <SkillElement
          skill="HTML5"
          wordLevel={translation[props.lang].wordLevel}
          level={5}
          leveling
        />
        <SkillElement
          skill="CSS3"
          wordLevel={translation[props.lang].wordLevel}
          level={4}
          leveling
        />
        <SkillElement
          skill="LESS"
          wordLevel={translation[props.lang].wordLevel}
          level={4}
          leveling
        />
        <SkillElement
          skill="Node.js"
          wordLevel={translation[props.lang].wordLevel}
          level={3}
          leveling
        />
        <SkillElement
          skill="C#"
          wordLevel={translation[props.lang].wordLevel}
          level={3}
        />
        <SkillElement
          skill="UnityEngine"
          wordLevel={translation[props.lang].wordLevel}
          level={3}
        />
        <SkillElement
          skill="Dart"
          wordLevel={translation[props.lang].wordLevel}
          level={2}
        />
        <SkillElement
          skill="Python"
          wordLevel={translation[props.lang].wordLevel}
          level={1}
        />
        <SkillElement
          skill="Java"
          wordLevel={translation[props.lang].wordLevel}
          level={2}
        />
        <SkillElement
          skill="Mongodb"
          wordLevel={translation[props.lang].wordLevel}
          level={2}
        />
      </div>

      <div
        css={{
          background: '#39568c',
          color: 'white',
          padding: '5px 8px',
          transform: 'skew(-20deg)',
        }}
      >
        <span>Librerías/Frameworks/CMS</span>
      </div>
      <div css={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <SkillElement
          skill="Reactjs"
          wordLevel={translation[props.lang].wordLevel}
          level={3}
          leveling
        />
        <SkillElement
          skill="ReactRouter"
          wordLevel={translation[props.lang].wordLevel}
          level={2}
          leveling
        />
        <SkillElement
          skill="Redux"
          wordLevel={translation[props.lang].wordLevel}
          level={2}
        />
        <SkillElement
          skill="Express"
          wordLevel={translation[props.lang].wordLevel}
          level={3}
        />
        <SkillElement
          skill="jQuery"
          wordLevel={translation[props.lang].wordLevel}
          level={5}
        />
        <SkillElement
          skill="wordpress"
          wordLevel={translation[props.lang].wordLevel}
          level={2}
        />
        <SkillElement
          skill="T.Bootstrap"
          wordLevel={translation[props.lang].wordLevel}
          level={4}
        />
        <SkillElement
          skill="Laravel"
          wordLevel={translation[props.lang].wordLevel}
          level={1}
        />
        <SkillElement
          skill="Gatsbyjs"
          wordLevel={translation[props.lang].wordLevel}
          level={3}
          leveling
        />
        <SkillElement
          skill="Webpack"
          wordLevel={translation[props.lang].wordLevel}
          level={3}
        />
      </div>
      <div
        css={{
          background: '#39568c',
          color: 'white',
          padding: '5px 8px',
          transform: 'skew(-20deg)',
        }}
      >
        <span>Lo demás</span>
      </div>
      <div css={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <SkillElement
          skill="Regexp"
          wordLevel={translation[props.lang].wordLevel}
          level={4}
          leveling
        />
        <SkillElement
          skill="REST"
          wordLevel={translation[props.lang].wordLevel}
          level={4}
        />
        <SkillElement
          skill="APC Cache"
          wordLevel={translation[props.lang].wordLevel}
          level={4}
        />
        <SkillElement
          skill="Composer"
          wordLevel={translation[props.lang].wordLevel}
          level={3}
        />
        <SkillElement
          skill="SqlQueryOptimiz"
          wordLevel={translation[props.lang].wordLevel}
          level={5}
        />
        <SkillElement
          skill="OOP (SOLID)"
          wordLevel={translation[props.lang].wordLevel}
          level={4}
        />
        <SkillElement
          skill="Authentication"
          wordLevel={translation[props.lang].wordLevel}
          level={3}
        />
        <SkillElement
          skill="UI Design"
          wordLevel={translation[props.lang].wordLevel}
          level={4}
          leveling
        />
        <SkillElement
          skill="UX"
          wordLevel={translation[props.lang].wordLevel}
          level={4}
          leveling
        />
        <SkillElement
          skill="WebScraping"
          wordLevel={translation[props.lang].wordLevel}
          level={3}
        />
        <SkillElement
          skill="ImageMagick"
          wordLevel={translation[props.lang].wordLevel}
          level={3}
        />
        <SkillElement
          skill="JSON"
          wordLevel={translation[props.lang].wordLevel}
          level={5}
        />
        <SkillElement
          skill="Ajax"
          wordLevel={translation[props.lang].wordLevel}
          level={5}
        />
        <SkillElement
          skill="Linux & SSH"
          wordLevel={translation[props.lang].wordLevel}
          level={4}
          leveling
        />
        <SkillElement
          skill="Rsync"
          wordLevel={translation[props.lang].wordLevel}
          level={4}
        />
        <SkillElement
          skill="Docker"
          wordLevel={translation[props.lang].wordLevel}
          level={2}
        />
        <SkillElement
          skill="Nginx"
          wordLevel={translation[props.lang].wordLevel}
          level={3}
          leveling
        />
        <SkillElement
          skill="Git"
          wordLevel={translation[props.lang].wordLevel}
          level={3}
          leveling
        />
        <SkillElement
          skill="Subversion"
          wordLevel={translation[props.lang].wordLevel}
          level={4}
          leveling
        />
        <SkillElement
          skill="Netbeans"
          wordLevel={translation[props.lang].wordLevel}
          level={4}
        />
        <SkillElement
          skill="VisualStudio"
          wordLevel={translation[props.lang].wordLevel}
          level={4}
        />
        <SkillElement
          skill="VSCode"
          wordLevel={translation[props.lang].wordLevel}
          level={4}
          leveling
        />
        <SkillElement
          skill="CSSinJS"
          wordLevel={translation[props.lang].wordLevel}
          level={3}
          leveling
        />
        <SkillElement
          skill="GoogleSheet"
          wordLevel={translation[props.lang].wordLevel}
          level={3}
        />
        <SkillElement
          skill="GameDesign"
          wordLevel={translation[props.lang].wordLevel}
          level={3}
        />
        <SkillElement
          skill="SEO"
          wordLevel={translation[props.lang].wordLevel}
          level={4}
        />
        <SkillElement
          skill="FB API"
          wordLevel={translation[props.lang].wordLevel}
          level={3}
        />
        <SkillElement
          skill="G+ API"
          wordLevel={translation[props.lang].wordLevel}
          level={3}
        />
        <SkillElement
          skill="TW API"
          wordLevel={translation[props.lang].wordLevel}
          level={3}
        />
      </div>
      <div
        css={{
          background: '#39568c',
          color: 'white',
          padding: '5px 8px',
          transform: 'skew(-20deg)',
        }}
      >
        <span>Quizás en el futuro</span>
      </div>
      <div css={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <SkillElement
          skill="ReactNative"
          wordLevel={translation[props.lang].wordLevel}
          level={0}
        />
        <SkillElement
          skill="C++"
          wordLevel={translation[props.lang].wordLevel}
          level={0}
        />
        <SkillElement
          skill="Asp.Net"
          wordLevel={translation[props.lang].wordLevel}
          level={0}
        />
        <SkillElement
          skill=".Net"
          wordLevel={translation[props.lang].wordLevel}
          level={0}
        />
        <SkillElement
          skill="Angular2"
          wordLevel={translation[props.lang].wordLevel}
          level={0}
        />
        <SkillElement
          skill="Vuejs"
          wordLevel={translation[props.lang].wordLevel}
          level={0}
        />
        <SkillElement
          skill="AWS"
          wordLevel={translation[props.lang].wordLevel}
          level={0}
        />
        <SkillElement
          skill="Symphony"
          wordLevel={translation[props.lang].wordLevel}
          level={0}
        />
        <SkillElement
          skill="Firebase"
          wordLevel={translation[props.lang].wordLevel}
          level={0}
        />
        <SkillElement
          skill="Xamarin"
          wordLevel={translation[props.lang].wordLevel}
          level={0}
        />
        <SkillElement
          skill="Flutter"
          wordLevel={translation[props.lang].wordLevel}
          level={0}
        />
        <SkillElement
          skill="Ionic"
          wordLevel={translation[props.lang].wordLevel}
          level={0}
        />
      </div>
    </>
  )
}

export default SkillsPage
