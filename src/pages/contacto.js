import React from 'react'

import Layout from '../components/layout'
import Header from '../components/Header'
import { StaticQuery, graphql } from 'gatsby'

const Contact = () => (
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
      <Layout data={data} pageUniqueId="contact">
        <Header
          h1={'Ponte en contacto'}
          h2={'Formulario de contacto y otros datos'}
        />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          bibendum nunc diam. Pellentesque malesuada velit in nisl venenatis
          consequat. Aliquam pharetra massa nisl, eget dignissim turpis lacinia
          nec. Morbi quis rhoncus arcu. Pellentesque eleifend, urna nec
          hendrerit lobortis, sem ipsum imperdiet purus, dapibus molestie sem
          ipsum vel leo. Vestibulum hendrerit fringilla ipsum id dictum. Mauris
          vel erat accumsan, mattis erat at, lobortis odio. Phasellus in dolor
          bibendum, placerat velit vel, feugiat justo. Morbi hendrerit a purus
          sit amet congue. Nulla gravida dignissim velit vitae ultrices. Integer
          euismod dignissim lectus nec posuere. Suspendisse potenti. Nam a
          aliquam magna.
        </p>
      </Layout>
    )}
  />
)

export default Contact
