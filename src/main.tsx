import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import './tailwind.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
