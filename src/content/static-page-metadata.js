const config = require('../../data/config.js')
const localesLoader = require('../lib/content/locales.js')
const metadataHelpers = require('../lib/seo/metadata.js')

const { getMenuByLang } = localesLoader
const { buildPageMetadata } = metadataHelpers

function buildStaticPageMetadata(options) {
  const { lang, uniqueId, title, description } = options
  const menuEntry = getMenuByLang(lang).find(
    (entry) => entry.uniqueId === uniqueId
  )

  const canonicalPath = menuEntry ? menuEntry.fullRoute : '/'
  const hreflangs = (menuEntry?.hrefLangs || []).map(
    (entry) => `${entry.locale}%%${entry.url}`
  )

  return {
    title,
    description,
    ...buildPageMetadata({
      domainUrl: config.domainUrl,
      canonicalPath,
      hreflangs,
    }),
  }
}

module.exports = {
  buildStaticPageMetadata,
}
