import React from 'react'
import PropTypes from 'prop-types'

const TagList = props => {
  return (
    <ul
      css={{
        listStyle: 'none',
        margin: '1rem 0',
        '>li': {
          display: 'inline-block',
          fontSize: '80%',
          background: '#e8eaef',
          marginRight: '0.5rem',
          color: '#292929',
          borderRadius: 2,
          padding: '2px 3px',
        },
      }}
    >
      {props.tags.map((e, i) => (
        <li key={i}>{e}</li>
      ))}
    </ul>
  )
}

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
}

export default TagList
