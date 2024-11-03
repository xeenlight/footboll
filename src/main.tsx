import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './Global.style.ts';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle/>
    <App />
  </StrictMode>,
)
