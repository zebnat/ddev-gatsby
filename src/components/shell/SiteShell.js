'use client'

import Footer from './Footer'
import Menu from './Menu'
import TopBar from './TopBar'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import localesLoader from '../../lib/content/locales.js'
import { shell as shellTranslation } from '../../content/translations'
import shellUtils from './shell-utils.js'

const { getDefaultLang, getMenuByLang } = localesLoader
const { detectCurrentLang, getLanguageLinks } = shellUtils

export default function SiteShell({ children }) {
  const pathname = usePathname() || '/'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const currentLang = detectCurrentLang(pathname)
  const defaultLang = getDefaultLang()
  const menuItems = getMenuByLang(currentLang, { includeDisabled: false })
  const languageLinks = getLanguageLinks(menuItems, defaultLang)
  const shell = shellTranslation[currentLang] || shellTranslation.es

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-10 pt-5 sm:px-6 lg:px-10">
      <TopBar
        languages={languageLinks}
        currentLang={currentLang}
        menuOpen={mobileMenuOpen}
        onToggleMenu={() => setMobileMenuOpen((state) => !state)}
        translation={shell}
      />
      <Menu
        menuItems={menuItems}
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        translation={shell}
      />
      <main className="pt-3">{children}</main>
      <Footer translation={shell} />
    </div>
  )
}
