function normalizePath(routePath) {
  if (!routePath || routePath === '/') {
    return '/'
  }

  let normalized = routePath.startsWith('/') ? routePath : `/${routePath}`
  if (!normalized.endsWith('/')) {
    normalized = `${normalized}/`
  }

  return normalized
}

function buildCanonicalUrl(domainUrl, routePath) {
  const domain = (domainUrl || '').replace(/\/$/, '')
  return `${domain}${normalizePath(routePath)}`
}

function parseHrefLangEntry(value) {
  if (typeof value !== 'string') {
    return null
  }

  const split = value.split('%%')
  if (split.length !== 2) {
    return null
  }

  const locale = split[0].trim()
  const url = split[1].trim()
  if (!locale || !url) {
    return null
  }

  return {
    locale,
    url: normalizePath(url),
  }
}

function buildAlternates(hreflangs = []) {
  const languages = {}

  for (const value of hreflangs) {
    const parsed = parseHrefLangEntry(value)
    if (!parsed) {
      continue
    }

    languages[parsed.locale] = parsed.url
  }

  return { languages }
}

function buildPageMetadata(options) {
  const { domainUrl, canonicalPath, hreflangs = [] } = options

  return {
    alternates: {
      canonical: buildCanonicalUrl(domainUrl, canonicalPath),
      ...buildAlternates(hreflangs),
    },
  }
}

module.exports = {
  buildAlternates,
  buildCanonicalUrl,
  buildPageMetadata,
}
