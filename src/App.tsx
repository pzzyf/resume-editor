import type { ContextType } from '@/store/context'
import { useState } from 'react'
import { AppProvider } from '@/store/context'
import { ControlPanel } from '@/views/control-panel'
import { Header } from '@/views/header'
import { MainPanel } from '@/views/main-panel'

function App() {
  const [mode] = useState<ContextType['mode']>('editor')

  return (
    <div className="size-full">
      <AppProvider mode={mode}>
        <Header />
        <div className="flex">
          <ControlPanel />
          <MainPanel className="flex-1" />
        </div>
      </AppProvider>
    </div>
  )
}

export default App
