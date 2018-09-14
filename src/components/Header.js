import React from 'react'

const Header = props => (
  <header
    css={{
      padding: `100px auto 2rem auto`,
      '@media(max-height: 500px)': {
        '@media(max-width: 420px)': {
          paddingTop: '5px',
        },
        '@media(min-width: 421px)': {
          paddingTop: '15px',
        },
      },
      '@media(min-height: 501px)': {
        '@media(max-width: 420px)': {
          paddingTop: '5px',
        },
        '@media(min-width: 421px)': {
          paddingTop: '15px',
        },
      },
      maxWidth: 600,
    }}
  >
    <h1>{props.h1}</h1>
    <h2>{props.h2}</h2>
    {props.quote ? (
      <div>
        <blockquote>
          <em>“{props.quote}”</em>
        </blockquote>
      </div>
    ) : (
      ''
    )}
  </header>
)

export default Header
