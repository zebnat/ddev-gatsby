import cn from '../../lib/ui/cn.js'

const variantClassNames = {
  neutral: 'border-slate-400/30 bg-slate-900/80 text-slate-200',
  accent: 'border-cyan-300/40 bg-cyan-400/20 text-cyan-100',
  warning: 'border-amber-300/45 bg-amber-400/20 text-amber-100',
}

export default function Badge({
  className,
  variant = 'neutral',
  as: Component = 'span',
  ...props
}) {
  return (
    <Component
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-wide',
        variantClassNames[variant],
        className
      )}
      {...props}
    />
  )
}
