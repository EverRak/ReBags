import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Prince.css'
import Principal from './Principal.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Principal />
  </StrictMode>,
)