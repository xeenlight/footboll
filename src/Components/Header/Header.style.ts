import styled from "styled-components";
import { colors } from "../../Theme/colors";

export const StyledHeader = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${colors.headerFooter};
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1); 
  color: #fff;
  z-index: 1000;

  h1{
    font-size: calc(0.5vw + 22.4px);
  }
  .ButtonsBurger {
    display: none;
  }

  .Buttons {
    display: flex;
    align-items: center;
    gap: 10px;

    .Login,
    .Register {
      width: 120px;
      height: 40px;
      color: ${colors.colorWhite};
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 14px;
      cursor: pointer;
      border-radius: 8px;
      transition: all 0.3s ease;

      &.Login {
        background: ${colors.bgcButton};
      }

      &.Register {
        background: ${colors.active};
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
    gap: 30px;
    font-size: 25px;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      position: relative;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.1); /* Эффект увеличения при наведении */
      }

      a {
        color: #fff;
        text-decoration: none;
        font-weight: bold;
        display: inline-block;
        transition: color 0.3s ease;
        font-size: calc(0.5vw + 22.4px);
      }
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 3px;
        background-color: ${colors.active};
        transition: width 0.3s ease;
      }

      &:hover::after {
        width: 100%; /* Подчеркивание растягивается при наведении */
      }

      a:hover {
        color: ${colors.active}; /* Цвет ссылки при наведении */
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
      background-color: ${colors.colorWhite}; 
      height: 4px;
      width: 100%;
      transition: all 0.3s ease;
      border-radius: 20px;
    }
  }


  @media (max-width: 800px) {
    padding: 10px 15px;

    .menu {
      display: none;
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 70px;
      right: 20px;
      background: ${colors.bgcButton};
      width: 100%;
      max-width: 250px;
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
      gap: 10px;
      list-style: disc;
      padding: 0;
      margin: 0;
      margin-bottom: 10px;
      margin-left: 30px;
      li {
        width: 100%;
        transition: transform 0.3s ease;
        font-size: 28px;
        a {
          display: block;
          width: 100%;
          color: #fff;
          text-decoration: none;
          font-weight: bold;
          transition: background 0.3s ease;
          font-size: 21px;
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
        color: ${colors.colorWhite};
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
        border-radius: 8px;
        transition: all 0.3s ease;


        &.Login {


    background: ${colors.bgcButtonCursor};
    color: ${colors.colorWhite};
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: bold;

        }

        &.Register {
          background: ${colors.active};
          color: ${colors.colorWhite};
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
          background: ${colors.active};
          color: ${colors.colorWhite};
        }

        &:active {
          transform: scale(0.98);
        }
      }
    }
  }
`;
