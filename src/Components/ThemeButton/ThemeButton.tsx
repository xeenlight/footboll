import { StyledThemeButton } from "./ThemeButton.style";
import { useTheme } from "../../Theme/themeContext";

export const ThemeButton = () => {
  const { toggleTheme, theme } = useTheme(); 
  return (
    <StyledThemeButton>
      <button className="Theme" onClick={toggleTheme}>
        <img
          src={
            theme === "dark"
              ? "https://cdn3.iconfinder.com/data/icons/feather-5/24/sun-256.png"
              : "https://cdn3.iconfinder.com/data/icons/meteocons/512/moon-black-512.png"
          }
          alt="Theme Icon"
        />
      </button>
    </StyledThemeButton>
  );
};
