'use client'

import { useEffect, useRef } from 'react'

export default function HomeIntroOverlay({
  translation,
  active,
  exiting,
  animated,
  reducedMotion,
  onSkip,
}) {
  const overlayRef = useRef(null)
  const skipButtonRef = useRef(null)
  const previousFocusRef = useRef(null)

  useEffect(() => {
    if (!active || typeof document === 'undefined') {
      return undefined
    }

    previousFocusRef.current = document.activeElement
    const overlayNode = overlayRef.current

    const focusSkipButton = () => {
      skipButtonRef.current?.focus()
    }

    focusSkipButton()

    const handleFocusIn = (event) => {
      if (!overlayNode || overlayNode.contains(event.target)) {
        return
      }

      focusSkipButton()
    }

    document.addEventListener('focusin', handleFocusIn)

    return () => {
      document.removeEventListener('focusin', handleFocusIn)
      const previousFocus = previousFocusRef.current
      if (typeof previousFocus?.focus === 'function') {
        previousFocus?.focus()
      }
    }
  }, [active])

  if (!active) {
    return null
  }

  const introRegionLabel =
    translation.intro_region_label ||
    translation.intro_phase_2 ||
    'Homepage intro'

  function handleOverlayKeyDown(event) {
    if (event.key === 'Escape') {
      onSkip()
      return
    }

    if (event.key === 'Tab') {
      const overlayNode = overlayRef.current
      if (!overlayNode) {
        return
      }

      const focusables = overlayNode.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )

      if (focusables.length === 0) {
        event.preventDefault()
        return
      }

      const firstElement = focusables[0]
      const lastElement = focusables[focusables.length - 1]

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault()
          lastElement.focus()
        }
      } else if (document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }
  }

  return (
    <section
      ref={overlayRef}
      className={`hud-intro-overlay fixed inset-0 z-[70] flex items-center justify-center px-6 ${
        animated ? 'hud-intro-overlay-animated' : ''
      } ${reducedMotion ? 'hud-intro-overlay-reduced' : ''} ${
        exiting ? 'hud-intro-overlay-exit' : ''
      }`}
      role="dialog"
      aria-modal="true"
      aria-label={introRegionLabel}
      aria-describedby="home-intro-copy"
      onKeyDown={handleOverlayKeyDown}
    >
      <div className="hud-intro-grid absolute inset-0" aria-hidden="true" />
      <div className="hud-intro-scanline absolute inset-0" aria-hidden="true" />

      <button
        ref={skipButtonRef}
        type="button"
        onClick={onSkip}
        autoFocus
        className="hud-intro-skip absolute z-20 rounded-md border border-cyan-300/45 bg-slate-950/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100 transition hover:border-cyan-200/80 hover:bg-slate-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      >
        {translation.intro_skip}
      </button>

      <div
        id="home-intro-copy"
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-4 text-center"
      >
        <p className="hud-intro-phase hud-intro-phase-1 text-xs font-semibold uppercase tracking-[0.26em] text-cyan-100 sm:text-sm">
          <span className="hud-intro-phase-label">
            {translation.intro_phase_1}
          </span>
          <span className="hud-intro-phase-sweep" aria-hidden="true" />
        </p>
        <p className="hud-intro-phase hud-intro-phase-2 text-xl font-semibold uppercase tracking-[0.08em] text-cyan-50 sm:text-3xl">
          <span className="hud-intro-phase-label">
            {translation.intro_phase_2}
          </span>
          <span className="hud-intro-phase-sweep" aria-hidden="true" />
        </p>
        <p className="hud-intro-phase hud-intro-phase-3 text-sm uppercase tracking-[0.16em] text-cyan-200 sm:text-base">
          <span className="hud-intro-phase-label">
            {translation.intro_phase_3}
          </span>
          <span className="hud-intro-phase-sweep" aria-hidden="true" />
        </p>
      </div>
    </section>
  )
}
