'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import HomeContent from './HomeContent'
import HomeIntroOverlay from './HomeIntroOverlay'

const INTRO_TIMELINE_MS = 2200
const INTRO_REDUCED_MOTION_CLOSE_MS = 1200
const INTRO_DEBUG_ALWAYS_SHOW = true

const introStorageKeyByLang = {
  en: 'homeIntroSeen_en',
  es: 'homeIntroSeen_es',
}

const introSeenInMemory = {
  en: false,
  es: false,
}

function getIntroStorageKey(lang) {
  return introStorageKeyByLang[lang] || introStorageKeyByLang.es
}

function isLocalStorageAvailable() {
  try {
    if (typeof window === 'undefined') {
      return false
    }

    const probeKey = '__home_intro_probe__'
    window.localStorage.setItem(probeKey, '1')
    window.localStorage.removeItem(probeKey)
    return true
  } catch {
    return false
  }
}

function hasSeenIntro(lang, canUseLocalStorage) {
  const key = getIntroStorageKey(lang)

  if (canUseLocalStorage) {
    try {
      return window.localStorage.getItem(key) === '1'
    } catch {
      return introSeenInMemory[lang] === true
    }
  }

  return introSeenInMemory[lang] === true
}

function markIntroSeen(lang, canUseLocalStorage) {
  const key = getIntroStorageKey(lang)
  introSeenInMemory[lang] = true

  if (canUseLocalStorage) {
    try {
      window.localStorage.setItem(key, '1')
    } catch {
      // no-op and keep in-memory fallback
    }
  }
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
  const [introActive, setIntroActive] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const closeTimerRef = useRef(null)

  const canUseLocalStorage = useMemo(() => isLocalStorageAvailable(), [])

  const closeIntro = useCallback(() => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }

    if (!INTRO_DEBUG_ALWAYS_SHOW) {
      markIntroSeen(lang, canUseLocalStorage)
    }
    setIntroActive(false)
  }, [canUseLocalStorage, lang])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const introQueryValue = new URLSearchParams(window.location.search).get(
      'intro'
    )
    const shouldForceIntro = introQueryValue === '1'
    const shouldSkipIntro = introQueryValue === '0'

    if (shouldSkipIntro) {
      setIntroActive(false)
      return undefined
    }

    if (
      !INTRO_DEBUG_ALWAYS_SHOW &&
      !shouldForceIntro &&
      hasSeenIntro(lang, canUseLocalStorage)
    ) {
      setIntroActive(false)
      return undefined
    }

    const prefersReducedMotion = getPrefersReducedMotion()

    setReducedMotion(prefersReducedMotion)
    setIntroActive(true)

    const closeDelay =
      INTRO_DEBUG_ALWAYS_SHOW || !prefersReducedMotion
        ? INTRO_TIMELINE_MS
        : INTRO_REDUCED_MOTION_CLOSE_MS

    closeTimerRef.current = window.setTimeout(() => {
      closeIntro()
    }, closeDelay)

    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current)
        closeTimerRef.current = null
      }
    }
  }, [canUseLocalStorage, closeIntro, lang])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    if (typeof window.matchMedia !== 'function') {
      return undefined
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateReducedMotion = () => setReducedMotion(mediaQuery.matches)

    updateReducedMotion()
    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updateReducedMotion)
    } else {
      mediaQuery.addListener(updateReducedMotion)
    }

    return () => {
      if (typeof mediaQuery.removeEventListener === 'function') {
        mediaQuery.removeEventListener('change', updateReducedMotion)
      } else {
        mediaQuery.removeListener(updateReducedMotion)
      }
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
        reducedMotion={reducedMotion}
        onSkip={closeIntro}
      />
    </>
  )
}
