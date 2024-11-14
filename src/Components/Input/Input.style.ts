import styled, { css } from "styled-components";

export const ErrorMessage = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: yellow;
  margin-bottom: 10px;
`;

interface SInterfaceProps {
  $isError: boolean;
}

export const StyleInut = styled.input<SInterfaceProps>`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  
  &:last-child {
    margin-bottom: 30px;
  }

  &:hover,
  &:focus {
    border-color: #526ed3;
  }

  ${(props) =>
    props.$isError &&
    css`
      border: 1px solid #dc2020;
      color: #dc2020;
    `}

  &::placeholder {
    color: #fff;
  }



  @media (max-width: 730px) {
    padding: 10px 12px;
  }
`;
