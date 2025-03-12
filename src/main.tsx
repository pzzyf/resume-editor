import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/global.css'
import './styles/tailwind.css'

function App() {
  return (
    <div>123</div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
