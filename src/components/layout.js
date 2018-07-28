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
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
						title
						shortTitle
						defaultLang
						menuList {
							lang
							list {
								icon
								text
								route
							}
						}
          }
        }
      }
    `}
    render={data => {
			const menuList = data.site.siteMetadata.menuList.filter(function(o){
				return o.lang === currentLang;
			});
			
			// @todo remove this crap when every page component returns properly Layout data
			if(menuList[0] == undefined){
				menuList.push(
					{list : 
						[
							{
								icon: 'home',
								text: 'Inicio',
								route: '/'
							},
							{
								icon: 'face',
								text: 'Conóceme',
								route: '/acerca-de-mi/'
							}
						]
					}
				)
			}

			return (
      <>
        <Helmet>
					<html lang={currentLang} />
					{
						hrefLangs.map((v,i) => 
						<link rel="alternate" hreflang={v.lang} href={'https://www.danieldev.es' + (v.lang === data.site.siteMetadata.defaultLang ? v.url : '/'+v.lang+v.url)} />
						)
					}
        </Helmet>
				<Menu menuList={menuList[0].list} currentLang={currentLang} defaultLang={data.site.siteMetadata.defaultLang} />
				<TopBar languages={hrefLangs} defaultLang={data.site.siteMetadata.defaultLang} currentLang={currentLang}/>
				<div 
					css={wrapperStyles}
				>
          {children}
        </div>
      </>
			)}}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
