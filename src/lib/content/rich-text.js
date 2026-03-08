function injectLinkPlaceholder(html, href) {
  if (typeof html !== 'string') {
    return ''
  }

  return html
    .replace(/<Link>/g, `<a href="${href}">`)
    .replace(/<\/Link>/g, '</a>')
}

module.exports = {
  injectLinkPlaceholder,
}
