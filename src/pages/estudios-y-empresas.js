import React from 'react'

import Layout from '../components/layout'
import Header from '../components/Header'
import { StaticQuery, graphql } from 'gatsby'

const Curriculum = () => (
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
      <Layout data={data} pageUniqueId="resume">
        <Header
          h1={'Mi carrera, estudios, empresas...'}
          h2={'Conoce donde he trabajado y mi nivel académico'}
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
        <p>
          Proin tempus, ex quis dignissim tincidunt, lectus lectus semper lacus,
          in sagittis purus purus sed nibh. In hac habitasse platea dictumst.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Donec convallis placerat turpis, vel blandit
          dui. Curabitur eu dapibus lectus. In quis tempus dolor. Donec
          efficitur, tortor a facilisis egestas, neque erat tincidunt nisi, id
          dapibus massa elit et ante. Cras rutrum leo sed mattis accumsan. Sed
          ac venenatis augue. Maecenas mollis velit vitae mi pulvinar elementum.
        </p>
      </Layout>
    )}
  />
)

export default Curriculum
