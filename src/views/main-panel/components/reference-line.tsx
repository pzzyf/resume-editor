import { useMemoizedFn } from 'ahooks'
import { useEffect, useRef, useState } from 'react'

interface ReferenceLineProps {
  style: React.CSSProperties
  display: boolean
  rows: number
  cols: number
  children: React.ReactNode
}

export const ReferenceLine: React.FC<ReferenceLineProps> = (props) => {
  const [cellWidth, setCellWidth] = useState(0)
  const referenceLineRef = useRef<HTMLDivElement>(null)

  const calcCellWidth = useMemoizedFn(() => {
    if (!referenceLineRef.current)
      return void 0
    const element = referenceLineRef.current
    const width = element.getBoundingClientRect().width - 2
    setCellWidth(width / props.cols)
  })

  useEffect(() => {
    calcCellWidth()
  }, [calcCellWidth, props.cols])

  return (
    <div
      ref={referenceLineRef}
      className="border border-transparent"
      style={{
        backgroundImage: props.display ? 'radial-gradient(circle, #999 0.8px, transparent 0)' : 'none',
        backgroundSize: `${cellWidth}px ${props.rows}px`,
        backgroundPositionX: cellWidth / 2,
        backgroundPositionY: props.rows / 2,
        ...props.style,
      }}
    >
      {props.children}
    </div>
  )
}
