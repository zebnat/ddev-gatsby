'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

import cn from '../../lib/ui/cn.js'
import menuGestureUtils from './menu-gesture-utils.js'

const { isClosingSwipe } = menuGestureUtils

export default function Menu({ menuItems, isOpen, onClose }) {
  const touchStartRef = useRef(null)

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen, onClose])

  function onTouchStart(event) {
    const touch = event.touches[0]
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
    }
  }

  function onTouchEnd(event) {
    if (!touchStartRef.current) {
      return
    }

    const touch = event.changedTouches[0]
    const shouldClose = isClosingSwipe({
      startX: touchStartRef.current.x,
      endX: touch.clientX,
      startY: touchStartRef.current.y,
      endY: touch.clientY,
    })

    touchStartRef.current = null

    if (shouldClose) {
      onClose()
    }
  }

  return (
    <>
      <nav
        aria-label="Primary navigation"
        className="mb-6 hidden overflow-x-auto rounded-xl border border-cyan-300/20 bg-slate-950/65 p-2 shadow-[var(--surface-shadow)] md:block"
      >
        <ul className="m-0 flex list-none flex-wrap gap-1 p-0">
          {menuItems.map((item) => (
            <li key={`${item.lang}-${item.uniqueId}`}>
              <Link
                href={item.fullRoute}
                className="inline-flex rounded-md px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-cyan-400/15 hover:text-cyan-100"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={cn(
          'fixed inset-0 z-50 md:hidden',
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        )}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className={cn(
            'absolute inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300',
            isOpen ? 'opacity-100' : 'opacity-0'
          )}
        />

        <aside
          id="mobile-site-menu"
          role="dialog"
          aria-label="Mobile navigation menu"
          aria-modal="true"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className={cn(
            'absolute right-0 top-0 h-full w-[min(86vw,20rem)] border-l border-cyan-300/25 bg-slate-950/95 p-4 shadow-[var(--surface-shadow)] transition-transform duration-300',
            isOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="mb-4 flex items-center justify-between border-b border-cyan-300/20 pb-3">
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
              Navigation
            </p>
            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-cyan-300/45 bg-cyan-400/10 text-cyan-100 transition hover:bg-cyan-300/20"
            >
              <span className="text-lg leading-none">×</span>
            </button>
          </div>

          <ul className="m-0 flex list-none flex-col gap-1 p-0">
            {menuItems.map((item) => (
              <li key={`mobile-${item.lang}-${item.uniqueId}`}>
                <Link
                  href={item.fullRoute}
                  onClick={onClose}
                  className="inline-flex w-full rounded-md px-3 py-3 text-sm font-medium text-slate-100 transition hover:bg-cyan-400/15 hover:text-cyan-100"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-5 text-xs text-slate-400">Swipe right to close</p>
        </aside>
      </div>
    </>
  )
}
