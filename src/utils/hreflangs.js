const mdHreflangParser = function(arr) {
  const output = []
  arr.forEach(element => {
    const split = element.split('%%')
    output.push({
      locale: split[0],
      url: split[1],
    })
  })

  return output
}

export default mdHreflangParser
