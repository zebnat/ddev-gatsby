import React from 'react'
import SkillLevel from './SkillLevel'

const SkillElement = props => {
  return (
    <>
      <div css={{ width: '245px', height: '50px', margin: 5 }}>
        <div css={{ float: 'left', width: '125px', textAlign: 'center' }}>
          <span
            css={{
              display: 'inline-block',
              minWidth: '100px',
              color: '#003a65',
              fontSize: '80%',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              padding: 2,
              margin: '24px 0',
              background: '#bfd6ec',
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

export default SkillElement
