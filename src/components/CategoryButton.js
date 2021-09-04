import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'gatsby'

const CategoryButton = props => {
  const { gatsbyLink, inside, route, name } = props

  return (
    <div css={inside ? linkInside : null}>
      {gatsbyLink === true ? (
        <Link css={buttonStyling} to={route}>
          {name}
        </Link>
      ) : (
        <a
          css={buttonStyling}
          target="_blank"
          rel="noopener noreferrer"
          href={route}
        >
          {name}
        </a>
      )}
    </div>
  )
}

export default CategoryButton

CategoryButton.propTypes = {
  gatsbyLink: PropTypes.bool.isRequired,
  inside: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
}

// COMPONENT STYLES
const linkInside = {
  marginLeft: 15,
}

const buttonStyling = {
  fontFamily: 'Oswald, Helvetica, sans-serif',
  fontSize: '110%',
  color: '#1064d0',
  border: '1px solid #78a1d6',
  padding: '0.25rem 0.5rem',
  display: 'inline-block',
  borderRadius: '2px',
  margin: '15px 0',
  cursor: 'pointer',
  transition: '.3s',
  ':hover': {
    textDecoration: 'none',
    background: '#2d7bde',
    color: '#fff',
  },
  ':before': {
    content: '<',
    marginRight: 5,
  },
}
