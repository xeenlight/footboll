import { useState, useEffect, SetStateAction } from "react";
import { StyledHeader } from "./Header.style";
import { LoginModal } from "../LoginModal/LoginModal";
import { RegisterModal } from "../RegisterModal/RegisterModal";
import { useTheme } from "../../Theme/themeContext";

// Интерфейс для данных пользователя
interface UserData {
  username: string;
  // другие возможные поля
}

export const Header = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null); // Типизировано
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для бургер-меню
  const { toggleTheme } = useTheme(); // Получаем текущую тему


  useEffect(() => {
    const savedUserData = localStorage.getItem("currentUser");
    if (savedUserData) {
      setUserData(JSON.parse(savedUserData));
    }
  }, []);

  const handleLoginClick = () => {
    setLoginModalOpen(true);
  };

  const handleRegisterClick = () => {
    setRegisterModalOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setUserData(null);
    window.location.reload(); // Перезагружаем страницу
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const closeRegisterModal = (newUserData: UserData | null) => { // Типизировано
    setRegisterModalOpen(false);
    if (newUserData) {
      localStorage.setItem("currentUser", JSON.stringify(newUserData));
      setUserData(newUserData);
    }
  };

  const handleLoginSuccess = (userData: SetStateAction<UserData | null>) => { // Типизировано
    setUserData(userData);
  };

  return (
    <StyledHeader>
      <h1>Football Stats</h1>
    
      <div className="burger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
      </div>
      
      <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="/">Football Leagues</a>
          </li>
          <li>
            <a href="/MatchToday">Match Today</a>
          </li>
          <li>
            <a href="/SavedMatchesPage">Save Match</a>
          </li>
        </ul>


        {/* Кнопки входа и регистрации в бургер-меню */}
        <div className="ButtonsBurger">
        <button className="ThemeBurger" onClick={toggleTheme}>Theme</button>
          {userData ? (
            <>
              <div className="Login">{userData.username}</div>
              <div className="Register" onClick={handleLogout}>
                Exit
              </div>
            </>
          ) : (
            <>
              <div className="Login" onClick={handleLoginClick}>
                Login
              </div>
              <div className="Register" onClick={handleRegisterClick}>
                Register
              </div>
            </>
          )}
        </div>
      </nav>

      {/* Кнопки входа и регистрации */}
      <div className="Buttons">
        {userData ? (
          <>
            <div className="Login">{userData.username}</div>
            <div className="Register" onClick={handleLogout}>
              Exit
            </div>
          </>
        ) : (
          <>
            <div className="Login" onClick={handleLoginClick}>
              Login
            </div>
            <div className="Register" onClick={handleRegisterClick}>
              Register
            </div>
          </>
        )}
      </div>
      
      {isLoginModalOpen && (
        <LoginModal
          onClose={closeLoginModal}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
      {isRegisterModalOpen && (
        <RegisterModal
          onClose={() => closeRegisterModal(null)}
          onRegisterSuccess={(newUserData) => closeRegisterModal(newUserData)}
        />
      )}
    </StyledHeader>
  );
};
