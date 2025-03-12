import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/global.css'
import './styles/tailwind.css'

import App from './App'
import { image } from './modules/image'
import { register } from './utils/loader'

register(image)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
