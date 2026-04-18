'use client'

import { useEffect, useState } from 'react'

import cn from '../../lib/ui/cn.js'

export default function ScrollToTopButton({ label }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const syncVisibility = () => {
      setVisible(window.scrollY > 300)
    }

    syncVisibility()
    window.addEventListener('scroll', syncVisibility, { passive: true })

    return () => {
      window.removeEventListener('scroll', syncVisibility)
    }
  }, [])

  const handleClick = () => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <button
      type="button"
      aria-label={label}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={handleClick}
      className={cn(
        'fixed bottom-5 right-4 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/45 bg-slate-950/85 text-cyan-100 shadow-[var(--surface-shadow)] backdrop-blur transition-all duration-200 hover:border-cyan-300 hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200 sm:bottom-7 sm:right-6',
        visible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-2 opacity-0'
      )}
    >
      <span aria-hidden="true" className="text-lg leading-none">
        &uarr;
      </span>
    </button>
  )
}
