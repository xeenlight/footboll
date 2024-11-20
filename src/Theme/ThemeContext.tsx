import React, { createContext, useState, useEffect, ReactNode } from 'react';

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Получаем тему из localStorage или устанавливаем светлую тему по умолчанию
  const savedTheme = localStorage.getItem('theme') || 'light';
  
  const [theme, setTheme] = useState(savedTheme);

  useEffect(() => {
    // Сохраняем текущую тему в localStorage при изменении
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = (): ThemeContextType => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };
