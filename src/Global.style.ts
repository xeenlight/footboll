import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Open Sans";
  }

  body {
    height: 100%; /* Растягиваем body на всю высоту экрана */
    background-color: RGB(239, 238, 239);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    display: flex;
    flex-direction: column;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Растягиваем root на всю высоту экрана */
  }

  .main-content {
    flex-grow: 1; /* Основной контент растягивается на оставшееся пространство */
  }
`;
