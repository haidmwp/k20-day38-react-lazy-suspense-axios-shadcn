import * as D from '@radix-ui/react-dialog'
export const Dialog = D.Root
export const DialogTitle = D.Title
export const DialogDescription = D.Description
export function DialogContent({children, ...props}) { return <D.Portal><D.Overlay className="fixed inset-0 z-50 bg-black/50"/><D.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl bg-background p-6 shadow-xl max-h-[90vh] overflow-auto" {...props}>{children}</D.Content></D.Portal> }
