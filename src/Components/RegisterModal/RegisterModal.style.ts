import styled from "styled-components";

export const StyledRegisterModal = styled.div`
  position: fixed; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); 
  width: 350px;
  height: 450px;

  background-color: rgba(128, 128, 128, 0.12); 
  backdrop-filter: blur(5px); /* Эффект размытия фона */
  background-image: url(https://i.postimg.cc/d1xwX8Th/Login.png);
  background-size: 570px;

  backdrop-filter: blur(10px);
background-position: -150px -35px; /* 10px от левого края и 20px от верхнего */
background-repeat: no-repeat;
  padding: 10px 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column; 
  align-items: center;    
  justify-content: center; 

  h1 {
    margin-bottom: 15px;
    text-align: center; 
  }

  button {
    display: block;
    width: 300px;
    margin-bottom: 10px;
    background-color: transparent;
    padding: 12px 15px;
    background-color: #f6f6f6;
    border: 1px solid transparent;
    transition: 200ms;
    outline: 0;
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
`;
