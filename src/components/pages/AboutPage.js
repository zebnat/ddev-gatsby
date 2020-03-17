import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

import Header from '../../components/Header'
import Bio from '../../components/Bio'
import CategoryButton from '../CategoryButton'
import { linkToSection } from '../../utils/links'

import translation from '../../../data/translations/aboutPage'

import p1 from '../../../data/images/about/p1.jpg'
import p2 from '../../../data/images/about/p2.jpg'
import p7 from '../../../data/images/about/p7.jpg'
import p8 from '../../../data/images/about/p8.jpg'
import p10 from '../../../data/images/about/p10.jpg'

const photoSelection = [p1, p8, p2, p10]

// photos in correct order of display, we need reverse to avoid unnecesary zIndex styling :)
const photos = photoSelection.reverse()

const AboutPage = props => {
  const linkOpts = {
    allMenuData: props.data.allMenu,
    defaultLang: props.data.site.siteMetadata.defaultLang,
  }
  const homeLink = linkToSection({ sectionId: 'home', ...linkOpts })

  return (
    <>
      <Helmet>
        <title>{translation[props.lang].title} - Daniel Domínguez</title>
      </Helmet>

      <Header h1={translation[props.lang].h1} h2={translation[props.lang].h2} />
      <Bio
        photos={photos}
        quote={'“' + translation[props.lang].bioquote + '”'}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: translation[props.lang].intro1,
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: translation[props.lang].lifestyle,
        }}
      />
      <h3
        dangerouslySetInnerHTML={{
          __html: translation[props.lang].howiam,
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: translation[props.lang].howiam_reply,
        }}
      />
      <h3
        dangerouslySetInnerHTML={{
          __html: translation[props.lang].hobbies_t,
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: translation[props.lang].hobbies,
        }}
      />
      <h3
        id="history"
        dangerouslySetInnerHTML={{
          __html: translation[props.lang].history_title,
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
      ].map(e => (
        <p
          key={e}
          dangerouslySetInnerHTML={{
            __html: translation[props.lang][e],
          }}
        />
      ))}

      <h3>{translation[props.lang].rng_title}</h3>
      <h4>{translation[props.lang].rng_q1}</h4>
      <p>{translation[props.lang].rng_r1}</p>

      <h4>{translation[props.lang].rng_q2}</h4>
      <p>{translation[props.lang].rng_r2}</p>

      <h4>{translation[props.lang].rng_q3}</h4>
      <p>{translation[props.lang].rng_r3}</p>

      <div css={{ textAlign: 'center', margin: '3rem 0' }}>
        <CategoryButton route={homeLink} inside gatsbyLink name="HOME" />
      </div>
    </>
  )
}

export default AboutPage
