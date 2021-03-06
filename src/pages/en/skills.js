import React from 'react'
import Layout from '../../components/layout'
import { StaticQuery, graphql } from 'gatsby'

import SkillsPage from '../../components/pages/SkillsPage'
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
      <Layout data={data} pageUniqueId="tech">
        <SkillsPage
          data={data}
          lang={data.allMetaData.edges[0].node.currentLang}
        />
      </Layout>
    )}
  />
)

export default Page
