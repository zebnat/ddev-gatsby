import React from 'react'
import PropTypes from 'prop-types'
import ContentCard from './ContentCard'

const ContentCardList = props => {
  const { readMoreText, markDownContent, filterTag } = props

  var content = []

  if (filterTag.length > 0) {
    content = markDownContent.filter(e =>
      e.node.frontmatter.tags.includes(filterTag)
    )
  } else {
    content = markDownContent
  }

  const filteredContent =
    content.length > 0
      ? content.map((e, i) => (
          <li key={i}>
            <ContentCard {...e.node.frontmatter} readMoreText={readMoreText} />
          </li>
        ))
      : 'No content available'

  return (
    <>
      <div css={{ padding: '2rem 0' }}>
        <p
          css={{
            color: '#fff',
            background: '#2151a7',
            padding: 10,
            textAlign: 'center',
          }}
        >
          {props.totalProjectsText} {content.length}
        </p>
        <ol css={{ margin: 0, '>li': { listStyleType: 'none' } }}>
          {filteredContent}
        </ol>
      </div>
    </>
  )
}

ContentCardList.propTypes = {
  readMoreText: PropTypes.string.isRequired,
  totalProjectsText: PropTypes.string.isRequired,
  markDownContent: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterTag: PropTypes.string.isRequired,
}
export default ContentCardList
