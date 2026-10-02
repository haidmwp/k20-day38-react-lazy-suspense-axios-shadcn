import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'
const variants = cva('inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2', { variants: { variant: { default: 'bg-primary text-primary-foreground hover:opacity-90', outline: 'border border-input bg-background hover:bg-muted' }, size: { default: 'h-10 px-4 py-2', sm: 'h-9 px-3' } }, defaultVariants: { variant: 'default', size: 'default' } })
export function Button({className, variant, size, asChild = false, ...props}) { const Comp = asChild ? Slot : 'button'; return <Comp className={cn(variants({variant, size}), className)} {...props} /> }
