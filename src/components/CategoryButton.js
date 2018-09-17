import React from 'react'
import Link from 'gatsby-link'

const linkInside = {
  marginLeft: 15,
}

const buttonStyling = {
  fontFamily: 'Oswald, Helvetica, sans-serif',
  fontSize: '110%',
  color: '#1064d0',
  border: '1px solid #1064d0',
  padding: '0.5rem 1rem',
  display: 'inline-block',
  borderRadius: '3px',
  margin: '15px 0',
  cursor: 'pointer',
  transition: '.3s',
  ':hover': {
    textDecoration: 'none',
    background: '#2d7bde',
    color: '#fff',
  },
  ':before': {
    content: '►',
    marginRight: 5,
  },
}

const CategoryButton = props => {
  return (
    <div css={props.inside ? linkInside : null}>
      {props.gatsbyLink === true ? (
        <Link css={buttonStyling} to={props.route}>
          {props.name}
        </Link>
      ) : (
        <a
          css={buttonStyling}
          target="_blank"
          rel="noopener noreferrer"
          href={props.route}
        >
          {props.name}
        </a>
      )}
    </div>
  )
}

export default CategoryButton
