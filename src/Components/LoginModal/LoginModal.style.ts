import styled, { keyframes } from "styled-components";
import { colors } from "../../Theme/colors";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -60%);  
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%);  
  }
`;

const overlayFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledLoginModal = styled.div`
  position: fixed; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  background: ${colors.bgcButton};
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
    color: ${colors.colorWhite};
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
    border: 2px solid ${colors.colorWhite};
    border-radius: 8px;
    font-size: 16px;
    background: rgba(255, 255, 255, 0.1);
    color: ${colors.colorWhite};
    outline: none;
    transition: 0.3s;
    box-sizing: border-box;

    &:focus {
      border-color: ${colors.active};
      background: rgba(255, 255, 255, 0.3);
    }
  }

  button {
    width: 100%;
    padding: 15px;
    background: ${colors.bgcButtonCursor};
    color: ${colors.colorWhite};
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: bold;
    margin-top: 20px;

    &:hover {
      background-color: ${colors.active};
      color: ${colors.colorWhite};
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(1px);
    }
  }

  .forgot-password {
    color: ${colors.colorWhite};
    font-size: 14px;
    margin-top: 10px;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      color: ${colors.colorWhite};
    }
  }

`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Плавное появление overlay */
  animation: ${overlayFadeIn} 0.3s ease-out;
`;
