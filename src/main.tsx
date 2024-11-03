import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './Global.style.ts';
import { Provider } from 'react-redux';
import store from './Store/store.ts';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Provider store={store}>
    <GlobalStyle/>
    <App />
    </Provider>
  </StrictMode>,
)
