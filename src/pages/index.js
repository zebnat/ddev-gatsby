import React from 'react'
import HomePage from '../components/pages/HomePage'
import { graphql } from "gatsby"

const Page = ({data}) => (
	<HomePage data={data} lang={data.allMetaData.edges[0].node.currentLang}/>
)

export default Page
export const query = graphql`
query esindex($currentLang: String!) {
	site{
    siteMetadata {
      defaultLang
    }
  }
	allMetaData (filter: {currentLang: {eq : $currentLang}}) {
	  edges {
	    node {
	      title
        shortTitle
        currentLang
	    }
	  }
	}
	allMenu (filter: {lang: {eq : $currentLang}}){
		edges {
			node {
				uniqueId
				icon
				text
				route
				lang
			}
		}
	}
}
`