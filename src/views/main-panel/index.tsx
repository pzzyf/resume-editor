import type { HTMLAttributes } from 'react'
import { cn } from '@/utils'

export function MainPanel(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('bg-[#eeeeee] box-border p-4 overflow-y-auto [&::-webkit-scrollbar]:hidden', props.className)}>
      <div className="bg-[white] h-[1500px] overflow-x-hidden"></div>
    </div>
  )
}
