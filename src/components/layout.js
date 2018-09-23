import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Menu from './Menu'
import TopBar from './TopBar'
import Social from './Social'

import './layout.css'

const wrapperStyles = {
  maxWidth: 730,
  margin: `0 auto`,
  padding: '50px 60px 14px 60px',
  borderRadius: 3,
  '@media(max-width: 420px)': {
    padding: '14px 10px 14px 60px',
  },
}

const appStyles = {
  background: '#f8f8f8',
  paddingTop: 60,
  '@media(min-width: 1300px)': {
    background: '#f8f8f8 url("/bg.png") right fixed no-repeat',
  },
}

const footerStyles = {
  margin: '5rem 0 0 0',
  padding: '2rem 0',
  borderTop: '1px solid gray',
}

const footerLicenseStyles = {
  fontSize: '50%',
  color: '#666',
}

const Layout = ({ pageUniqueId, children, data, hrefLangs }) => {
  if (hrefLangs === undefined) {
    hrefLangs = data.allMenu.edges.find(el => el.node.uniqueId === pageUniqueId)
      .node.hrefLangs
  }

  return (
    <>
      <Helmet>
        <html lang={data.allMetaData.edges[0].node.currentLang} />
        {hrefLangs.map((v, i) => (
          <link
            key={i}
            rel="alternate"
            hreflang={v.locale}
            href={data.site.siteMetadata.domainUrl + v.url}
          />
        ))}
      </Helmet>
      <div css={appStyles}>
        <Menu
          menuList={data.allMenu.edges}
          currentLang={data.allMetaData.edges[0].node.currentLang}
          defaultLang={data.site.siteMetadata.defaultLang}
        />
        <TopBar
          languages={hrefLangs}
          defaultLang={data.site.siteMetadata.defaultLang}
          currentLang={data.allMetaData.edges[0].node.currentLang}
        />
        <div css={wrapperStyles}>
          {children}
          <footer css={footerStyles}>
            <div>
              <h3>Vías de Contacto</h3>
              <div
                css={{
                  border: '1px solid black',
                  padding: '1rem',
                  margin: '1rem 0',
                  borderRadius: '3px',
                }}
              >
                <b>!!! Atención:</b> Mi disponibilidad para trabajar en estos
                momentos es limitada a las tardes, estoy cursando unos estudios
                por la mañana. Gracias.
              </div>
              <Social />
            </div>
            <p css={footerLicenseStyles}>
              licenses:{' '}
              <a
                href="http://www.freepik.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Background by Harryarts / Freepik
              </a>
            </p>
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  pageUniqueId: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
}

export default Layout

export const Fragments = graphql`
  fragment SiteMetadata on Site {
    siteMetadata {
      defaultLang
      domainUrl
    }
  }
  fragment MetaData on MetaDataConnection {
    edges {
      node {
        title
        shortTitle
        currentLang
      }
    }
  }
`
