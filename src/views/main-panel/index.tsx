import { useContext } from 'react'
import { AppContext } from '@/store/context'
import { ReferenceLine } from './components/reference-line'

interface MainPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  cols: number
  rowHeight: number
  minHeight: string
}

export function MainPanel(props: MainPanelProps) {
  const { state } = useContext(AppContext)
  const instance = state.cld

  return (
    <div className={props.className}>
      <div className="w-[210mm] min-h-[294mm] my-[10px] mx-auto bg-[#fff] text-[var(--color-text-2)]">
        {instance.children.length
          ? (
              <>
                <ReferenceLine
                  cols={props.cols}
                  rows={props.rowHeight}
                  style={{ minHeight: props.minHeight }}
                >
                  1
                </ReferenceLine>
              </>
            )
          : <div>empty</div>}
      </div>
    </div>
  )
}
