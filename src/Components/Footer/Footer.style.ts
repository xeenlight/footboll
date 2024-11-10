import styled from "styled-components";

export const StyledFooter = styled.div`
width: 100%;
position: fixed;
bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: rgb(33, 186, 69);
  font-size: 20px;
  font-weight: 600;
  flex-wrap: wrap;
  gap: 20px 0px;
  a {
    gap: 10px;
    text-decoration: none;
    display: flex;
    align-items: center;
    color: #000;
  }
  img {
    width: 35px;
  }
  .infoRight {
    display: flex;
    flex-wrap: wrap;
    gap: 20px 50px;
  }
`;
