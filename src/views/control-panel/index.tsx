import { useMemo } from 'react'
import { TEMPLATECONFIG } from '@/utils/loader/template-loader'
import type { TemplateConfig } from '@/utils/loader/template-loader'

function ControlPanel() {
  const CONFIG: TemplateConfig[][] = useMemo(() => {
    const result: any = []
    TEMPLATECONFIG.forEach((item, index) => {
      if (index % 2 === 0) {
        result.push([item])
      }
      else {
        result[Math.floor(index / 2)].push(item)
      }
    })
    return result
  }, [])

  const getConfig = (item: TemplateConfig) => {
    return (
      <>
        <div className="h-[130px] w-full overflow-hidden border-[3px] border-solid border-[#eee]">
          <img src={item.image} className="w-full object-contain" />
        </div>
        <div className="mt-[5px] text-center text-[12px] text-[#4e5969]">{item.name}</div>
      </>
    )
  }

  const templatePanel = useMemo(() => {
    return (
      <div>
        {
          CONFIG.map((row, rowIdx) => {
            return (
              <div className="mt-[15px] flex items-center" key={rowIdx}>
                <div className="mx-[15px] w-full cursor-pointer">{getConfig(row[0])}</div>
                <div className="mx-[15px] w-full">
                  {row[1] && (
                    <div className="cursor-pointer">
                      {getConfig(row[1])}
                    </div>
                  )}
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }, [])

  return (
    <div className="w-[260px] overflow-y-auto px-[10px]">
      {templatePanel}
    </div>
  )
}

export { ControlPanel }
