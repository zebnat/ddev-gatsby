import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const TagFilter = props => {
  const { tags, filterText, onChange } = props

  var [aggregatedTags, setAggregatedTags] = useState([])

  useEffect(() => {
    const groupedTags = groupTags(tags)

    setAggregatedTags(groupedTags)
  }, [tags])

  return (
    <>
      <p css={{ fontWeight: 'bold' }}>{filterText}</p>
      <select
        css={{
          padding: 10,
        }}
        defaultValue=""
        onChange={onChange}
      >
        <option value="">-----</option>
        {aggregatedTags.map((e, i) => (
          <option key={i} value={e.name}>
            {e.name.toLowerCase() + ' (' + e.count + ')'}
          </option>
        ))}
      </select>
    </>
  )
}

TagFilter.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.array).isRequired,
  filterText: PropTypes.string.isRequired,
  onChange: PropTypes.func
}

export default TagFilter

const groupTags = tagList => {
  var aggregatedTags = {}
  for (let x in tagList) {
    for (let y in tagList[x]) {
      aggregatedTags[tagList[x][y]] =
        aggregatedTags[tagList[x][y]] === undefined
          ? 1
          : aggregatedTags[tagList[x][y]] + 1
    }
  }

  var aggTagList = []

  for (let x in aggregatedTags) {
    aggTagList.push({
      name: x,
      count: aggregatedTags[x],
    })
  }

  aggTagList.sort((a, b) => {
    if (a.count < b.count) {
      return 1
    }
    if (a.count > b.count) return -1
    return 0
  })

  return aggTagList
}
