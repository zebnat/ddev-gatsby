import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Menu from './Menu'
import TopBar from './TopBar'

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
  fontSize: '50%',
  color: '#666',
  margin: '10rem 0 0 0',
}

const Layout = ({ pageUniqueId, children, data }) => {
  const hrefLangs = data.allMenu.edges.find(
    el => el.node.uniqueId === pageUniqueId
  ).node.hrefLangs
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
            licenses:{' '}
            <a
              href="http://www.freepik.com"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Background by Harryarts / Freepik
            </a>
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
