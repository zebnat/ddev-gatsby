import cn from '../../lib/ui/cn.js'

export default function SectionHeader({
  eyebrow,
  title,
  description,
  className,
}) {
  return (
    <header className={cn('space-y-2', className)}>
      {eyebrow ? (
        <p className="inline-flex rounded-full border border-cyan-300/35 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-semibold text-slate-100 sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
          {description}
        </p>
      ) : null}
    </header>
  )
}
