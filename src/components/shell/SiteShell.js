'use client'

import Footer from './Footer'
import Menu from './Menu'
import TopBar from './TopBar'
import { usePathname } from 'next/navigation'

import localesLoader from '../../lib/content/locales.js'

const { getDefaultLang, getMenuByLang } = localesLoader

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

export default function SiteShell({ children }) {
  const pathname = usePathname() || '/'
  const currentLang = detectCurrentLang(pathname)
  const defaultLang = getDefaultLang()
  const menuItems = getMenuByLang(currentLang, { includeDisabled: false })
  const languageLinks = getLanguageLinks(menuItems, defaultLang)

  return (
    <div style={styles.wrapper}>
      <TopBar languages={languageLinks} currentLang={currentLang} />
      <Menu menuItems={menuItems} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

const styles = {
  wrapper: {
    maxWidth: 920,
    margin: '0 auto',
    padding: '16px',
  },
}
