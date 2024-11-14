import styled, { keyframes } from "styled-components";

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
  background: linear-gradient(135deg, #6a11cb, #2575fc);
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
    color: #fff;
    margin-bottom: 20px;
    font-size: 34px;
    font-family: "Roboto", sans-serif;
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
    border: 2px solid #fff;
    border-radius: 8px;
    font-size: 16px;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    outline: none;
    transition: 0.3s;
    box-sizing: border-box;
    

    &:focus {
      border-color: #2575fc;
      background: rgba(255, 255, 255, 0.3);
    }
  }

  button {
    width: 100%;
    padding: 15px;
    background: #fff;
    color: #2575fc;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: bold;
    margin-top: 20px;



    &:hover {
      background-color: #2575fc;
      color: white;
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(1px);
    }
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
  z-index: 999; /* Под модальным окном */

  /* Плавное появление overlay */
  animation: ${overlayFadeIn} 0.3s ease-out;
`;
