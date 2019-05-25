import React from 'react'
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

const photoSelection = [p2, p1, p7, p8, p10];

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
      <p
        dangerouslySetInnerHTML={{
          __html: translation[props.lang].hobbies,
        }}
      />
      <h3
        dangerouslySetInnerHTML={{
          __html: translation[props.lang].history_title,
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: translation[props.lang].history_brief,
        }}
      />
      <h4
        dangerouslySetInnerHTML={{
          __html: translation[props.lang].child_title,
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: translation[props.lang].child_history,
        }}
      />
      <h4
        dangerouslySetInnerHTML={{
          __html: translation[props.lang].teen_title,
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: translation[props.lang].teen_1,
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: translation[props.lang].teen_2,
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: translation[props.lang].teen_3,
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: translation[props.lang].teen_4,
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: translation[props.lang].teen_5,
        }}
      />
      <h4
        dangerouslySetInnerHTML={{
          __html: translation[props.lang].hard_road_title,
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: translation[props.lang].difficulties_1,
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: translation[props.lang].difficulties_2,
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: translation[props.lang].difficulties_3,
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: translation[props.lang].difficulties_4,
        }}
      />
      <h4
        dangerouslySetInnerHTML={{
          __html: translation[props.lang].working_as_dev_title,
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: translation[props.lang].developer_1,
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: translation[props.lang].developer_2,
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: translation[props.lang].developer_3,
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: translation[props.lang].developer_4,
        }}
      />
      <div css={{ textAlign: 'center', margin: '3rem 0' }}>
        <CategoryButton route={homeLink} inside gatsbyLink name="HOME" />
      </div>
    </>
  )
}

export default AboutPage
