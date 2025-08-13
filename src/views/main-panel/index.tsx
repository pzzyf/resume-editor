import { useContext } from 'react'
import { AppContext } from '@/store/context'

export function MainPanel() {
  const { state } = useContext(AppContext)

  console.log('state :>> ', state)

  return (
    <div>123</div>
  )
}
