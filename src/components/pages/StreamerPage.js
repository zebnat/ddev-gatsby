import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

import Header from '../../components/Header'
import Bio from '../../components/Bio'
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
      <div css={{textAlign:"center", background: "#6441A4", margin: 5, padding: 15, color: "#fff", lineHeight: "2em", borderRadius: 50}}>
        <div css={{color: "#fff298", fontSize: "1.4em"}} dangerouslySetInnerHTML={{__html: translation[props.lang].isLive}}></div>
        <a href="https://www.twitch.tv/zebnat"><img src="https://i.imgur.com/bdslfey.png" /></a><br/>
        <a dangerouslySetInnerHTML={{__html: translation[props.lang].visitStream}} css={{color: "#fff", padding: "2px 4px", background: "#a07dde", borderRadius: 3, textDecoration: "none"}} href="https://www.twitch.tv/zebnat"></a><br/>
          <div css={{textAlign: "left", lineHeight: "1em"}}>
              <span css={{fontSize: "80%"}}>[✓] 20 <span dangerouslySetInnerHTML={{__html: translation[props.lang].visits}}></span> ⇨ <span dangerouslySetInnerHTML={{__html: translation[props.lang].done}}></span></span><br/>
              <span css={{fontSize: "80%"}}>[✓] 40 <span dangerouslySetInnerHTML={{__html: translation[props.lang].visits}}></span> ⇨ <span dangerouslySetInnerHTML={{__html: translation[props.lang].done}}></span></span><br/>
              <span css={{fontSize: "80%"}}>[✖] 60 <span dangerouslySetInnerHTML={{__html: translation[props.lang].visits}}></span> ⇨ <span dangerouslySetInnerHTML={{__html: translation[props.lang].reachable}}></span></span><br/>
              <span css={{fontSize: "80%"}}>[✖] 80 <span dangerouslySetInnerHTML={{__html: translation[props.lang].visits}}></span> ⇨ <span dangerouslySetInnerHTML={{__html: translation[props.lang].newModerator}}></span></span><br/>
              <span css={{fontSize: "80%"}}>[✖] 100 <span dangerouslySetInnerHTML={{__html: translation[props.lang].visits}}></span> ⇨ <span dangerouslySetInnerHTML={{__html: translation[props.lang].newArt}}></span></span><br/>
          </div>                        
      </div>

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
