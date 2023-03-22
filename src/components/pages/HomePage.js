import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Header from '../../components/Header'
import { Helmet } from 'react-helmet'
import { linkToSection } from '../../utils/links'
import translation from '../../../data/translations/homePage'
import Markdown from 'markdown-to-jsx'
import { Link } from 'gatsby'

const HomePage = props => {
  const { lang, data } = props

  const linkOpts = {
    allMenuData: data.allMenu,
    defaultLang: data.site.siteMetadata.defaultLang,
  }
  const [certificateWithIssue, setCertificateWithIssue] = useState('')

  const aboutLink = linkToSection({ sectionId: 'about', ...linkOpts })
  const skillsLink = linkToSection({ sectionId: 'tech', ...linkOpts })
  const projectsLink = linkToSection({ sectionId: 'project', ...linkOpts })

  const awaitingTitle = (e, certificateName) => {
    e.preventDefault()
    setCertificateWithIssue(certificateName)
  }

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
      <table >
        <tr>
          <th>{translation[lang].file}</th>
          <th>{translation[lang].download}</th>
        </tr>
        <tr>
          <td>{translation[lang].resume}</td>
          <td css={{ fontSize: '2rem' }}><a href={
            lang === data.site.siteMetadata.defaultLang
              ? '/docs/cv.pdf'
              : '/docs/cv-' + lang + '.pdf'
          } target="_blank" rel="noopener noreferrer">💾</a></td>
        </tr>
        <tr>
          <td>{translation[lang].recommendationPW}</td>
          <td css={{ fontSize: '2rem' }}><a href="/docs/carta-recomendacion-pw.pdf" target="_blank" rel="noopener noreferrer">💾</a></td>
        </tr>
        <tr>
          <td>EFSET English Certificate (C1 Advanced)</td>
          <td css={{ fontSize: '2rem' }}><a href="https://www.efset.org/cert/vF9UYT" target="_blank" rel="noopener noreferrer">💾</a></td>
        </tr>
        <tr>
          <td>{translation[lang].daw}</td>
          <td css={{ fontSize: '2rem' }}><a href="#" onClick={(e) => awaitingTitle(e, translation[lang].daw)} target="_blank" rel="noopener noreferrer">💾</a></td>
        </tr>
      </table>
      {certificateWithIssue && <div css={{ textAlign: 'center', padding: '2rem', background: '#ffaf00' }}>
        <span dangerouslySetInnerHTML={{
          __html: translation[lang].certIssue.replace('%certName%', `<strong>${certificateWithIssue}</strong>`)
        }}></span>
      </div>}
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
