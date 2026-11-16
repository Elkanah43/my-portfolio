import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App.jsx'

// Session 6, Part C, step 2: wrap what is already there. Delete nothing.
// Without this you get "useRoutes() may be used only in the context of a
// Router" and a blank white page.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
