import { streamerPage } from '../../content/translations'

export default function StreamCardLite({ lang }) {
  const t = streamerPage[lang]

  return (
    <section style={styles.card}>
      <h2 style={styles.title}>{t.isNotLive}</h2>
      <p>{t.checkIsLive}</p>
      <a
        href="https://www.twitch.tv/zebnat"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t.visitStream}
      </a>
    </section>
  )
}

const styles = {
  card: {
    border: '1px solid #bbb',
    borderRadius: 8,
    padding: 12,
    textAlign: 'center',
  },
  title: {
    marginTop: 0,
  },
}
