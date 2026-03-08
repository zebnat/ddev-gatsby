import Link from 'next/link'

import cn from '../../lib/ui/cn.js'

export default function TopBar({ languages, currentLang }) {
  return (
    <header className="mb-4 flex items-center justify-between rounded-xl border border-cyan-300/20 bg-slate-950/70 px-4 py-3 shadow-[var(--surface-shadow)] backdrop-blur">
      <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">
        Danieldev
      </span>
      <div className="flex items-center gap-2">
        {languages.map((item) => (
          <Link
            key={item.locale}
            href={item.url}
            aria-current={item.locale === currentLang ? 'page' : undefined}
            className={cn(
              'rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] transition',
              item.locale === currentLang
                ? 'border-cyan-300 bg-cyan-400/20 text-cyan-100'
                : 'border-slate-500/45 text-slate-300 hover:border-cyan-300/65 hover:text-cyan-100'
            )}
          >
            {item.locale.toUpperCase()}
          </Link>
        ))}
      </div>
    </header>
  )
}
