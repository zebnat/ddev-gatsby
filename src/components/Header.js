import React, { useState, useEffect } from 'react'

const Header = props => {
  if (props.home) {
    var homeStyle = {
      display: 'flex',
      marginTop: '-40px',
      height: '100vh',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }

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
      transition: 'all 2.5s',
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
          return Object.assign(cloned, { opacity: 100 })
        })
      }, 4000)
    }, [])
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
    <header css={props.home ? homeStyle : defaultStyle}>
      <h1 style={props.home ? h1Anim : null}>{props.h1}</h1>
      <h2 style={props.home ? h2Anim : null}>{props.h2}</h2>
      {props.quote ? (
        <div style={props.home ? quoteAnim : null}>
          <blockquote>
            <em>“{props.quote}”</em>
          </blockquote>
        </div>
      ) : (
        ''
      )}
    </header>
  )
}

export default Header
