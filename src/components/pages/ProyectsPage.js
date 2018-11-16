import React from 'react'
import Header from '../../components/Header'
import { Helmet } from 'react-helmet'
import translation from '../../../data/translations/proyectsPage'
import { linkToSection } from '../../utils/links'
import CategoryButton from '../CategoryButton'
import { Link } from 'gatsby'

const ProyectsPage = props => {
	const linkOpts = {allMenuData: props.data.allMenu, defaultLang: props.data.site.siteMetadata.defaultLang};
	const homeLink = linkToSection({sectionId: 'home', ...linkOpts})
  return (
    <>
      <Helmet>
        <html lang={props.lang} />
        <title>{translation[props.lang].title}</title>
      </Helmet>
      <Header h1={translation[props.lang].h1} h2={translation[props.lang].h2} />
      <p css={{ color: 'red' }}>{translation[props.lang].attention}</p>
      <ol>
        {props.data.allMarkdownRemark.edges.map(e => (
          <li key={e.node.frontmatter.path}>
            <Link to={e.node.frontmatter.path}>{e.node.frontmatter.title}</Link>
            <span css={{ marginLeft: '1rem', fontSize: '80%' }}>
              {e.node.frontmatter.date}
            </span>
          </li>
        ))}
      </ol>
      <CategoryButton gatsbyLink route={homeLink} name="HOME" />
    </>
  )
}

export default ProyectsPage
