import React from 'react'

import Layout from '../components/layout'
import Header from '../components/Header'
import { StaticQuery, graphql } from 'gatsby'

const Proyects = () => (
  <StaticQuery
    query={graphql`
      {
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
      <Layout data={data} pageUniqueId="proyect">
        <Header
          h1={'Proyectos que he realizado'}
          h2={'Profesionales, personales, de programación y SEO'}
        />

        <video
          src="/video/fishing-playing-demo.mp4"
          controls
          muted
          width="100%"
        />
        <br />
        <video
          src="/video/macrojuegos_general.mp4"
          controls
          muted
          width="100%"
        />
        <br />
        <video
          src="/video/spinwheel-code-demo.mp4"
          controls
          muted
          width="100%"
        />
        <br />
        <video src="/video/spinwheel-demo.mp4" controls muted width="100%" />
        <br />
        <video
          src="/video/unity-fishing-code-demo.mp4"
          controls
          muted
          width="100%"
        />
        <br />

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
        <p>
          Sed dignissim dolor nec convallis malesuada. Quisque tincidunt elit
          quis vehicula laoreet. Nunc ut convallis urna. Suspendisse congue
          consectetur risus, quis lacinia tellus tincidunt ac. Donec bibendum
          ligula massa. Praesent nec vestibulum augue. Morbi id pharetra turpis.
          Mauris cursus convallis dolor, sed blandit tortor bibendum a. In hac
          habitasse platea dictumst. Pellentesque dignissim rutrum pellentesque.
          Vestibulum enim sem, dignissim et ipsum sed, maximus blandit dolor.
          Donec porta, purus sit amet ullamcorper rhoncus, metus massa maximus
          ante, a tincidunt dolor nulla non ante. Suspendisse at justo
          facilisis, sagittis justo vitae, interdum est. Aliquam eu facilisis
          lacus. Mauris iaculis enim ac eleifend dapibus.
        </p>
      </Layout>
    )}
  />
)

export default Proyects
