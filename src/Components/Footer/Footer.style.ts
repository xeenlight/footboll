import styled, { keyframes } from "styled-components";



export const StyledFooter = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 20px;
  background: linear-gradient(135deg, #6a11cb, #2575fc); /* Градиент для фона */
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;


  /* Для мобильных устройств (адаптивность) */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  img {
    width: 35px;
    height: auto;
    filter: brightness(0) invert(1)
  }

  .infoRight {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
`;

