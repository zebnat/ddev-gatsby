import React from 'react'

class Bio extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      interval: null,
      totalPhotos: props.photos.length,
      current: 0,
    }

    this.handleInterval = this.handleInterval.bind(this)
  }

  componentDidMount() {
    this.setState({
      interval: setInterval(this.handleInterval.bind(this), 6000),
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.interval)
  }

  handleInterval() {
    const nextCurrent =
      this.state.current === this.state.totalPhotos - 1
        ? 0
        : this.state.current + 1

    this.setState({
      current: nextCurrent,
    })
  }

  render() {
    return (
      <>
        <div css={imageContainerStyle}>
          {this.props.photos.map((value, index) => (
            <img
              key={index}
              className={
                index >= this.state.totalPhotos - this.state.current
                  ? 'hidding'
                  : ''
              }
              css={imageStyle}
              src={value}
              alt={'Daniel Domínguez Rubio'}
            />
          ))}
        </div>
        <div css={quoteStyle}>{this.props.quote}</div>
      </>
    )
  }
}

export default Bio

// COMPONENT STYLES
const imageContainerStyle = {
  width: 250,
  height: 250,
  borderRadius: 500,
  margin: '0 auto',
  position: 'relative',
  borderStyle: 'solid',
  borderWidth: '8px',
  animation: 'rainbowslol 5s infinite',
}

const imageStyle = {
  position: 'absolute',
  borderRadius: 500,
  left: 0,
  top: 0,
  transition: 'opacity 2s ease-out',
  opacity: 1,
  '.hidding': {
    opacity: 0,
  },
}

const quoteStyle = {
  textAlign: 'center',
  width: '200px',
  margin: '1rem auto',
  lineHeight: '1rem',
  fontSize: '90%',
}
