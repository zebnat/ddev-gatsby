import React, { useState } from 'react'
import SkillLevel from './SkillLevel'
import PropTypes from 'prop-types'

const SkillElement = props => {
  const { skill, level, leveling, wordLevel, description } = props
  let [viewDescription, setViewDescription] = useState(true)
  let [changeHeight, setChangeHeight] = useState(true)

  const showDescription = () => {
    setViewDescription(true)
    setTimeout(() => {
      setChangeHeight(true)
    }, 100)
  }

  return (
    <> { /* eslint-disable-next-line */}
      <div
        role="button"
        css={{ width: '245px', margin: 5 }}
      >
        <div css={{ float: 'left', width: '125px', textAlign: 'center' }}>
          <span
            css={{
              display: 'inline-block',
              minWidth: '100px',
              color: '#212121',
              fontFamily: 'monospace',
              padding: 2,
              margin: '24px 0',
              borderTop: '1px solid',
              borderBottom: '1px solid',
            }}
          >
            {skill}
          </span>
        </div>
        <div css={{ float: 'right' }}>
          <SkillLevel
            wordLevel={wordLevel}
            level={level}
            leveling={leveling}
          />
        </div>
        <div
          css={{
            clear: 'both',
            opacity: '0',
            textAlign: 'justify',
            transition: 'opacity 1s',
            overflow: 'hidden',
            display: 'none',
            fontSize: '0.8rem'
          }}
          style={{
            display: viewDescription === true ? 'block' : 'none',
            opacity: changeHeight === true ? '100' : '0',
          }}
        >
          {description}
        </div>
      </div>
    </>
  )
}

SkillElement.propTypes = {
  skill: PropTypes.string,
  wordLevel: PropTypes.string,
  leveling: PropTypes.bool,
  level: PropTypes.number.isRequired,
}

export default SkillElement
