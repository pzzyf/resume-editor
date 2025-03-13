import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/global.css'
import './styles/tailwind.css'
import '@arco-design/web-react/dist/css/arco.css'

import App from './App'
import { image } from './modules/image'
import { blank } from './modules/blank'
import { richText } from './modules/text'

import { register } from './utils/loader'

register(image, blank, richText)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
