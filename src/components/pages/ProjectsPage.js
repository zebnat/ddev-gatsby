import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Header from '../../components/Header'
import { Helmet } from 'react-helmet'
import translation from '../../../data/translations/projectsPage'
import { linkToSection } from '../../utils/links'
import CategoryButton from '../CategoryButton'
import ContentCardList from '../ContentCardList'
import TagFilter from '../TagFilter'

const ProjectsPage = props => {
  const { lang, data } = props

  const linkOpts = {
    allMenuData: data.allMenu,
    defaultLang: data.site.siteMetadata.defaultLang,
  }
  const homeLink = linkToSection({ sectionId: 'home', ...linkOpts })

  const [selectedTag, setSelectedTag] = useState('')

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{translation[lang].title}</title>
      </Helmet>
      <Header h1={translation[lang].h1} h2={translation[lang].h2} />
      <p>{translation[lang].summary}</p>
      <TagFilter
        filterText={translation[lang].filter}
        tags={data.allMarkdownRemark.edges.map(
          e => e.node.frontmatter.tags
        )}
        onChange={function(event) {
          setSelectedTag(event.target.value)
        }}
      />

      {
        <ContentCardList
          totalProjectsText={translation[lang].totalProjects}
          readMoreText={translation[lang].readmore}
          markDownContent={data.allMarkdownRemark.edges}
          filterTag={selectedTag}
        />
      }
      <CategoryButton gatsbyLink route={homeLink} name="HOME" />
    </>
  )
}

ProjectsPage.propTypes = {
  lang: PropTypes.string.isRequired,
  data: PropTypes.shape({
    allMenu: PropTypes.object,
    site: PropTypes.object
  }).isRequired
}

export default ProjectsPage
