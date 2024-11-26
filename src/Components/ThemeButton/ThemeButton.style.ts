import styled from "styled-components";

export const StyledThemeButton = styled.button`
  position: fixed; 
  right: 20px; 
  bottom: 80px; 
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.theme};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); 
  transition: all 0.3s ease; 
  
  &:hover {
    transform: scale(1.1); 
  }
  
  &:active {
    transform: scale(0.95); 
  }

  img {
    width: 24px;
    height: 24px;
    filter: invert(1); 
  }

  @media (max-width: 800px) {
    display: none; 
  }
`;
