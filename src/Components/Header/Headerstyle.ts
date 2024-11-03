import styled from "styled-components";

export const StyledHeader = styled.div`
width: 100%;
background-color: rgba(128, 128, 128, 0.12); 
/* backdrop-filter: blur(15px);  */
box-shadow: 0px 0px 25px rgba(228, 428, 428, 0.6);
display: flex;
justify-content: space-between;
padding: 10px 20px;
align-items: center; 
.Buttons{
  display: flex;

  align-items: center;
  .Login {
    width: 120px;
    height: 40px;
    background-color: aqua;
    display: flex;
    align-items: center;
    justify-content: center; 
    clip-path: polygon(
    82% 100%, 
    30% 100%, 
    0% 100%, 
    0% 65%,
    30% 0%, 
    100% 0%,
    100% 26%, 
    82% 75%  
);
margin-right: -15px; /* Отрицательный отступ для наложения */
}

  .Register {
    width: 120px;
    height: 40px;
    background-color: rebeccapurple;
    display: flex;
    align-items: center; 
    justify-content: center; 
    clip-path: polygon(
    18% 0%, 
    70% 0%, 
    100% 0%, 
    100% 35%, 
    70% 100%, 
    0% 100%, 
    0% 74%, 
    18% 25%  
);


  }
  
}
`
