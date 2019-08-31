import React from 'react'
import { Link } from 'gatsby'
import ReactSwipeEvents from 'react-swipe-events'
import { graphql } from 'gatsby'
import { linker } from '../utils/links'

import Social from './Social'

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: false }

    this.toggleVisibility = this.toggleVisibility.bind(this)
    this.onSwipedRight = this.onSwipedRight.bind(this)
    this.onSwipedLeft = this.onSwipedLeft.bind(this)
    this.isBigScreen = null
  }

  onSwipedRight(e, originalX, endX) {
    if (endX - originalX > 55) {
      if (this.state.visible === false) {
        this.toggleVisibility()
      }
    }
  }

  onSwipedLeft(e, originalX, endX) {
    console.log(endX - originalX)
    if (endX - originalX < -55) {
      if (this.state.visible === true) {
        this.toggleVisibility()
      }
    }
  }

  toggleVisibility() {
    if (window.innerWidth < 1250) {
      this.setState({
        visible: !this.state.visible,
      })
    }
  }

  componentDidMount() {
    this.setState({ visible: window.innerWidth > 1250 })
  }

  render() {
    const { defaultLang, currentLang, menuList } = this.props

    return (
      <ReactSwipeEvents
        onSwipedRight={this.onSwipedRight}
        onSwipedLeft={this.onSwipedLeft}
      >
        <nav
          css={menuStyle}
          className={this.state.visible ? 'visible' : 'notvisible'}
        >
          <div css={closeStyle} onClick={this.toggleVisibility}>
            <i className="mdi md-36">
              {this.state.visible ? 'arrow_back' : 'menu'}
            </i>
          </div>
          <ul
            css={listStyle}
            className={this.state.visible ? 'visible' : 'notvisible'}
          >
            {menuList
              .filter(e => e.node.disabled === false)
              .map((data, index) => (
                <li key={index}>
                  <Link
                    to={linker(defaultLang, currentLang, data.node.route)}
                    activeClassName={'ac'}
                  >
                    <i className="mdi md-36">{data.node.icon}</i>
                    <span
                      css={textStyle}
                      className={this.state.visible ? 'visible' : 'notvisible'}
                    >
                      {data.node.text}
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
          {this.state.visible && <Social darkmode={true} />}
        </nav>
      </ReactSwipeEvents>
    )
  }
}

export default Menu

export const MenuFragment = graphql`
  fragment Menu on MenuConnection {
    edges {
      node {
        uniqueId
        icon
        text
        route
        lang
        disabled
        hrefLangs {
          locale
          url
        }
      }
    }
  }
`

// COMPONENT STYLES
const menuStyle = {
  position: 'fixed',
  zIndex: 1000,
  top: 0,
  left: 0,
  width: '300px',
  height: '100%',
  color: '#f8f8f8',
  background: '#262626',
  '@media(max-width: 300px)': {
    '.visible': {
      width: '100%',
    },
  },
  '@media(min-width: 1250px)': {
    '.visible': {
      left: 0,
    },
    '.notvisible': {
      left: 0,
    },
  },
  transition: 'left .4s cubic-bezier(0.4, 0, 0.2, 1)',
  '.visible': {
    left: 0,
  },
  '.notvisible': {
    left: -248,
  },
}

const closeStyle = {
  cursor: 'pointer',
  width: 36,
  height: 36,
  position: 'absolute',
  top: '8px',
  right: '7px',
  '@media(min-width: 1250px)': {
    display: 'none',
  },
}

const listStyle = {
  listStyleType: 'none',
  margin: '4rem 0 0 3rem',
  textTransform: 'uppercase',
  fontFamily: 'Oswald, Helvetica, sans-serif',
  lineHeight: '3rem',
  fontSize: '140%',
  overflow: 'auto',
  display: 'block',
  height: '80%',
  '>li': {
    cursor: 'pointer',
    marginRight: 7,
    '>a': {
      textDecoration: 'none',
      color: '#fff',
    },
    '>a.ac': {
      color: '#f3df7a',
    },
  },
  '.visible': {
    textAlign: 'left',
  },
  '.notvisible': {
    textAlign: 'right',
  },
  '@media(min-width: 1250px)': {
    '.visible': {
      textAlign: 'left',
    },
    '.notvisible': {
      textAlign: 'left',
    },
  },
  '@media(min-height: 590px) and (min-width: 999px)': {
    '::-webkit-scrollbar': {
      display: 'none',
    },
  },
}

const textStyle = {
  position: 'relative',
  top: -10,
  marginLeft: '1rem',
  '.visible': {
    display: 'inline',
  },
  '.notvisible': {
    display: 'none',
  },
  '@media(min-width: 1250px)': {
    '.visible,.notvisible': {
      display: 'inline',
    },
  },
}
