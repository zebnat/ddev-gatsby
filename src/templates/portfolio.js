import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import hreflangparser from '../utils/hreflangs'
import { linkToSection } from '../utils/links'
import CategoryButton from '../components/CategoryButton'
import translations from '../../data/translations/proyectPage'
import { Helmet } from 'react-helmet'

/**
 * THIS TEMPLATE IS USED FOR HANDLING PORTFOLIO CONTENT (MARKDOWN FILES)
 */
export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const hrefLangs = hreflangparser(data.markdownRemark.frontmatter.hreflangs)

	const linkOpts = {allMenuData: data.allMenu, defaultLang: data.site.siteMetadata.defaultLang};
	const proyectsLink = linkToSection({sectionId: 'proyect', ...linkOpts})
  
  return (
    <Layout data={data} hrefLangs={hrefLangs} pageUniqueId="proyect">
      <Helmet>
        <html lang={frontmatter.lang} />
        <title>{translations[frontmatter.lang].title}</title>
      </Helmet>
      <div>
        <div css={{ textAlign: 'right', fontSize: '80%', fontWeight: 'bold' }}>
          {frontmatter.date}
        </div>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <CategoryButton
          gatsbyLink
          route={proyectsLink}
          name={translations[frontmatter.lang].proyectPage}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!, $lang: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD-MM-YYYY")
        path
        description
        title
        lang
        hreflangs
      }
    }
    site {
      ...SiteMetadata
    }
    allMetaData(filter: { currentLang: { eq: $lang } }) {
      ...MetaData
    }
    allMenu(filter: { lang: { eq: $lang } }) {
      ...Menu
    }
  }
`
