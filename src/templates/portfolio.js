import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import hreflangparser from '../utils/hreflangs'

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const hrefLangs = hreflangparser(data.markdownRemark.frontmatter.hreflangs)

  return (
    <Layout data={data} hrefLangs={hrefLangs} pageUniqueId="proyect">
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!, $lang: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
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
