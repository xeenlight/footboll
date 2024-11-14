import styled, { keyframes } from "styled-components";

// Анимация для появления хедера
const fadeInHeader = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledHeader = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(272deg, #6a11cb, #2575fc); /* Градиент для фона */
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1); /* Тень для выделения */
  color: #fff;
  z-index: 1000;
  animation: ${fadeInHeader} 0.5s ease-out; /* Анимация появления */

  /* Для мобильных устройств */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 15px;
  }

  .logo {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
    cursor: pointer;

    &:hover {
      color: #ffd700; /* Цвет при наведении */
    }
  }

  .Buttons {
    display: flex;
    align-items: center;

    .Login,
    .Register {
      width: 120px;
      height: 40px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 14px;
      cursor: pointer;
      border-radius: 8px;
      transition: all 0.3s ease;


      &.Login {
        background: #00bcd4;
        clip-path: polygon(
          82% 100%,
          30% 100%,
          0% 100%,
          0% 65%,
          30% 0%,
          100% 0%,
          100% 26%,
          82% 75%
        );
        position: relative; 
        left: 10px;
      }


      &.Register {
        background: #9c27b0;
        clip-path: polygon(
          18% 0%,
          70% 0%,
          100% 0%,
          100% 35%,
          70% 100%,
          0% 100%,
          0% 74%,
          18% 25%
        );
      }

      &:hover {
        transform: scale(1.05);
        opacity: 0.9;
      }

      &:active {
        transform: scale(0.98);
      }
    }
  }

  /* Ссылки в меню */
  ul {
    display: flex;
    gap: 30px;
    font-size: 25px;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      position: relative;
      text-align: center;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.1); /* Эффект увеличения при наведении */
      }

      a {
        color: #fff;
        text-decoration: none;
        font-weight: bold;
        display: inline-block;
        padding: 5px 0;
        transition: color 0.3s ease;
      }

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 3px;
        background-color: #ffd700; /* Цвет подчеркивания */
        transition: width 0.3s ease;
      }

      &:hover::after {
        width: 100%; /* Подчеркивание растягивается при наведении */
      }

      a:hover {
        color: #ffd700; /* Цвет ссылки при наведении */
      }
    }
  }
`;
