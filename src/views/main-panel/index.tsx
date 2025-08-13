import type { HTMLAttributes } from 'react'
import { cn } from '@/utils'

export function MainPanel(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('', props.className)}>
      123
    </div>
  )
}
