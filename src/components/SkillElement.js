import React from 'react'
import SkillLevel from './SkillLevel'
import PropTypes from 'prop-types'

const SkillElement = props => {
  return (
    <>
      <div css={{ width: '245px', height: '50px', margin: 5 }}>
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
        <div css={{ clear: 'both' }} />
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
