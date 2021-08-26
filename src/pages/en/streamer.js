import React from 'react'
import StreamerPage from '../../components/pages/StreamerPage'
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
      <Layout data={data} pageUniqueId="streamer">
        <StreamerPage data={data} lang={data.allMetaData.edges[0].node.currentLang} />
      </Layout>
    )}
  />
)

export default Page
