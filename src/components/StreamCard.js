import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import translation from '../../data/translations/streamerPage'
import { Helmet } from 'react-helmet'
import cuteImg from '../../data/images/875557672919896105.png'

const StreamCard = (props) => {
    const { lang } = props

    const [isLive, setIsLive] = useState(null)
    const [timeLeft, setTimeLeft] = useState("Desconocido")
    const [title, setTitle] = useState("Desconocido")
    const [goalsOpen, setGoalsOpen] = useState(false)
    const [programOpen, setProgramOpen] = useState(false)
    const [plan, setPlan] = useState(false)

    useEffect(() => {
        fetch('https://zebnat.github.io/twitch.json')
            .then(response => response.json())
            .then(data => {
                setIsLive(data.live)
                setTitle(data.title)
                if (data.program !== undefined) {
                    setPlan(data.program)
                }

                if (data.timeleft) {
                    setInterval(() => {
                        setTimeLeft(when(data.timeleft))
                    }, 1000)
                }
            });
    }, [])

    const goals = [
        {
            maxViewers: 20,
            reached: true,
            message: null
        },
        {
            maxViewers: 40,
            reached: true,
            message: null
        },
        {
            maxViewers: 60,
            reached: false,
            message: translation[lang].newModerator
        },
        {
            maxViewers: 80,
            reached: false,
            message: translation[lang].newModerator
        },
        {
            maxViewers: 100,
            reached: false,
            message: translation[lang].newArt
        },

    ]

    const when = (dt) => {
        var utcDate = new Date(dt).getTime();
        var now = new Date().getTime();
        var distance = utcDate - now;

        if (distance <= 0) {
            return "???";
        }
        return msToTime(utcDate - now);
    }

    const incomingStream = (timeLeft !== "???");
    const streamInThePast = (timeLeft === "???");
    const incomingOrLive = (incomingStream || isLive);
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Zebnat Twitch Status</title>
                <style>{`html{margin:0; padding:0} body{margin:0;padding:0}`}</style>
            </Helmet>
            <div css={mainCard}>
                {isLive === true && <h1 css={streamStatus} dangerouslySetInnerHTML={{ __html: '- ' + translation[lang].isLive + ' -' }}></h1>}
                {isLive === false && <h1 css={streamStatus} dangerouslySetInnerHTML={{ __html: translation[lang].isNotLive + '😔' }}></h1>}
                {isLive === null && <h1 css={streamStatus} dangerouslySetInnerHTML={{ __html: '- ' + translation[lang].checkIsLive + ' -' }} ></h1>}

                <a target="_blank" rel="noopener noreferrer" href="https://www.twitch.tv/zebnat" aria-label="twitch channel"><img alt="zebnat Twitch" css={{ margin: 0 }} src="https://zebnat.github.io/twitchtag.png" /></a>
                {isLive && <a aria-label="Visita canal de Twitch" target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={{ __html: title }} css={actionButton} href="https://www.twitch.tv/zebnat"></a>}
                {incomingStream && !isLive && <>
                    <div>Próximo directo</div>
                    <div css={streamTitle}>{title}</div>
                    <div css={{ fontSize: '85%' }}>Dentro de {timeLeft}</div>
                </>}
                {plan && incomingOrLive &&
                    <> { /* eslint-disable-next-line */ }
                        <span role="button" css={dropDownable} onClick={() => { setProgramOpen(!programOpen) }}>{programOpen ? `👇` : `👉`} {translation[lang].program} {programOpen ? `👇` : `👈`}</span>
                        <div style={programOpen ? { display: "block" } : { display: "none" }}>
                            {plan.map((e, i) =>
                                <div key={i} css={programBlock}>
                                    <h5>Bloque #{i + 1} {e.intermission !== undefined && <span css={intermissionStyle}>(Intermisión)</span>} : {e.title}</h5>
                                    <p>{e.description}</p>
                                    {e.intermission !== undefined &&
                                        <>
                                            <h4><span css={intermissionStyle}>Intermisión:</span> {e.intermission.title}</h4>
                                            <p>{e.intermission.description}</p>
                                        </>
                                    }
                                </div>)}
                        </div>
                    </>}
                {goals && incomingOrLive &&
                    <> {  /* eslint-disable-next-line */ }
                        <span css={dropDownable} role="button" onClick={() => { setGoalsOpen(!goalsOpen) }}>{goalsOpen ? `👇` : `👉`} {translation[lang].goals} {goalsOpen ? `👇` : `👈`}</span>
                        <div css={goalsBox} style={goalsOpen ? { display: "block" } : { display: "none" }}>
                            {goals.map((e, i) => <div key={i} css={programBlock}><h5>[{e.reached ? '✓' : '✖'}] {e.maxViewers} {translation[lang].visits}</h5>{e.reached && <p css={{ color: "#12fb12", display: "flex", justifyContent: "center", alignItems: "center" }}>{translation[lang].done} <img aria-label=":Jijis:" src={cuteImg} alt=":Jijis:" draggable="false"></img></p>} <p css={{ padding: "2 5" }}>{e.message}</p></div>)}
                        </div>
                    </>}
                {streamInThePast && !isLive && <div>¡Síguele y entérate del próximo!</div>}
            </div>
        </>
    )
}

StreamCard.propTypes = {
    lang: PropTypes.string.isRequired
}

export default StreamCard

function msToTime(duration) {
    let seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
        days = Math.floor((duration / (1000 * 60 * 60 * 24)));

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return (days > 0 ? `${days}d ` : ``) + hours + ":" + minutes + ":" + seconds;
}

// COMPONENT STYLES

const intermissionStyle = {
    display: 'inline-block',
    color: '#00ff1f'
}
const dropDownable = {
    color: "#e2d7f7",
    cursor: "pointer",
    fontSize: "110%"
}

const streamTitle = {
    background: '#8d6dca',
    color: '#fff',
    padding: 8,
    borderRadius: 2
}
const programBlock = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    background: "#7b55c1",
    padding: 5,
    borderBottom: "2px dotted #6441a4"
}
const mainCard = {
    textAlign: "center",
    background: "#6441A4",
    margin: 5,
    padding: 15,
    color: "#fff",
    lineHeight: "2em",
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}
const streamStatus = {
    color: "#fff298",
    fontSize: "1.4em",
    border: "1px solid #b699ec",
    padding: 10,
    borderRadius: 5
}

const actionButton = {
    color: "#fff",
    padding: "2px 4px",
    background: "#a07dde",
    borderRadius: 3,
    textDecoration: "none",
    margin: "0.5em 0"
}

const goalsBox = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'self-start'
}