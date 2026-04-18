'use client'

import { useEffect, useState } from 'react'

import { Card, CardContent } from '../ui/card'

const portraitAssets = [
  { src: '/images/about/p1002.jpg', altKey: 'photo_alt_1' },
  { src: '/images/about/p1004.jpg', altKey: 'photo_alt_2' },
  { src: '/images/about/p1005.jpg', altKey: 'photo_alt_3' },
]

export default function AboutPhotoCarousel({ translation }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((value) => (value + 1) % portraitAssets.length)
    }, 2000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <Card className="motion-fade-up motion-delay-1 mx-auto w-full max-w-[18rem] overflow-hidden border-cyan-300/35 bg-slate-950/80 p-0 sm:max-w-sm lg:max-w-md xl:max-w-sm">
      <CardContent className="space-y-3 p-4 sm:p-5">
        <div className="relative overflow-hidden rounded-full border border-cyan-300/35 bg-slate-900/70 shadow-[0_0_0_1px_rgba(103,232,249,0.16),0_0_32px_rgba(34,211,238,0.24)] transition-shadow duration-700 hover:shadow-[0_0_0_1px_rgba(103,232,249,0.35),0_0_42px_rgba(34,211,238,0.34)]">
          <div className="relative aspect-square w-full">
            {portraitAssets.map((portrait, index) => {
              const isActive = currentIndex === index
              return (
                <img
                  key={portrait.src}
                  src={portrait.src}
                  alt={translation[portrait.altKey]}
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                    isActive
                      ? 'scale-100 opacity-100'
                      : 'scale-105 opacity-0 pointer-events-none'
                  }`}
                />
              )
            })}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          {portraitAssets.map((portrait, index) => (
            <span
              key={`dot-${portrait.src}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                currentIndex === index
                  ? 'bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.7)]'
                  : 'bg-slate-600'
              }`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
