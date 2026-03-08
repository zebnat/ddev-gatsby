import Link from 'next/link'

export default function TopBar({ languages, currentLang }) {
  return (
    <header style={styles.header}>
      <span style={styles.title}>Danieldev</span>
      <div style={styles.languages}>
        {languages.map((item) => (
          <Link
            key={item.locale}
            href={item.url}
            style={item.locale === currentLang ? styles.current : undefined}
          >
            {item.locale.toUpperCase()}
          </Link>
        ))}
      </div>
    </header>
  )
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontWeight: 700,
  },
  languages: {
    display: 'flex',
    gap: 8,
  },
  current: {
    textDecoration: 'underline',
    fontWeight: 700,
  },
}
