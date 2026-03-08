import Link from 'next/link'

export default function Menu({ menuItems }) {
  return (
    <nav aria-label="Primary navigation" style={styles.nav}>
      <ul style={styles.list}>
        {menuItems.map((item) => (
          <li key={`${item.lang}-${item.uniqueId}`} style={styles.item}>
            <Link href={item.fullRoute}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const styles = {
  nav: {
    borderBottom: '1px solid #d7d7d7',
    marginBottom: 16,
  },
  list: {
    margin: 0,
    padding: '8px 0',
    listStyle: 'none',
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
  },
  item: {
    margin: 0,
  },
}
