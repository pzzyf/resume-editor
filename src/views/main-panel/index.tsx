import { useContext } from 'react'
import GridLayout, { WidthProvider } from 'react-grid-layout'
import { AppContext } from '@/store/context'
import { ReferenceLine } from './components/reference-line'

const ResponsiveGridLayout = WidthProvider(GridLayout)

interface MainPanelProps {
  cols: number
  rowHeight: number
  minHeight: string
}

export function MainPanel(props: MainPanelProps) {
  const { state } = useContext(AppContext)
  const instance = state.cld

  const { cols, rowHeight, minHeight } = props

  const layouts = generateLayout(instance.children, cols)

  return (
    <div className="flex-1 h-[100%] overflow-auto bg-[#eee]">
      <div className="w-[210mm] min-h-[294mm] my-[10px] mx-auto bg-[#fff] text-[var(--color-text-2)]">
        {instance.children.length
          ? (
              <>
                <ReferenceLine
                  cols={cols}
                  rows={rowHeight}
                  style={{ minHeight }}
                >
                  <ResponsiveGridLayout
                    className="w-full"
                    style={{ minHeight }}
                    layout={layouts}
                    cols={cols}
                    rowHeight={rowHeight}
                    measureBeforeMount
                    autoSize
                    draggableHandle=".pedestal-drag-dot"
                    margin={[0, 0]}
                    allowOverlap
                    useCSSTransforms={false}
                  >
                    {instance.children.map((item: any) => {
                      return (
                        <div
                          id={item.id}
                          key={item.id}
                        >
                          123
                        </div>
                      )
                    })}
                  </ResponsiveGridLayout>
                </ReferenceLine>
              </>
            )
          : <div>empty</div>}
      </div>
    </div>
  )
}
