import { forwardRef } from 'react'

import cn from '../../lib/ui/cn.js'

const variantClassNames = {
  primary:
    'bg-cyan-400 text-slate-950 hover:bg-cyan-300 focus-visible:outline-cyan-300',
  secondary:
    'border border-cyan-300/40 bg-slate-900 text-cyan-100 hover:border-cyan-300/70 hover:bg-slate-800 focus-visible:outline-cyan-200',
  ghost:
    'bg-transparent text-cyan-100 hover:bg-cyan-300/10 focus-visible:outline-cyan-200',
}

const sizeClassNames = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-11 px-5 text-base',
}

const Button = forwardRef(function Button(
  { className, variant = 'primary', size = 'md', type = 'button', ...props },
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        'inline-flex items-center justify-center rounded-md font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50',
        variantClassNames[variant],
        sizeClassNames[size],
        className
      )}
      {...props}
    />
  )
})

export default Button
