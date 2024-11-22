import styled, { keyframes } from "styled-components";
import { colors } from "../../Theme/colors";

// Анимация для плавного появления модального окна
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -60%);  // Начальное положение (чуть ниже)
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);  // Окончательное положение (по центру)
  }
`;

// Анимация для плавного появления Overlay (фон)
const overlayFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledRegisterModal = styled.div`
  position: fixed; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  background:  ${colors.bgcButton};
  width: 350px;
  padding: 20px;
  border-radius: 15px;
  z-index: 1000;
  display: flex;
  flex-direction: column; 
  align-items: center;    
  justify-content: center; 

  animation: ${fadeIn} 0.5s ease-out;



  h1 {
    color:  ${colors.colorWhite};
    margin-bottom: 20px;
    font-size: 34px;
    text-align: center;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  input {
    width: 100%;
    padding: 12px;
    border: 2px solid  ${colors.colorWhite};;
    border-radius: 8px;
    font-size: 16px;
    background: rgba(255, 255, 255, 0.1);
    color:  ${colors.colorWhite};
    outline: none;
    transition: 0.3s;
    box-sizing: border-box;
    

    &:focus {
      border-color:  ${colors.active};
      background: rgba(255, 255, 255, 0.3);
    }
  }

  button {
    width: 100%;
    padding: 15px;
    background:  ${colors.bgcButtonCursor};
    color:  ${colors.colorWhite};
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: bold;
    margin-top: 20px;



    &:hover {
      background-color:  ${colors.active};
      color:  ${colors.colorWhite};
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(1px);
    }
  }
  .ExitButton {
    width: 50px;
    height: 50px;
    background: ${colors.bgcButtonCursor};
    border-radius: 50%;
    z-index: 1100;
    position: absolute;
    right: -20px;
    top: -20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ExitButton:hover {
    width: 50px;
    height: 50px;
    background: ${colors.active};
    border-radius: 50%;
    z-index: 1100;
    position: absolute;
    right: -20px;
    top: -20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s ease;
    transform: translateY(-2px);
  }
  .Exit {
    position: absolute;
    width: 30px;
    height: 4px;
    border-radius: 20px;
    background-color: white;
  }
  
  .Exit.horizontal {
    transform: rotate(45deg); /* Горизонтальная линия */
  }
  
  .Exit.vertical {
    transform: rotate(-45deg); /* Вертикальная линия */
  }
  
`;

export const ModalOverlay = styled.div`
  position: fixed; /* Фиксируем на экране */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Затемняем фон с полупрозрачным черным */
  backdrop-filter: blur(5px); /* Эффект размытия фона */
  z-index: 1000; /* Под модальным окном */

  /* Плавное появление overlay */
  animation: ${overlayFadeIn} 0.3s ease-out;
`;
