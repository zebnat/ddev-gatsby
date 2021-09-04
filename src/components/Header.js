import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Header = props => {
  const { h1, h2, home, quote } = props

  var [homeStyle, setHomeStyle] = useState({
    display: 'flex',
    marginTop: '-40px',
    height: '95vh',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'height 2s'
  });

  var [h1Anim, setH1Anim] = useState({
    opacity: 0,
    transition: 'all 2.5s',
  })
  var [h2Anim, setH2Anim] = useState({
    opacity: 0,
    transition: 'all 2.5s',
  })
  var [quoteAnim, setQuoteAnim] = useState({
    opacity: 0,
    display: 'inline-block',
    overflow: 'hidden',
    borderRight: '.12em solid orange',
    whiteSpace: 'nowrap',
    margin: '0 auto'
  })
  useEffect(() => {
    setTimeout(() => {
      setH1Anim(prev => {
        let cloned = { ...prev }
        return Object.assign(cloned, { opacity: 100 })
      })
    }, 500)
    setTimeout(() => {
      setH2Anim(prev => {
        let cloned = { ...prev }
        return Object.assign(cloned, { opacity: 100 })
      })
    }, 2000)
    setTimeout(() => {
      setQuoteAnim(prev => {
        let cloned = { ...prev }
        return Object.assign(cloned, { opacity: 100,  animation: 'typing 3.5s steps(40,end), blink-caret .75s step-end infinite'})
      })
    }, 4000)
    setTimeout(() => {
      setHomeStyle(prev => {
        let cloned = { ...prev }
        return Object.assign(cloned, { height: '60vh' })
      })
    }, 7000)
  }, [])
  if (home) {



  } else {
    var defaultStyle = {
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
    }
  }
  return (
    <header css={home ? homeStyle : defaultStyle}>
      <h1 style={home ? h1Anim : null}>{h1}</h1>
      <h2 style={home ? h2Anim : null}>{h2}</h2>
      {quote ? (
        <div>
          <div style={home ? quoteAnim : null}>
              <em>“{quote}”</em>
          </div>
        </div>
      ) : (
        ''
      )}
    </header>
  )
}

Header.propTypes = {
  h1: PropTypes.string.isRequired,
  h2: PropTypes.string.isRequired,
  home: PropTypes.bool,
  quote: PropTypes.string
}
export default Header
