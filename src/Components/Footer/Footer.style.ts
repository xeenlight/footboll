import styled from "styled-components";
import { colors } from "../../Theme/colors";

export const StyledFooter = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 20px;
  background: ${colors.headerFooter};
  color: ${colors.colorWhite};
  font-size: 18px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  text-align: center;

  .infoRight {
    display: flex;
    gap: 20px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }

  /* Для мобильных устройств (адаптивность) */
  @media (max-width: 800pxpx) {
    flex-direction: column;
    gap: 10px;
    text-align: center;

    .infoRight {
      display: flex;
      gap: 20px;
      flex-direction: column;
      align-items: center;
    }
  }

  a {
    text-decoration: none;
    color: ${colors.colorWhite};
    display: flex;
    align-items: center;
    gap: 10px;
  }

  img {
    width: 35px;
    height: auto;
    filter: brightness(0) invert(1);
  }
`;
