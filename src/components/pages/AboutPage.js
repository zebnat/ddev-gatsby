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

const photoSelection = [p2, p1, p7, p8, p10]

// photos in correct order of display, we need reverse to avoid unnecesary zIndex styling :)
const photos = photoSelection.reverse()

const AboutPage = props => {
  const linkOpts = {
    allMenuData: props.data.allMenu,
    defaultLang: props.data.site.siteMetadata.defaultLang,
  }
  const homeLink = linkToSection({ sectionId: 'home', ...linkOpts })

  const timesTrolling = 2
  const [kamina, setKamina] = useState(0)

  const openKaminaGod = () => {
    setKamina(kamina + 1)
  }

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

      <h3>Random</h3>
      <ul>
        <li>
          <b>{translation[props.lang].rng_desktop}</b>: Intel, Nvidia, Windows
          10
        </li>
        <li>
          <b>{translation[props.lang].rng_key}</b>: Logitech K120
        </li>
        <li>
          <b>{translation[props.lang].rng_lap}</b>: Thinkpad + Linux (Arch)
        </li>
        <li>
          <b>Monitor</b>: Dual monitor 24'
        </li>
        <li>
          <b>Editor</b>: Visual Studio Code, VIM
        </li>
        <li>
          <b>{translation[props.lang].rng_lan}</b>: PHP7, C#, Typescript
        </li>
        <li>
          <b>Spaces or tabs?</b>: Autoformat, PSR / standards, Prettier
        </li>
        <li>
          <b>Static types or Dynamic?</b>: Static strong types 😈
        </li>
        <li>
          <b>Dark theme or Light?</b>: Both
        </li>
        <li>
          <b>{translation[props.lang].rng_mov}</b>: Interstellar
        </li>
        <li>
          <b>Anime</b>: Death note
        </li>
        <li>
          <b>{translation[props.lang].rng_gam}</b>: Final Fantasy XI
        </li>
        <li>
          <b>{translation[props.lang].rng_son}</b>:{' '}
          <button onClick={openKaminaGod}>
            {kamina > timesTrolling ? `😜😜😜` : `?`.repeat(kamina + 1)}
          </button>
        </li>
      </ul>
      {kamina > timesTrolling && (
        <div>
          <iframe
            title="[AMV] - Fight The Power!! (Tengen Toppa Gurren Lagann) - YouTube"
            width="100%"
            height="360"
            autoPlay={true}
            src="https://www.youtube.com/embed/inPAZnJ4EXc?start=29"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <div css={{ textAlign: 'center', margin: '3rem 0' }}>
        <CategoryButton route={homeLink} inside gatsbyLink name="HOME" />
      </div>
    </>
  )
}

export default AboutPage
