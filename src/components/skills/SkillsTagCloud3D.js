'use client'

import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Billboard, OrbitControls, Text } from '@react-three/drei'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

function categoryColor(category, isRecent) {
  if (category === 'languages') {
    return isRecent ? '#a5f3fc' : '#94a3b8'
  }

  if (category === 'frameworks') {
    return isRecent ? '#67e8f9' : '#64748b'
  }

  if (category === 'tools') {
    return isRecent ? '#7dd3fc' : '#6b7280'
  }

  return isRecent ? '#bae6fd' : '#71717a'
}

function levelGlowColor(level) {
  if (level >= 5) {
    return '#fde68a'
  }

  if (level >= 4) {
    return '#67e8f9'
  }

  if (level >= 3) {
    return '#38bdf8'
  }

  return '#94a3b8'
}

function levelFontSize(level) {
  const map = {
    1: 0.2,
    2: 0.29,
    3: 0.42,
    4: 0.58,
    5: 0.78,
  }

  return map[level] || 0.28
}

function levelOutlineWidth(level) {
  return 0.004 + level * 0.0032
}

function levelOutlineBlur(level) {
  return 0.01 + level * 0.008
}

function distributeOnSphere(items, radius = 10) {
  const total = items.length

  return items.map((item, index) => {
    const phi = Math.acos(1 - (2 * (index + 0.5)) / total)
    const theta = Math.PI * (1 + Math.sqrt(5)) * (index + 0.5)

    return {
      ...item,
      position: [
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.cos(phi),
        radius * Math.sin(theta) * Math.sin(phi),
      ],
    }
  })
}

function SkillLabels({ items }) {
  const cloudItems = useMemo(() => distributeOnSphere(items), [items])

  return (
    <group>
      {cloudItems.map((item) => (
        <Billboard
          key={`${item.category}-${item.skill}`}
          follow
          lockX={false}
          lockY={false}
          lockZ={false}
          position={item.position}
        >
          <Text
            fontSize={levelFontSize(item.level)}
            color={categoryColor(item.category, item.isRecent)}
            anchorX="center"
            anchorY="middle"
            maxWidth={7}
            fillOpacity={item.level >= 4 ? 1 : 0.9}
            outlineWidth={levelOutlineWidth(item.level)}
            outlineBlur={levelOutlineBlur(item.level)}
            outlineColor={levelGlowColor(item.level)}
          >
            {item.skill}
          </Text>
        </Billboard>
      ))}
    </group>
  )
}

export default function SkillsTagCloud3D({ items }) {
  const [autoRotateEnabled, setAutoRotateEnabled] = useState(true)
  const resumeTimerRef = useRef(null)

  const clearResumeTimer = useCallback(() => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current)
      resumeTimerRef.current = null
    }
  }, [])

  const scheduleAutoRotateResume = useCallback(() => {
    clearResumeTimer()

    resumeTimerRef.current = setTimeout(() => {
      setAutoRotateEnabled(true)
      resumeTimerRef.current = null
    }, 4000)
  }, [clearResumeTimer])

  const handleControlStart = useCallback(() => {
    clearResumeTimer()
    setAutoRotateEnabled(false)
  }, [clearResumeTimer])

  const handleControlEnd = useCallback(() => {
    scheduleAutoRotateResume()
  }, [scheduleAutoRotateResume])

  const handleControlChange = useCallback(() => {
    if (!autoRotateEnabled) {
      scheduleAutoRotateResume()
    }
  }, [autoRotateEnabled, scheduleAutoRotateResume])

  useEffect(() => {
    return () => {
      clearResumeTimer()
    }
  }, [clearResumeTimer])

  return (
    <div
      className="h-[24rem] w-full touch-none rounded-xl border border-cyan-300/30 bg-slate-950/70 sm:h-[30rem]"
      aria-label="3D skills cloud"
    >
      <Canvas camera={{ position: [0, 0, 18], fov: 52 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[0, 0, 14]} intensity={1.45} color="#67e8f9" />
        <pointLight position={[-10, -6, -10]} intensity={0.7} color="#1e3a8a" />

        <SkillLabels items={items} />

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={10}
          maxDistance={24}
          autoRotate={autoRotateEnabled}
          autoRotateSpeed={0.35}
          rotateSpeed={0.7}
          enableDamping
          dampingFactor={0.06}
          onStart={handleControlStart}
          onChange={handleControlChange}
          onEnd={handleControlEnd}
          touches={{ ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_ROTATE }}
        />
      </Canvas>
    </div>
  )
}
