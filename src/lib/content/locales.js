const config = require('../../../data/config')
const localeGlobals = require('../../../data/localeGlobals')

function normalizeRoute(route) {
  if (!route || route === '/') {
    return '/'
  }

  let normalized = route.startsWith('/') ? route : `/${route}`
  if (!normalized.endsWith('/')) {
    normalized = `${normalized}/`
  }

  return normalized
}

function buildFullRoute(defaultLang, lang, route) {
  const normalizedRoute = normalizeRoute(route)
  if (defaultLang === lang) {
    return normalizedRoute
  }

  if (normalizedRoute === '/') {
    return `/${lang}/`
  }

  return `/${lang}${normalizedRoute}`
}

function buildHrefLangMap(menuList, defaultLang) {
  const map = {}

  for (const menu of menuList) {
    if (!map[menu.uniqueId]) {
      map[menu.uniqueId] = []
    }

    map[menu.uniqueId].push({
      locale: menu.lang,
      url: buildFullRoute(defaultLang, menu.lang, menu.route),
    })
  }

  for (const uniqueId of Object.keys(map)) {
    map[uniqueId].sort((a, b) => a.locale.localeCompare(b.locale))
  }

  return map
}

function getDefaultLang() {
  return config.defaultLang
}

function getMenuByLang(lang, options = {}) {
  const { includeDisabled = true } = options
  const defaultLang = getDefaultLang()
  const hrefLangMap = buildHrefLangMap(localeGlobals.menuList, defaultLang)

  return localeGlobals.menuList
    .filter((entry) => entry.lang === lang)
    .filter((entry) => includeDisabled || entry.disabled === false)
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((entry) => ({
      ...entry,
      fullRoute: buildFullRoute(defaultLang, entry.lang, entry.route),
      hrefLangs: hrefLangMap[entry.uniqueId] || [],
    }))
}

function getSiteMetadataByLang(lang) {
  return (
    localeGlobals.siteMetaData.find((entry) => entry.currentLang === lang) ||
    null
  )
}

module.exports = {
  getDefaultLang,
  getMenuByLang,
  getSiteMetadataByLang,
}
