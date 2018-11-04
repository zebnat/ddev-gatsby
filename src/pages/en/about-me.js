import React from 'react'
import About from '../../components/pages/AboutPage'
import Layout from '../../components/layout'
import { StaticQuery, graphql } from 'gatsby'

const Page = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          ...SiteMetadata
        }
        allMetaData(filter: { currentLang: { eq: "en" } }) {
          ...MetaData
        }
        allMenu(filter: { lang: { eq: "en" } }) {
          ...Menu
        }
      }
    `}
    render={data => (
      <Layout data={data} pageUniqueId="about">
        <About data={data} lang={data.allMetaData.edges[0].node.currentLang} />
      </Layout>
    )}
  />
)

export default Page
