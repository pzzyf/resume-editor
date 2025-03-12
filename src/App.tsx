import { useState } from 'react'
import { AppProvider } from './store/provide'
import { Header } from './views/header'
import { MainPanel } from './views/main-panel'
import { ControlPanel } from './views/control-panel'
import { EditorPanel } from './views/editor-panel'

export default function App() {
  const [isRender] = useState(false)

  return (
    <AppProvider mode={isRender ? 'editor' : 'render'}>
      <Header />
      <div className="flex">
        <ControlPanel />
        <MainPanel />
        <EditorPanel />
      </div>
    </AppProvider>
  )
}
