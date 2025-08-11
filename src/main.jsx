
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import StateContext from './components/context/stateContext.jsx'

createRoot(document.getElementById('root')).render(

  <StateContext>
    <App />
  </StateContext>

)
