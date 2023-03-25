import styled from "styled-components";

export const Button = styled.button`
  width: ${({ width }) => (width ? width : "200px")};
  height: ${({ height }) => (height ? height : "50px")};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid
    ${({ color, theme }) =>
      color === "red" ? theme.colors.red : theme.colors.blue};
  color: ${({ color, theme }) =>
    color === "red" ? theme.colors.red : theme.colors.blue};
  background: ${({ color, theme }) =>
    color === "red" ? theme.colors.lightRed : theme.colors.lightBlue};
  font-size: 15px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  position: relative;
  cursor: pointer;
  transition-property: all;
  transition-timing-function: ease-in;
  transition-duration: 500ms;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: ${({ color, theme }) =>
      color === "red" ? theme.colors.red : theme.colors.blue};
    transition-property: all;
    transition-timing-function: ease-in;
    transition-duration: 300ms;
  }
  &:hover {
    color: #fff;
    letter-spacing: 0.2em;
  }
  &:hover:after {
    width: 100%;
  }
`;

export const Span = styled.span`
  position: relative;
  z-index: 2;
`;
