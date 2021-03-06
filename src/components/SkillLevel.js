import React from 'react'
import PropTypes from 'prop-types'

const LevelBlock = props => (
  <div
    css={[
      {
        background: '#4a4a4a',
        width: '16px',
        height: '13px',
        margin: '0 0.05rem',
        display: 'inline-block',
      },
      props.blink === true
        ? { animation: 'blink 2s linear infinite', background: '#efb713' }
        : null,
      props.hidden === true ? { opacity: 0 } : null,
    ]}
  />
)

const SkillLevel = props => {
  const maxLevel = 5
  var blocks = []

  for (var i = 0; i < props.level; i++) {
    var isLast = i + 1 === props.level

    if (isLast) {
      if (props.leveling === true) {
        blocks.push(<LevelBlock key={i} blink />)
      } else {
        blocks.push(<LevelBlock key={i} />)
      }
    } else {
      blocks.push(<LevelBlock key={i} />)
    }
  }

  const remainingLevels = maxLevel - props.level
  for (var z = 0; z < remainingLevels; z++) {
    blocks.push(<LevelBlock key={'r' + z} hidden />)
  }

  return (
    <div css={{ lineHeight: 1, margin: '.5rem' }}>
      <div css={{ fontFamily: 'monospace', padding: '2px 0' }}>
        {props.wordLevel}
      </div>
      <div
        css={{
          border: '1px solid black',
          display: 'inline-block',
          padding: 2,
          lineHeight: 0,
        }}
      >
        {blocks}
      </div>
    </div>
  )
}

SkillLevel.propTypes = {
  wordLevel: PropTypes.string,
  leveling: PropTypes.bool,
  level: PropTypes.number.isRequired,
}

LevelBlock.propTypes = {
  blink: PropTypes.bool,
  hidden: PropTypes.bool,
}
export default SkillLevel
