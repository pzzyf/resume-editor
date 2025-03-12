import { useContext, useState } from 'react'
import { AppContext, AppProvider } from './store/provide'

export default function App() {
  const [isRender, setIsRender] = useState(false)
  const context = useContext(AppContext)

  return (
    <AppProvider mode={isRender ? 'editor' : 'render'}>
      <div>{context.mode }</div>
    </AppProvider>
  )
}
