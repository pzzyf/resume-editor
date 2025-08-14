import { useEffect, useRef, useState } from 'react'
import { cn } from '@/utils'

interface ReferenceLineProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  cols: number
  rows: number
}

export function ReferenceLine(props: ReferenceLineProps) {
  const referenceLineRef = useRef<HTMLDivElement>(null)

  const [cellWidth, setCellWidth] = useState<number>(0)

  const calcCellWidth = () => {
    if (!referenceLineRef.current)
      return

    const width = referenceLineRef.current.getBoundingClientRect().width
    setCellWidth(width / props.cols)
  }

  useEffect(() => {
    calcCellWidth()
    window.addEventListener('resize', calcCellWidth)
    return () => {
      window.removeEventListener('resize', calcCellWidth)
    }
  }, [calcCellWidth, props.cols])

  return (
    <div
      ref={referenceLineRef}
      className={cn(1 && 'bg-[radial-gradient(circle,#999_0.8px,transparent_0)]')}
      style={{
        backgroundSize: `${cellWidth}px ${props.rows}px`,
        backgroundPositionX: cellWidth / 2,
        backgroundPositionY: -props.rows / 2,
        ...props.style,
      }}
    >
      {props.children}
    </div>
  )
}
