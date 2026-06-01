import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors',
  {
    variants: {
      variant: {
        default: 'border-violet-500/30 bg-violet-500/10 text-violet-200',
        secondary: 'border-white/10 bg-white/[0.03] text-zinc-400',
        outline: 'border-white/15 text-zinc-300',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Badge({ className, variant, ...props }: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
  return <span data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge }
