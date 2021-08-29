import React, { useEffect, useState } from 'react'
import translation from '../../data/translations/streamerPage'
import { Helmet } from 'react-helmet'

const StreamCard = (props) => {

    const [isLive, setIsLive] = useState(null)
    const [timeLeft, setTimeLeft] = useState("Desconocido")
    const [goalsOpen, setGoalsOpen] = useState(false)
    const [programOpen, setProgramOpen] = useState(false)
    const [plan, setPlan] = useState(false)


    useEffect(() => {
        fetch('https://zebnat.github.io/twitch.json')
            .then(response => response.json())
            .then(data => {
                setIsLive(data.live)
                
                if(data.program !== undefined) {
                    setPlan(data.program)
                }

                if(data.timeleft) {
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
            message: translation[props.lang].done
        },
        {
            maxViewers: 40,
            reached: true,
            message: translation[props.lang].done
        },
        {
            maxViewers: 60,
            reached: true,
            message: translation[props.lang].reachable
        },
        {
            maxViewers: 80,
            reached: true,
            message: translation[props.lang].newModerator
        },
        {
            maxViewers: 100,
            reached: true,
            message: translation[props.lang].newArt
        },

    ]

    const when = (dt) => {
        var utcDate = new Date(dt).getTime();      
        var now = new Date().getTime();
        var distance = utcDate - now;

        if(distance <= 0) {
            return "???";
        }
        return msToTime(utcDate - now);
    }
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Zebnat Twitch Status</title>
                <style>{`html{margin:0; padding:0} body{margin:0;padding:0}`}</style>
            </Helmet>
            <div css={mainCard}>
                {isLive === true && <h1 css={streamStatus} dangerouslySetInnerHTML={{ __html: translation[props.lang].isLive }}></h1>}
                {isLive === false && <h1 css={streamStatus} dangerouslySetInnerHTML={{ __html: translation[props.lang].isNotLive }}></h1>}
                {isLive === null && <h1 css={streamStatus} dangerouslySetInnerHTML={{ __html: translation[props.lang].checkIsLive }}></h1>}
                
                <a href="https://www.twitch.tv/zebnat"><img css={{ margin: 0 }} src="https://zebnat.github.io/twitchtag.png" /></a>
                {isLive && <a dangerouslySetInnerHTML={{ __html: translation[props.lang].visitStream }} css={actionButton} href="https://www.twitch.tv/zebnat"></a>}
                {!isLive && <div>Siguiente Stream: {timeLeft}</div>}
                {plan && <h3 onClick={() => { setProgramOpen(!programOpen) }}>{translation[props.lang].program} {programOpen ? `👇` : `👈`}</h3>}
                {plan && <div style={programOpen ? { display: "block" } : { display: "none" }}>
                    {plan.map((e, i) => <div key={i} css={programBlock}><h5>#{i+1} {e.title}</h5><p>{e.description}</p></div>)}
                </div>}
                <h3 onClick={() => { setGoalsOpen(!goalsOpen) }}>{translation[props.lang].goals} {goalsOpen ? `👇` : `👈`}</h3>
                <div css={goalsBox} style={goalsOpen ? { display: "block" } : { display: "none" }}>
                    {goals.map((e, i) => <div key={i} css={{ fontSize: "80%" }}>[{e.reached ? '✓' : '✖'}] <span>{e.maxViewers} {translation[props.lang].visits}</span> ⇨ {e.message}</div>)}
                </div>
            </div>
        </>
    )
}

export default StreamCard

function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds;
  }

// COMPONENT STYLES

const programBlock = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    background: "#7b55c1",
    padding: 5
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
    fontSize: "1.4em"
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