import styled from "styled-components";

export const StyledThemeButton = styled.div`

  width: 39px;
  height: 39px;
  border-radius: 50%;
  background: ${({ theme }) => theme.bgcColorBlack};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

.Theme img {
  width: 54px;
  height: 54px;
  filter: invert(1);
}




`;
