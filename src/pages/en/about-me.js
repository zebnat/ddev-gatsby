import React from 'react'
import About from '../../components/pages/AboutPage'

import { graphql } from "gatsby"

const Page = ({data}) => (
	<About data={data} lang={data.allMetaData.edges[0].node.currentLang}/>
)

export default Page
export const query = graphql`
query enabout($currentLang: String!) {
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