import React from 'react'
import PropTypes from 'prop-types'
import ContentCard from './ContentCard'

const ContentCardList = props => {
  const { readMoreText, markDownContent } = props

  const content =
    markDownContent.length > 0
      ? markDownContent.map((e, i) => (
          <li key={i}>
            <ContentCard {...e.node.frontmatter} readMoreText={readMoreText} />
          </li>
        ))
      : 'No content available'

  return (
    <ol css={{ margin: 0, '>li': { listStyleType: 'none' } }}>{content}</ol>
  )
}

ContentCardList.propTypes = {
  readMoreText: PropTypes.string.isRequired,
  markDownContent: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default ContentCardList
