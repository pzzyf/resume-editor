import { useState } from 'react'
import { AppProvider } from './store/provide'
import { Header } from './views/header'
import { MainPanel } from './views/main-panel'
import { ControlPanel } from './views/control-panel'
import { EditorPanel } from './views/editor-panel'

export default function App() {
  const [isRender, setIsRender] = useState(false)

  function exportPDF() {
    setIsRender(true)
  }

  return (
    <div className="h-full">
      <AppProvider mode={isRender ? 'editor' : 'render'}>
        <Header exportPDF={exportPDF} />
        <div className="flex h-screen-50 w-full overflow-auto">
          <ControlPanel />
          <MainPanel
            className="h-full flex-1 overflow-auto bg-[#eee]"
            rowHeight={8}
            cols={60}
            minHeight="296mm"
            allowOverlap={true}
          />
          <EditorPanel />
        </div>
      </AppProvider>
    </div>
  )
}
