import React from 'react'
import Header from '../../components/Header'
import { Helmet } from 'react-helmet'
import translation from '../../../data/translations/projectsPage'
import { linkToSection } from '../../utils/links'
import CategoryButton from '../CategoryButton'
import ContentCardList from '../ContentCardList'

const ProjectsPage = props => {
  const linkOpts = {
    allMenuData: props.data.allMenu,
    defaultLang: props.data.site.siteMetadata.defaultLang,
  }
  const homeLink = linkToSection({ sectionId: 'home', ...linkOpts })
  return (
    <>
      <Helmet>
        <html lang={props.lang} />
        <title>{translation[props.lang].title}</title>
      </Helmet>
      <Header h1={translation[props.lang].h1} h2={translation[props.lang].h2} />
      <p>{translation[props.lang].summary}</p>
      {
        <ContentCardList
          readMoreText={translation[props.lang].readmore}
          markDownContent={props.data.allMarkdownRemark.edges}
        />
      }
      <CategoryButton gatsbyLink route={homeLink} name="HOME" />
    </>
  )
}

export default ProjectsPage
