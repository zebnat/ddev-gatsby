import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Menu from './Menu'
import TopBar from './TopBar'
import Footer from './Footer'

import './layout.css'

const Layout = ({ pageUniqueId, children, data, hrefLangs }) => {
  if (hrefLangs === undefined) {
    hrefLangs = data.allMenu.edges.find(el => el.node.uniqueId === pageUniqueId)
      .node.hrefLangs
  }

  const currentLang = data.allMetaData.edges[0].node.currentLang

  return (
    <>
      <Helmet>
        <html lang={currentLang} />
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
          currentLang={currentLang}
          defaultLang={data.site.siteMetadata.defaultLang}
        />
        <TopBar
          languages={hrefLangs}
          defaultLang={data.site.siteMetadata.defaultLang}
          currentLang={currentLang}
        />
        <div css={wrapperStyles}>
          {children}
          <Footer lang={currentLang} />
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

// COMPONENT STYLES
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
  paddingTop: 40,
  '@media(min-width: 1300px)': {
    background: '#f8f8f8 url("/bg-2.jpg") no-repeat bottom right',
    backgroundAttachment: 'fixed',
  },
}
