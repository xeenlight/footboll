// ThemeButton.tsx
import React from "react";
import { useTheme } from "../../Theme/themeContext"; // Используем контекст для переключения темы
import { StyledThemeButton } from "./ThemeButton.style";


const ThemeButton: React.FC = () => {
  const { toggleTheme, theme } = useTheme(); // Получаем функцию и состояние темы из контекста

  return (
    <StyledThemeButton className="Theme" onClick={toggleTheme}>
      {/* Условно меняем картинку в зависимости от темы */}
      <img
        src={
          theme === "dark"
            ? "https://cdn3.iconfinder.com/data/icons/feather-5/24/sun-256.png"
            : "https://cdn3.iconfinder.com/data/icons/meteocons/512/moon-black-512.png"
        }
        alt="Theme Icon"
      />
    </StyledThemeButton>
  );
};

export default ThemeButton;
