import { useContext } from 'react'
import { AppContext } from '@/store/context'
import { templateLoader } from '@/utils/loader/template-loader'

export function ControlPanel() {
  const { state, dispatch } = useContext(AppContext)

  async function handleClk() {
    const res = await templateLoader('/demo/index.json')
    dispatch({ type: 'update', payload: res })
  }

  return (
    <div className="w-[260px]">
      <div className="size-[100px] bg-blue-300" onClick={handleClk}>click</div>
      <div>{JSON.stringify(state)}</div>
    </div>
  )
}
