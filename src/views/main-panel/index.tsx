import { useContext, useState } from 'react'
import { ReferenceLine } from './components/reference-line'
import { AppContext } from '@/store/provide'

interface MainPanelProps {
  className: string
  rowHeight: number
  cols: number
  minHeight: string
  allowOverlap: boolean
}

export const MainPanel: React.FC<MainPanelProps> = (props) => {
  const [dragging] = useState(false)

  const { state, mode } = useContext(AppContext)
  const instance = state.cld
  const isRender = mode === 'render'
  const { minHeight, rowHeight, cols } = props

  return (
    <div className={`${props.className}`}>
      <div className={`mx-auto my-[10px] min-h-[296mm] w-[210mm] bg-white  ${!isRender && 'hover:shadow-none'}`}>
        {
          instance.children.length
            ? (
                <>
                  <ReferenceLine
                    style={{ minHeight }}
                    display={!isRender && dragging}
                    rows={rowHeight}
                    cols={cols}
                  >
                    <div className="h-screen">456</div>
                  </ReferenceLine>
                </>
              )
            : (
                <>
                  <div>2</div>
                </>
              )
        }
      </div>
    </div>
  )
}
