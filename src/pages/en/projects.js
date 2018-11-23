import React from 'react'
import Layout from '../../components/layout'
import { StaticQuery, graphql } from 'gatsby'
import ProjectsPage from '../../components/pages/ProjectsPage'

const Projects = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          ...SiteMetadata
        }
        allMetaData(filter: { currentLang: { eq: "en" } }) {
          ...MetaData
        }
        allMenu(filter: { lang: { eq: "en" } }) {
          ...Menu
        }
        allMarkdownRemark(
          filter: { frontmatter: { lang: { eq: "en" } } }
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                lang
                path
                tags
                date(formatString: "DD-MM-YYYY")
                description
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout data={data} pageUniqueId="project">
        <ProjectsPage
          data={data}
          lang={data.allMetaData.edges[0].node.currentLang}
        />
      </Layout>
    )}
  />
)

export default Projects
