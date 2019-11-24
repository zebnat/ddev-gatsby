import React, { useState } from 'react'
import SkillLevel from './SkillLevel'
import PropTypes from 'prop-types'

const SkillElement = props => {
  let [viewDescription, setViewDescription] = useState(false)

  const showDescription = () => {
    setViewDescription(true)
  }

  return (
    <>
      <div css={{ width: '245px', margin: 5 }} onClick={showDescription}>
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
            {props.skill}
          </span>
        </div>
        <div css={{ float: 'right' }}>
          <SkillLevel
            wordLevel={props.wordLevel}
            level={props.level}
            leveling={props.leveling}
          />
        </div>
        <div
          css={{ clear: 'both', display: 'none' }}
          style={{ display: viewDescription === true ? 'block' : 'none' }}
        >
          {props.description}
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
