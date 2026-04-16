'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import HomeContent from './HomeContent'
import HomeIntroOverlay from './HomeIntroOverlay'

const INTRO_TIMELINE_MS = 4500
const INTRO_EXIT_MS = 300
const INTRO_REDUCED_MOTION_CLOSE_MS = 2600

function isIOSWebKitBrowser() {
  if (typeof navigator === 'undefined') {
    return false
  }

  const userAgent = navigator.userAgent || ''
  const isIOSDevice = /iPhone|iPad|iPod/i.test(userAgent)
  const hasAppleWebKit = /AppleWebKit/i.test(userAgent)

  return isIOSDevice && hasAppleWebKit
}

function getPrefersReducedMotion() {
  if (
    typeof window === 'undefined' ||
    typeof window.matchMedia !== 'function'
  ) {
    return false
  }

  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  } catch {
    return false
  }
}

export default function HomeEntryExperience({ lang, translation }) {
  const [introActive, setIntroActive] = useState(true)
  const [introExiting, setIntroExiting] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [safeIntroMode, setSafeIntroMode] = useState(false)
  const closeTimerRef = useRef()
  const exitTimerRef = useRef()

  const closeIntro = useCallback(() => {
    if (exitTimerRef.current) {
      window.clearTimeout(exitTimerRef.current)
      exitTimerRef.current = null
    }

    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }

    setIntroExiting(true)

    exitTimerRef.current = window.setTimeout(() => {
      setIntroActive(false)
      setIntroExiting(false)
    }, INTRO_EXIT_MS)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const prefersReducedMotion = getPrefersReducedMotion()
    const iosWebKit = isIOSWebKitBrowser()
    const forceSafeMode = prefersReducedMotion || iosWebKit
    const closeDelay = forceSafeMode
      ? INTRO_REDUCED_MOTION_CLOSE_MS
      : INTRO_TIMELINE_MS
    const beginExitDelay = Math.max(closeDelay - INTRO_EXIT_MS, 0)

    setSafeIntroMode(isIOSWebKitBrowser())
    setReducedMotion(forceSafeMode)
    setIntroActive(true)
    setIntroExiting(false)

    exitTimerRef.current = window.setTimeout(() => {
      setIntroExiting(true)
    }, beginExitDelay)

    closeTimerRef.current = window.setTimeout(() => {
      setIntroActive(false)
      setIntroExiting(false)
    }, closeDelay)

    return () => {
      if (exitTimerRef.current) {
        window.clearTimeout(exitTimerRef.current)
        exitTimerRef.current = null
      }

      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current)
        closeTimerRef.current = null
      }
    }
  }, [lang])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    if (typeof window.matchMedia !== 'function') {
      return undefined
    }

    try {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      const updateReducedMotion = () => setReducedMotion(mediaQuery.matches)

      updateReducedMotion()
      if (typeof mediaQuery.addEventListener === 'function') {
        mediaQuery.addEventListener('change', updateReducedMotion)
      } else if (typeof mediaQuery.addListener === 'function') {
        mediaQuery.addListener(updateReducedMotion)
      }

      return () => {
        if (typeof mediaQuery.removeEventListener === 'function') {
          mediaQuery.removeEventListener('change', updateReducedMotion)
        } else if (typeof mediaQuery.removeListener === 'function') {
          mediaQuery.removeListener(updateReducedMotion)
        }
      }
    } catch {
      return undefined
    }
  }, [])

  useEffect(() => {
    if (typeof document === 'undefined' || !introActive) {
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [introActive])

  return (
    <>
      <HomeContent lang={lang} translation={translation} />
      <HomeIntroOverlay
        translation={translation}
        active={introActive}
        exiting={introExiting}
        animated={!reducedMotion && !safeIntroMode}
        safeMode={safeIntroMode}
        reducedMotion={reducedMotion}
        onSkip={closeIntro}
      />
    </>
  )
}
