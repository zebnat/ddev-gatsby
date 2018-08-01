import React from 'react'
import HomePage from '../../components/pages/HomePage'
import { graphql } from "gatsby"
import Layout from '../../components/layout'

const Page = ({data}) => (
	<Layout data={data} pageUniqueId="home">
		<HomePage data={data} lang={data.allMetaData.edges[0].node.currentLang} />
	</Layout>
)

export default Page
export const query = graphql`
query {
	site{
		...SiteMetadata
  }
	allMetaData (filter: {currentLang: {eq : "en"}}) {
	  ...MetaData
	}
	allMenu (filter: {lang: {eq : "en"}}) {
		...Menu
	}
}
`