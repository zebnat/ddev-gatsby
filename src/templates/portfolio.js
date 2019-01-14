import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import hreflangparser from '../utils/hreflangs'
import { linkToSection } from '../utils/links'
import CategoryButton from '../components/CategoryButton'
import translations from '../../data/translations/projectPage'
import { Helmet } from 'react-helmet'
import TagList from '../components/TagList'

/**
 * THIS TEMPLATE IS USED FOR HANDLING PORTFOLIO CONTENT (MARKDOWN FILES)
 */
export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const hrefLangs = hreflangparser(data.markdownRemark.frontmatter.hreflangs)

  const linkOpts = {
    allMenuData: data.allMenu,
    defaultLang: data.site.siteMetadata.defaultLang,
  }
  const projectsLink = linkToSection({ sectionId: 'project', ...linkOpts })

  function PrivateDisclaimer(props) {
    if (props.tags.indexOf('private-project')) {
      return (
        <div
          css={{ border: '4px double #ff6c00', padding: 20, fontSize: '80%' }}
        >
          {translations[props.lang].privateDisclaimer}
        </div>
      )
    }
  }

  return (
    <Layout data={data} hrefLangs={hrefLangs} pageUniqueId="project">
      <Helmet>
        <html lang={frontmatter.lang} />
        <title>{frontmatter.title}</title>
      </Helmet>
      <div>
        <div css={{ textAlign: 'right', fontSize: '80%', fontWeight: 'bold' }}>
          {frontmatter.date}
        </div>
        <div
          css={{ '>h1,>h2,>h3,>h4': { color: '#404040' } }}
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <PrivateDisclaimer tags={frontmatter.tags} lang={frontmatter.lang} />
        <TagList tags={frontmatter.tags} />
        <CategoryButton
          gatsbyLink
          route={projectsLink}
          name={translations[frontmatter.lang].projectPage}
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
        tags
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
