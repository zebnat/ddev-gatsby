import React from 'react'
import Header from '../../components/Header'
import { Helmet } from 'react-helmet'
import { linkToSection } from '../../utils/links'
import translation from '../../../data/translations/homePage'
import Markdown from 'markdown-to-jsx'
import { Link } from 'gatsby'

const HomePage = props => {
  const linkOpts = {
    allMenuData: props.data.allMenu,
    defaultLang: props.data.site.siteMetadata.defaultLang,
  }

  const aboutLink = linkToSection({ sectionId: 'about', ...linkOpts })
  const skillsLink = linkToSection({ sectionId: 'tech', ...linkOpts })
  const proyectsLink = linkToSection({ sectionId: 'proyect', ...linkOpts })

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
      <p>
        <Markdown
          children={translation[props.lang].intro}
          options={{
            overrides: {
              Link: {
                component: Link,
                props: {
                  to: aboutLink,
                },
              },
            },
          }}
        />
      </p>
      <h3>{translation[props.lang].skills}</h3>

      <p>
        <Markdown
          children={translation[props.lang].skillsInfo}
          options={{
            overrides: {
              Link: {
                component: Link,
                props: {
                  to: skillsLink,
                },
              },
            },
          }}
        />
      </p>
      <h3>{translation[props.lang].proyects}</h3>
      <p>
        <Markdown
          children={translation[props.lang].proyectInfo}
          options={{
            overrides: {
              Link: {
                component: Link,
                props: {
                  to: proyectsLink,
                },
              },
            },
          }}
        />
      </p>
      <h3>{translation[props.lang].academic}</h3>
      <p>
        <Markdown
          children={translation[props.lang].academicInfo}
          options={{
            overrides: {
              Link: {
                component: Link,
                props: {
                  to: aboutLink,
                },
              },
            },
          }}
        />
      </p>
      <ul css={{ fontSize: '80%', '>li': { margin: '1rem 0' } }}>
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
