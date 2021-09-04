import React from 'react'
import PropTypes from 'prop-types'

const TagList = props => {
  const { tags } = props

  return (
    <ul
      css={{
        listStyle: 'none',
        margin: '1rem 0',
        '>li': {
          display: 'inline-block',
          fontSize: '90%',
          fontWeight: 'bold',
          background: '#ecf3ff',
          marginRight: '0.5rem',
          color: '#001e54',
          borderRadius: 2,
          padding: '2px 3px',
          fontFamily: 'monospace',
        },
      }}
    >
      {tags.map((e, i) => (
        <li key={i}>{e}</li>
      ))}
    </ul>
  )
}

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
}

export default TagList
