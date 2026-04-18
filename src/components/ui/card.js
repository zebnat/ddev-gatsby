import cn from '../../lib/ui/cn.js'

export function Card({ className, as: Component = 'article', ...props }) {
  return (
    <Component
      className={cn(
        'rounded-xl border border-cyan-300/20 bg-slate-950/70 p-5 shadow-[var(--surface-shadow)] backdrop-blur',
        className
      )}
      {...props}
    />
  )
}

export function CardHeader({ className, ...props }) {
  return <div className={cn('mb-3 space-y-1', className)} {...props} />
}

export function CardTitle({ className, as: Component = 'h3', ...props }) {
  return (
    <Component
      className={cn(
        'text-lg font-semibold tracking-tight text-slate-100',
        className
      )}
      {...props}
    />
  )
}

export function CardDescription({ className, ...props }) {
  return (
    <p
      className={cn('text-sm leading-relaxed text-slate-300/90', className)}
      {...props}
    />
  )
}

export function CardContent({ className, ...props }) {
  return <div className={cn('space-y-3', className)} {...props} />
}
