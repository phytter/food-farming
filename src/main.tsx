import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './main/routes/router'
import './presentation/styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
