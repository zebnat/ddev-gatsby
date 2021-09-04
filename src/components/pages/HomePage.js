import React from 'react'
import PropTypes from 'prop-types';
import Header from '../../components/Header'
import { Helmet } from 'react-helmet'
import { linkToSection } from '../../utils/links'
import translation from '../../../data/translations/homePage'
import Markdown from 'markdown-to-jsx'
import { Link } from 'gatsby'

const HomePage = props => {
  const {lang, data} = props

  const linkOpts = {
    allMenuData: data.allMenu,
    defaultLang: data.site.siteMetadata.defaultLang,
  }

  const aboutLink = linkToSection({ sectionId: 'about', ...linkOpts })
  const skillsLink = linkToSection({ sectionId: 'tech', ...linkOpts })
  const projectsLink = linkToSection({ sectionId: 'project', ...linkOpts })

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{translation[lang].title}</title>
      </Helmet>
      <Header
        h1={translation[lang].h1}
        h2={translation[lang].h2}
        quote={translation[lang].quote}
        home
      />
      <Markdown
        children={translation[lang].intro}
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
      <h3>{translation[lang].skills}</h3>
      <Markdown
        children={translation[lang].skillsInfo}
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
      <h3>{translation[lang].projects}</h3>
      <Markdown
        children={translation[lang].projectInfo}
        options={{
          overrides: {
            Link: {
              component: Link,
              props: {
                to: projectsLink,
              },
            },
          },
        }}
      />
      <h3>{translation[lang].academic}</h3>
      <Markdown children={translation[lang].academicInfo} />
      <ul css={{ fontSize: '80%', '>li': { margin: '1rem 0' } }}>
        <li>
          <a
            href={
              lang === data.site.siteMetadata.defaultLang
                ? '/docs/cv.pdf'
                : '/docs/cv-' + lang + '.pdf'
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            {translation[lang].resume}
          </a>
        </li>
        <li>
          <a
            href="/docs/carta-recomendacion-pw.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {translation[lang].recommendationPW}
          </a>
        </li>
        <li>
          <a
            href="/docs/certificado-experiencia-laboral-pw.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {translation[lang].certificate}
          </a>
        </li>
      </ul>
    </>
  )
}

HomePage.propTypes = {
  lang: PropTypes.string.isRequired,
  data: PropTypes.shape({
    allMenu: PropTypes.object,
    site: PropTypes.object
  }).isRequired
}

export default HomePage
