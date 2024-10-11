import styled from "styled-components";

export const Button = styled.button`
  z-index: 0;
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
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "15px")};
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
    transform: scaleX(0);
    width: 100%;
    transform-origin: left;
  }
  &:hover {
    color: #fff;
    letter-spacing: 0.2em;
  }
  &:hover:after {
    transform: scaleX(1);
  }
`;

export const Span = styled.span`
  position: relative;
  z-index: 2;
  padding-left: 0.1em;
  &:hover {
    padding-left: 0.2em;
  }
`;
