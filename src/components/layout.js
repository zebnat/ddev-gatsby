import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import Menu from './Menu'
import TopBar from './TopBar'
import HrefLanger from './HrefLanger'

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


const Layout = ({ hrefLangs, currentLang, children, data }) => (

      <>
        <Helmet>
					<html lang={currentLang} />
					{
						hrefLangs.map((v,i) => 
						<link key={i} rel="alternate" hreflang={v.lang} href={'https://www.danieldev.es' + (v.lang === data.site.siteMetadata.defaultLang ? v.url : '/'+v.lang+v.url)} />
						)
					}
        </Helmet>
				<Menu menuList={data.allMenu.edges} currentLang={currentLang} defaultLang={data.site.siteMetadata.defaultLang} />
				<TopBar languages={hrefLangs} defaultLang={data.site.siteMetadata.defaultLang} currentLang={currentLang}/>
				<div 	
					css={wrapperStyles}
				>
          {children}
        </div>
      </>
		
)


export default Layout
