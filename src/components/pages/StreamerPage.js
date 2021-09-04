import React from 'react'
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet'

import Header from '../../components/Header'
import StreamCard from '../../components/StreamCard'
import CategoryButton from '../CategoryButton'
import { linkToSection } from '../../utils/links'

import translation from '../../../data/translations/streamerPage'



const StreamerPage = props => {
  const { lang, data } = props

  const linkOpts = {
    allMenuData: data.allMenu,
    defaultLang: data.site.siteMetadata.defaultLang,
  }
  const homeLink = linkToSection({ sectionId: 'home', ...linkOpts })

  return (
    <>
      <Helmet>
        <title>Zebnat - Twitch Streamer</title>
      </Helmet>

      <Header h1={translation[lang].h1} h2={translation[lang].h2} />
      <StreamCard lang={lang} />

      <p
        dangerouslySetInnerHTML={{
          __html: translation[lang].intro1,
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: translation[lang].intro2,
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: translation[lang].intro3,
        }}
      />
      <div css={{ textAlign: 'center', margin: '3rem 0' }}>
        <CategoryButton route={homeLink} inside gatsbyLink name="HOME" />
      </div>
    </>
  )
}

StreamerPage.propTypes = {
  lang: PropTypes.string.isRequired,
  data: PropTypes.shape({
    allMenu: PropTypes.object,
    site: PropTypes.object
  }).isRequired
}

export default StreamerPage
