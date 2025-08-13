import type { ContextType } from '@/store/context'
import { useState } from 'react'
import { AppProvider } from '@/store/context'
import { ControlPanel } from '@/views/control-panel'
import { Header } from '@/views/header'
import { MainPanel } from '@/views/main-panel'

function App() {
  const [mode] = useState<ContextType['mode']>('editor')

  return (
    <div className="size-full overflow-hidden">
      <AppProvider mode={mode}>
        <Header />
        <div className="flex h-[calc(100vh-50px)]">
          <ControlPanel />
          <MainPanel />
        </div>
      </AppProvider>
    </div>
  )
}

export default App
