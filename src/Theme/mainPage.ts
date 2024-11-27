import styled from "styled-components";




export const StyledMainPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
padding: 100px 0 calc(-6.3vw + 220px);

h1{
  font-size: 50px;
  margin-bottom: 40px;
  color:  ${({ theme }) => theme.text};
  
  text-align: center;
}

  .Card{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;




