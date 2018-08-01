import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from "gatsby"

import Menu from './Menu'
import TopBar from './TopBar'

import './layout.css'

const wrapperStyles = { 
	maxWidth: 730, 
	margin: `50px auto`,
	padding: "0px 60px 14px 60px",
	borderRadius: 3,
	'@media(max-width: 420px)': {
		padding: "14px 10px 14px 60px"
	}
}


const Layout = ({ pageUniqueId, children, data }) => {
	const hrefLangs = data.allMenu.edges.find((el) => el.node.uniqueId === pageUniqueId).node.hrefLangs
	return (
      <>
        <Helmet>
					<html lang={data.allMetaData.edges[0].node.currentLang} />
					{
						hrefLangs.map((v,i) => 
						<link key={i} rel="alternate" hreflang={v.locale} href={data.site.siteMetadata.domainUrl + v.url} />
						)
					}
        </Helmet>
				<Menu menuList={data.allMenu.edges} currentLang={data.allMetaData.edges[0].node.currentLang} defaultLang={data.site.siteMetadata.defaultLang} />
				<TopBar languages={hrefLangs} defaultLang={data.site.siteMetadata.defaultLang} currentLang={data.allMetaData.edges[0].node.currentLang}/>
				<div 	
					css={wrapperStyles}
				>
          {children}
        </div>
      </>
	)
}

Layout.propTypes = {
	pageUniqueId: PropTypes.string.isRequired,
	data: PropTypes.object.isRequired
};

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
`;

