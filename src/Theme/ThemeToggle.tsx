import { useTheme } from './ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} style={{ padding: '10px', fontSize: '16px' }}>
      Переключить тему: {theme === 'light' ? 'Светлая' : 'Темная'}
    </button>
  );
};
