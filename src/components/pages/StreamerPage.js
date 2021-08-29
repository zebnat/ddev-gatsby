import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

import Header from '../../components/Header'
import StreamCard from '../../components/StreamCard'
import CategoryButton from '../CategoryButton'
import { linkToSection } from '../../utils/links'

import translation from '../../../data/translations/streamerPage'



const StreamerPage = props => {
  const linkOpts = {
    allMenuData: props.data.allMenu,
    defaultLang: props.data.site.siteMetadata.defaultLang,
  }
  const homeLink = linkToSection({ sectionId: 'home', ...linkOpts })

  return (
    <>
      <Helmet>
        <title>Zebnat - Twitch Streamer</title>
      </Helmet>

      <Header h1={translation[props.lang].h1} h2={translation[props.lang].h2} />
      <StreamCard lang={props.lang} />

      <p
        dangerouslySetInnerHTML={{
          __html: translation[props.lang].intro1,
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: translation[props.lang].intro2,
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: translation[props.lang].intro3,
        }}
      />
      <div css={{ textAlign: 'center', margin: '3rem 0' }}>
        <CategoryButton route={homeLink} inside gatsbyLink name="HOME" />
      </div>
    </>
  )
}

export default StreamerPage
