import styled from "styled-components";

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

  .ButtonsBurger {
    display: none;
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


  ul {
    display: flex;
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

  .burger-menu {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 25px;
    cursor: pointer;
    span {
      background-color: #fff;
      height: 4px;
      width: 100%;
      transition: all 0.3s ease;
    }
  }

  /* Мобильная версия */
  @media (max-width: 768px) {
    padding: 10px 15px;

    .menu {
      display: none;
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 70px;
      right: 20px;
      background-color: #2575fc;
      width: 200px;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
    ul {
      display: flex;
      flex-direction: column;
    }
    .menu.open {
      display: flex;
    }

    .burger-menu {
      display: flex;
    }

    .Buttons {
      display: none;
    }
    .ButtonsBurger {
      display: flex;
      flex-direction: column;
    }
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
      }

      &.Register {
        background: #9c27b0;
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
  @media (max-width: 768px) {
    padding: 10px 15px;

    .menu {
      display: none;
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 70px;
      right: 20px;
      background: linear-gradient(135deg, #6a11cb, #2575fc);
      width: 250px;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    }

    .menu.open {
      display: flex;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 1px;
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        width: 100%;
        text-align: center;
        transition: transform 0.3s ease;
        font-size: 28px;
        a {
          display: block;
          width: 100%;
          color: #fff;
          text-decoration: none;
          font-weight: bold;
          transition: background 0.3s ease;
          &:hover {
            background-color: #00bcd4;
          }
        }
      }
    }

    .burger-menu {
      display: flex;
    }

    .Buttons {
      display: none;
    }

    .ButtonsBurger {
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 100%;


      .Login,
      .Register {
        width: 100%;
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
        margin-top: 10px;

        &.Login {


    background: #fff;
    color: #2575fc;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: bold;

        }

        &.Register {
          background: #fff;
    color: #2575fc;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: bold;
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
  }
`;
