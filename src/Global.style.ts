import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    /* background-image: url(https://img.freepik.com/premium-photo/soccer-field-hd-8k-wall-paper-stock-photographic-image_890746-96586.jpg?w=1060); */
    background-size: calc(80vh + 1000px);
    background-repeat: no-repeat;
    background-position: top center;
    background-color: grey;


  }
`;
