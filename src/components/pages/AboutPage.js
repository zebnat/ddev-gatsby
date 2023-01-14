import React from 'react'
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet'

import Header from '../../components/Header'
import Bio from '../../components/Bio'
import CategoryButton from '../CategoryButton'
import { linkToSection } from '../../utils/links'

import translation from '../../../data/translations/aboutPage'

import p2 from '../../../data/images/about/p1002.jpg'
import p4 from '../../../data/images/about/p1004.jpg'
import p5 from '../../../data/images/about/p1005.jpg'


const photoSelection = [p4, p5, p2]


// photos in correct order of display, we need reverse to avoid unnecesary zIndex styling :)
const photos = photoSelection.reverse()

const AboutPage = props => {
  const {lang, data} = props

  const linkOpts = {
    allMenuData: data.allMenu,
    defaultLang: data.site.siteMetadata.defaultLang,
  }
  const homeLink = linkToSection({ sectionId: 'home', ...linkOpts })

  return (
    <>
      <Helmet>
        <title>{translation[lang].title} - Daniel Domínguez</title>
      </Helmet>

      <Header h1={translation[lang].h1} h2={translation[lang].h2} />
      <Bio
        photos={photos}
        quote={'“' + translation[lang].bioquote + '”'}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: translation[lang].intro1,
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: translation[lang].lifestyle,
        }}
      />
      <h3
        dangerouslySetInnerHTML={{
          __html: translation[lang].howiam,
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: translation[lang].howiam_reply,
        }}
      />
      <h3
        dangerouslySetInnerHTML={{
          __html: translation[lang].hobbies_t,
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: translation[lang].hobbies,
        }}
      />
      <h3
        id="history"
        dangerouslySetInnerHTML={{
          __html: translation[lang].history_title,
        }}
      />
      {[
        'history_1985',
        'history_1990',
        'history_1993',
        'history_1997',
        'history_1998',
        'history_2002',
        'history_2004',
        'history_2006',
        'history_2009',
        'history_2010',
        'history_2013',
        'history_2018',
        'history_2020',
        'history_2023',
      ].map(e => (
        <p
          key={e}
          dangerouslySetInnerHTML={{
            __html: translation[lang][e],
          }}
        />
      ))}

      <h3>{translation[lang].rng_title}</h3>
      <h4>{translation[lang].rng_q1}</h4>
      <p>{translation[lang].rng_r1}</p>

      <h4>{translation[lang].rng_q2}</h4>
      <p>{translation[lang].rng_r2}</p>

      <h4>{translation[lang].rng_q3}</h4>
      <p>{translation[lang].rng_r3}</p>

      <div css={{ textAlign: 'center', margin: '3rem 0' }}>
        <CategoryButton route={homeLink} inside gatsbyLink name="HOME" />
      </div>
    </>
  )
}

AboutPage.propTypes = {
  lang: PropTypes.string.isRequired,
  data: PropTypes.shape({
    allMenu: PropTypes.object,
    site: PropTypes.object
  }).isRequired
}
export default AboutPage
