import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import TagList from './TagList'

const ContentCard = props => {
  const { date, title, description, path, tags, readMoreText } = props
  return (
    <div
      css={{
        border: '1px solid #a7a7a7',
        margin: '2rem 2rem',
        borderRadius: 2,
        boxShadow: '1px 1px 8px #909090',
        '@media(max-width: 560px)': {
          margin: '2rem 1rem',
        },
      }}
    >
      <div css={{ margin: '1rem' }}>
        <div css={{ color: '#444', fontSize: '75%', textAlign: 'right' }}>
          {date}
        </div>
        <Link css={{ fontSize: '120%' }} to={path}>
          {title}
        </Link>
      </div>

      <div
        css={{
          padding: '1rem',
          background: '#3b6cc5',
          color: '#fff',
          fontSize: '90%',
          textAlign: 'left',
        }}
      >
        <div>{description}</div>
        <TagList tags={tags} />

        <div css={{ textAlign: 'right' }}>
          <Link css={{ color: '#fff', textTransform: 'uppercase' }} to={path}>
            {readMoreText}
          </Link>
        </div>
      </div>
    </div>
  )
}

ContentCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  readMoreText: PropTypes.string.isRequired,
}

export default ContentCard
