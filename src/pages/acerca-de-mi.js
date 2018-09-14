import React from 'react'
import About from '../components/pages/AboutPage'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const Page = ({ data }) => (
  <Layout data={data} pageUniqueId="about">
    <About data={data} lang={data.allMetaData.edges[0].node.currentLang} />
  </Layout>
)

export default Page
export const query = graphql`
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
`
