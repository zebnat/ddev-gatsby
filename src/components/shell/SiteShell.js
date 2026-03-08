'use client'

import Footer from './Footer'
import Menu from './Menu'
import TopBar from './TopBar'
import { usePathname } from 'next/navigation'

import localesLoader from '../../lib/content/locales.js'
import shellUtils from './shell-utils.js'

const { getDefaultLang, getMenuByLang } = localesLoader
const { detectCurrentLang, getLanguageLinks } = shellUtils

export default function SiteShell({ children }) {
  const pathname = usePathname() || '/'
  const currentLang = detectCurrentLang(pathname)
  const defaultLang = getDefaultLang()
  const menuItems = getMenuByLang(currentLang, { includeDisabled: false })
  const languageLinks = getLanguageLinks(menuItems, defaultLang)

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-10 pt-5 sm:px-6 lg:px-10">
      <TopBar languages={languageLinks} currentLang={currentLang} />
      <Menu menuItems={menuItems} />
      <main className="pt-3">{children}</main>
      <Footer />
    </div>
  )
}
