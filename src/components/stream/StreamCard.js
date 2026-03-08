'use client'

import { useEffect, useMemo, useState } from 'react'

import { streamerPage } from '../../content/translations'
import streamUtils from '../../lib/content/stream-utils.js'
import Badge from '../ui/badge'
import Button from '../ui/button'
import { Card, CardContent, CardHeader } from '../ui/card'

const { getTimeLeftLabel } = streamUtils

const labelsByLang = {
  en: {
    unknown: 'Unknown',
    nextStream: 'Next stream',
    in: 'In',
    follow: 'Follow to catch next stream.',
    hide: 'Hide',
    show: 'Show',
  },
  es: {
    unknown: 'Desconocido',
    nextStream: 'Proximo directo',
    in: 'Dentro de',
    follow: 'Sigue el canal para el proximo directo.',
    hide: 'Ocultar',
    show: 'Mostrar',
  },
}

function ProgramList({ program }) {
  return (
    <div className="w-full space-y-2">
      {program.map((item, index) => (
        <article
          key={`${item.title}-${index}`}
          className="rounded-lg border border-cyan-300/20 bg-slate-950/70 p-3 text-left"
        >
          <h4 className="m-0 text-sm font-semibold text-slate-100">
            #{index + 1} {item.title}
          </h4>
          <p className="mt-1 text-sm text-slate-300">{item.description}</p>
        </article>
      ))}
    </div>
  )
}

function GoalsList({ goals, visitsLabel }) {
  return (
    <div className="w-full space-y-2">
      {goals.map((goal) => (
        <article
          key={goal.maxViewers}
          className="rounded-lg border border-cyan-300/20 bg-slate-950/70 p-3 text-left"
        >
          <h5 className="m-0 text-sm font-semibold text-slate-100">
            [{goal.reached ? 'OK' : 'PENDING'}] {goal.maxViewers} {visitsLabel}
          </h5>
          {goal.message ? (
            <p className="mb-0 mt-1 text-sm text-slate-300">{goal.message}</p>
          ) : null}
        </article>
      ))}
    </div>
  )
}

export default function StreamCard({ lang }) {
  const t = streamerPage[lang]
  const labels = labelsByLang[lang] || labelsByLang.es

  const [isLive, setIsLive] = useState(null)
  const [title, setTitle] = useState('')
  const [timeLeft, setTimeLeft] = useState(labels.unknown)
  const [program, setProgram] = useState([])
  const [goalsOpen, setGoalsOpen] = useState(false)
  const [programOpen, setProgramOpen] = useState(false)

  useEffect(() => {
    let active = true
    let timerId = null

    async function loadStreamData() {
      try {
        const response = await fetch('https://zebnat.github.io/twitch.json')
        const data = await response.json()
        if (!active) {
          return
        }

        setIsLive(Boolean(data.live))
        setTitle(data.title || '')
        setProgram(Array.isArray(data.program) ? data.program : [])

        if (data.timeleft) {
          const update = () => setTimeLeft(getTimeLeftLabel(data.timeleft))
          update()
          timerId = setInterval(update, 1000)
        }
      } catch (_error) {
        if (active) {
          setIsLive(false)
        }
      }
    }

    loadStreamData()

    return () => {
      active = false
      if (timerId) {
        clearInterval(timerId)
      }
    }
  }, [labels.unknown])

  const goals = useMemo(
    () => [
      { maxViewers: 20, reached: true, message: null },
      { maxViewers: 40, reached: true, message: null },
      { maxViewers: 60, reached: true, message: t.newModerator },
      { maxViewers: 80, reached: false, message: t.newModerator },
      { maxViewers: 100, reached: false, message: t.newArt },
    ],
    [t.newArt, t.newModerator]
  )

  const incomingStream = timeLeft !== '???' && timeLeft !== labels.unknown
  const incomingOrLive = incomingStream || isLive

  const status =
    isLive === true
      ? `- ${t.isLive} -`
      : isLive === false
      ? `${t.isNotLive} 😔`
      : `- ${t.checkIsLive} -`

  return (
    <Card
      as="section"
      className="border-cyan-300/35 bg-slate-900/85 text-center"
    >
      <CardHeader className="items-center gap-3 text-center">
        <Badge
          variant={isLive ? 'accent' : 'neutral'}
          className="normal-case tracking-normal"
        >
          {status}
        </Badge>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.twitch.tv/zebnat"
          className="inline-flex"
        >
          <img
            alt="zebnat Twitch"
            src="https://zebnat.github.io/twitchtag.png"
            className="h-auto max-w-full rounded-lg border border-cyan-300/20"
          />
        </a>
      </CardHeader>

      <CardContent className="space-y-4">
        {isLive && title ? (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.twitch.tv/zebnat"
            className="inline-flex rounded-md bg-cyan-400 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            {title}
          </a>
        ) : null}

        {incomingStream && !isLive ? (
          <section className="space-y-2 rounded-lg border border-cyan-300/20 bg-slate-950/70 p-3">
            <p className="m-0 text-xs uppercase tracking-[0.12em] text-cyan-100">
              {labels.nextStream}
            </p>
            <p className="m-0 text-base font-semibold text-slate-100">
              {title}
            </p>
            <p className="m-0 text-sm text-slate-300">
              {labels.in} {timeLeft}
            </p>
          </section>
        ) : null}

        {program.length > 0 && incomingOrLive ? (
          <section className="space-y-3">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setProgramOpen(!programOpen)}
            >
              {programOpen ? labels.hide : labels.show} {t.program}
            </Button>
            {programOpen ? <ProgramList program={program} /> : null}
          </section>
        ) : null}

        {incomingOrLive ? (
          <section className="space-y-3">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setGoalsOpen(!goalsOpen)}
            >
              {goalsOpen ? labels.hide : labels.show} {t.goals}
            </Button>
            {goalsOpen ? (
              <GoalsList goals={goals} visitsLabel={t.visits} />
            ) : null}
          </section>
        ) : (
          <p className="text-sm text-slate-300">{labels.follow}</p>
        )}
      </CardContent>
    </Card>
  )
}
