import React from 'react'
import Header from '../../components/Header'
import { Helmet } from 'react-helmet'
import { linker, menuNodeFinder } from '../../utils/links'
import translation from '../../../data/translations/homePage'
import CategoryButton from '../CategoryButton'

const HomePage = props => {
  const defaultLan = props.data.site.siteMetadata.defaultLang
  const aboutEl = menuNodeFinder(props.data.allMenu, 'about')
  const aboutLink = linker(defaultLan, aboutEl.lang, aboutEl.route)
  const skillsEl = menuNodeFinder(props.data.allMenu, 'tech')
  const skillsLink = linker(defaultLan, skillsEl.lang, skillsEl.route)
  const proyectsEl = menuNodeFinder(props.data.allMenu, 'proyect')
  const proyectsLink = linker(defaultLan, proyectsEl.lang, proyectsEl.route)
  return (
    <>
      <Helmet>
        <html lang={props.lang} />
        <title>{translation[props.lang].title}</title>
      </Helmet>
      <div
        css={{
          '@media(max-height: 500px)': {
            '@media(max-width: 420px)': {
              paddingTop: '0',
            },
            '@media(min-width: 421px)': {
              paddingTop: '0',
            },
          },
          '@media(min-height: 501px)': {
            '@media(max-width: 420px)': {
              paddingTop: '100px',
            },
            '@media(min-width: 421px)': {
              paddingTop: '25px',
            },
          },
        }}
      >
        <Header
          h1={translation[props.lang].h1}
          h2={translation[props.lang].h2}
          quote={translation[props.lang].quote}
        />
      </div>
      <p
        dangerouslySetInnerHTML={{
          __html: translation[props.lang].intro,
        }}
      />
      <CategoryButton
        route={aboutLink}
        inside
        gatsbyLink
        name={translation[props.lang].moreabout}
      />
      <h3>{translation[props.lang].skills}</h3>
      <p>{translation[props.lang].skillsInfo}</p>
      <CategoryButton
        route={skillsLink}
        inside
        gatsbyLink
        name={translation[props.lang].fullSkills}
      />
      <h3>{translation[props.lang].proyects}</h3>
      <p>{translation[props.lang].proyectInfo}</p>
      <CategoryButton
        route={proyectsLink}
        inside
        gatsbyLink
        name={translation[props.lang].fullProyects}
      />
      <h3>{translation[props.lang].academic}</h3>
      <p>{translation[props.lang].academicInfo}</p>
      <ul>
        <li>
          <a href="/docs/cv.pdf" target="_blank" rel="noopener noreferrer">
            Currículum PDF
          </a>
        </li>
        <li>
          <a
            href="/docs/carta-recomendacion-pw.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Carta de recomendación de Panaworld S.L
          </a>
        </li>
        <li>
          <a
            href="/docs/certificado-experiencia-laboral-pw.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Certificado de tareas realizadas Panaworld S.L
          </a>
        </li>
      </ul>
    </>
  )
}

export default HomePage
