function getLanguageLinks(menuItems, defaultLang) {
  const home = menuItems.find((item) => item.uniqueId === 'home')
  if (home && Array.isArray(home.hrefLangs) && home.hrefLangs.length > 0) {
    return home.hrefLangs
  }

  return [
    { locale: defaultLang, url: '/' },
    { locale: 'en', url: '/en/' },
  ]
}

function detectCurrentLang(pathname) {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'es'
}

module.exports = {
  detectCurrentLang,
  getLanguageLinks,
}
