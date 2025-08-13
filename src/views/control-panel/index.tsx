import { useContext } from 'react'
import { AppContext } from '@/store/context'

export function ControlPanel() {
  const { state, dispatch } = useContext(AppContext)

  async function handleClk() {
    dispatch({ type: 'update', payload: { user: 'afe1', date: new Date(), children: [] } })
  }

  return (
    <div className="w-[260px]">
      <div className="size-[100px] bg-blue-300" onClick={handleClk}>click</div>
      <div>{JSON.stringify(state)}</div>
    </div>
  )
}
