import { useContext, useEffect, useMemo, useState } from 'react'
import { Modal } from '@arco-design/web-react'
import { useMemoizedFn } from 'ahooks'
import { TEMPLATECONFIG, templateLoader } from '@/utils/loader/template-loader'
import type { TemplateConfig } from '@/utils/loader/template-loader'
import type { CLD } from '@/store/reducer'
import { AppContext } from '@/store/provide'
import { actions } from '@/store/actions'

function ControlPanel() {
  const [loading, setLoading] = useState(false)
  const { dispatch } = useContext(AppContext)

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

  const loadTemplate = useMemoizedFn((config: TemplateConfig) => {
    Modal.confirm({
      title: '警告',
      content: '确定要加载模版吗，当前的数据将会被覆盖。',
      confirmLoading: loading,
      onOk: async () => {
        setLoading(true)
        const res: CLD = await templateLoader(config.template)
        setLoading(false)
        res.user = 'Afe1'
        res.date = new Date()
        dispatch({ type: actions.INIT_STATE, payload: res })
      },
    })
  })

  const templatePanel = useMemo(() => {
    return (
      <div>
        {
          CONFIG.map((row, rowIdx) => {
            return (
              <div className="mt-[15px] flex items-center" key={rowIdx}>
                <div className="mx-[15px] w-full cursor-pointer" onClick={() => row[0] && loadTemplate(row[0])}>{getConfig(row[0])}</div>
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
  }, [CONFIG, loadTemplate])

  return (
    <div className="pCONFIGx-[10px] w-[260px] overflow-y-auto">
      {templatePanel}
    </div>
  )
}

export { ControlPanel }
