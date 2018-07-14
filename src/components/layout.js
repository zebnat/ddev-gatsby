import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import {menuList} from '../../data/config'

import Menu from './Menu'
import './layout.css'

const wrapperStyles = { 
	maxWidth: 730, 
	margin: `0px auto`,
	padding: "0px 60px 14px 60px",
	borderRadius: 3,
	'@media(max-width: 420px)': {
		padding: "14px 10px 14px 60px"
	}
}

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
						title
						shortTitle
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Página personal y portfolio de Daniel Domínguez, un desarrollador web fullstack con conocimientos SEO. Residiendo en Barcelona' },
          ]}
        />
				<Menu menuList={menuList}/>
				<div 
					css={wrapperStyles}
				>
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
