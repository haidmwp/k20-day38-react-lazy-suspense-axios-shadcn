import { cn } from '@/lib/utils'
export function Input({className, type, ...props}) { return <input type={type} className={cn('flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-2 disabled:opacity-50', className)} {...props} /> }
