// Loader.tsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Анимация для лоадера
const l24 = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

// Контейнер для лоадера, который будет центрировать его
const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Занимает всю высоту экрана */
  width: 100%; /* Занимает всю ширину экрана */
`;

// Стили для самого лоадера
const LoaderCircle = styled.div`
  width: 100px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid #0000;
  border-right-color: #6a11cb;
  position: relative;
  animation: ${l24} 1s infinite linear;

`;

const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <LoaderCircle />
    </LoaderContainer>
  );
};

export default Loader;
