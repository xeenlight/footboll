import styled from "styled-components";
import { colors } from "./colors";



export const StyledMainPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 100px 0;


h1{
  font-size: 50px;
  margin-bottom: 40px;
  color: ${colors.colorWhite};
  
  text-align: center;
}

  .Card{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;




