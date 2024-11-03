import styled, { css } from "styled-components";

export const ErrorMessage = styled.p`
  color: #dc2020;
  margin-bottom: 10px;
`;
interface SInterfaceProps {
  $isError: boolean;
}
export const StyleInut = styled.input<SInterfaceProps>`
  display: block;
  width: 300px;
  margin-bottom: 10px;
  background-color: transparent;
  padding: 12px 15px;
  background-color: #f6f6f6;
  border: 1px solid transparent;
  transition: 200ms;
  border: 1px solid transparent;
  outline: 0;
  border: 2px solid #526ed3;

  &:last-child {
    margin-bottom: 30px;
  }
  &:is(:hover, :focus) {
    border-color: #526ed3;
  }

  ${(props) =>
    props.$isError &&
    css`
      border: 1px solid #dc2020;
      color: #dc2020;
    `}

  @media (max-width: 730px) {
    padding: 10px 12px;
  }
`;
