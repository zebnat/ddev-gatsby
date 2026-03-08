'use client'

import { useEffect, useMemo, useState } from 'react'

import { streamerPage } from '../../content/translations'
import streamUtils from '../../lib/content/stream-utils.js'

const { getTimeLeftLabel } = streamUtils

export default function StreamCard({ lang }) {
  const t = streamerPage[lang]
  const [isLive, setIsLive] = useState(null)
  const [title, setTitle] = useState('')
  const [timeLeft, setTimeLeft] = useState('Desconocido')
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
  }, [])

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

  const incomingStream = timeLeft !== '???' && timeLeft !== 'Desconocido'
  const incomingOrLive = incomingStream || isLive

  return (
    <section style={styles.mainCard}>
      <h2 style={styles.streamStatus}>
        {isLive === true
          ? `- ${t.isLive} -`
          : isLive === false
          ? `${t.isNotLive} 😔`
          : `- ${t.checkIsLive} -`}
      </h2>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.twitch.tv/zebnat"
      >
        <img
          alt="zebnat Twitch"
          src="https://zebnat.github.io/twitchtag.png"
          style={{ margin: 0, maxWidth: '100%' }}
        />
      </a>

      {isLive && title ? (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.twitch.tv/zebnat"
          style={styles.actionButton}
        >
          {title}
        </a>
      ) : null}

      {incomingStream && !isLive ? (
        <>
          <div>{lang === 'es' ? 'Proximo directo' : 'Next stream'}</div>
          <div style={styles.streamTitle}>{title}</div>
          <div style={{ fontSize: '85%' }}>
            {lang === 'es' ? 'Dentro de' : 'In'} {timeLeft}
          </div>
        </>
      ) : null}

      {program.length > 0 && incomingOrLive ? (
        <>
          <button
            type="button"
            style={styles.dropDownable}
            onClick={() => setProgramOpen(!programOpen)}
          >
            {programOpen ? 'Hide' : 'Show'} {t.program}
          </button>
          {programOpen ? (
            <div style={{ width: '100%' }}>
              {program.map((item, index) => (
                <div key={`${item.title}-${index}`} style={styles.programBlock}>
                  <h4 style={{ marginTop: 0 }}>
                    #{index + 1} {item.title}
                  </h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          ) : null}
        </>
      ) : null}

      {incomingOrLive ? (
        <>
          <button
            type="button"
            style={styles.dropDownable}
            onClick={() => setGoalsOpen(!goalsOpen)}
          >
            {goalsOpen ? 'Hide' : 'Show'} {t.goals}
          </button>
          {goalsOpen ? (
            <div style={styles.goalsBox}>
              {goals.map((goal) => (
                <div key={goal.maxViewers} style={styles.programBlock}>
                  <h5 style={{ margin: 0 }}>
                    [{goal.reached ? '✓' : '✖'}] {goal.maxViewers} {t.visits}
                  </h5>
                  {goal.message ? (
                    <p style={{ marginBottom: 0 }}>{goal.message}</p>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}
        </>
      ) : (
        <div>
          {lang === 'es'
            ? 'Sigue el canal para el proximo directo.'
            : 'Follow to catch next stream.'}
        </div>
      )}
    </section>
  )
}

const styles = {
  mainCard: {
    textAlign: 'center',
    background: '#6441A4',
    margin: '8px 0',
    padding: 15,
    color: '#fff',
    lineHeight: '1.7em',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  streamStatus: {
    color: '#fff298',
    fontSize: '1.2em',
    border: '1px solid #b699ec',
    padding: 10,
    borderRadius: 5,
    margin: 0,
  },
  actionButton: {
    color: '#fff',
    padding: '2px 4px',
    background: '#a07dde',
    borderRadius: 3,
    textDecoration: 'none',
    margin: '0.5em 0',
  },
  streamTitle: {
    background: '#8d6dca',
    color: '#fff',
    padding: 8,
    borderRadius: 2,
  },
  dropDownable: {
    color: '#e2d7f7',
    cursor: 'pointer',
    fontSize: '110%',
    background: 'transparent',
    border: 0,
  },
  programBlock: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    background: '#7b55c1',
    padding: 8,
    borderBottom: '2px dotted #6441a4',
    marginBottom: 6,
  },
  goalsBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
}
