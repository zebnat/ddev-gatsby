import React from 'react'
import HomePage from '../components/pages/HomePage'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'

const Page = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          ...SiteMetadata
        }
        allMetaData(filter: { currentLang: { eq: "es" } }) {
          ...MetaData
        }
        allMenu(filter: { lang: { eq: "es" } }) {
          ...Menu
        }
      }
    `}
    render={data => (
      <Layout data={data} pageUniqueId="home">
        <HomePage
          data={data}
          lang={data.allMetaData.edges[0].node.currentLang}
        />
      </Layout>
    )}
  />
)

export default Page
