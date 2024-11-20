import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './Store/store.ts'
import { ThemeProvider } from './Theme/ThemeContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider> {/* Оборачиваем все в ThemeProvider */}
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>
)
