import * as React from 'react'
import { cn } from '@/lib/utils'

const Badge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { variant?: 'guide' | 'inspiration' | 'selection' | 'default' }
>(({ className, variant = 'default', ...props }, ref) => {
  const variants = {
    default: 'bg-white/10 text-white',
    guide: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
    inspiration: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
    selection: 'bg-gold-400/20 text-gold-300 border border-gold-400/30',
  }
  return (
    <div
      ref={ref}
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider',
        variants[variant],
        className
      )}
      {...props}
    />
  )
})
Badge.displayName = 'Badge'

export { Badge }
