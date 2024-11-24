// index.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { GlobalStyle } from './Theme/globalStyle.ts';
import { Provider } from 'react-redux';
import store from './Store/store.ts';
import { ThemeProvider } from 'styled-components'; // Импортируем ThemeProvider из styled-components
import { ThemeProvider as AppThemeProvider, useTheme } from '../src/Theme/ThemeContext.tsx'; // Импортируем ваш контекст

const Root = () => {
  const { colors } = useTheme(); // Получаем цвета из вашего контекста темы

  return (
    <ThemeProvider theme={colors}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AppThemeProvider> {/* Оборачиваем в ваш контекст провайдера темы */}
        <Root />
      </AppThemeProvider>
    </Provider>
  </StrictMode>
);
