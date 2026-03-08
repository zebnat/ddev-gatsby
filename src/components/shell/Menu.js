import Link from 'next/link'

export default function Menu({ menuItems }) {
  return (
    <nav
      aria-label="Primary navigation"
      className="mb-6 overflow-x-auto rounded-xl border border-cyan-300/20 bg-slate-950/65 p-2 shadow-[var(--surface-shadow)]"
    >
      <ul className="m-0 flex list-none flex-wrap gap-1 p-0">
        {menuItems.map((item) => (
          <li key={`${item.lang}-${item.uniqueId}`}>
            <Link
              href={item.fullRoute}
              className="inline-flex rounded-md px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-cyan-400/15 hover:text-cyan-100"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
