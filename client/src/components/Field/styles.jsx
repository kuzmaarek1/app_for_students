import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: ${({ headerList }) => (headerList ? "100%" : "90vw")};
  margin: 10px;
  margin-bottom: ${({ description, note }) =>
    description ? (note ? "340px" : "60px") : "10px"};
  height: 50px;
  position: relative;
`;

export const Input = styled.input`
  position: absolute;
  width: 100%;
  height: ${({ description, note }) =>
    description ? (note ? "380px" : "100px") : "50px"};
  ${({ description }) =>
    description &&
    css`
      resize: none;
      padding-top: 15px;
    `}

  ${({ exam }) =>
    exam &&
    css`
      margin-top: 20px;
      width: 100%;
      height: 20px;
    `}
  padding-left: 2.5%;
  padding-right: 2.5%;
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: rgba(112, 112, 112, 0.1);
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  border: none;
  outline: none;
  &:focus {
    border: ${({ theme, error }) =>
      error
        ? `1.5px solid ${theme.colors.red}`
        : `1.5px solid ${theme.colors.darkGrey}`};
  }
  ${({ empty }) =>
    !empty &&
    css`
      border: ${({ theme, error }) =>
        error
          ? `1.5px solid ${theme.colors.red}`
          : `1.5px solid ${theme.colors.darkGrey}`};
    `}
  &::placeholder {
    color: transparent;
  }
`;

export const Label = styled.label`
  position: absolute;
  width: ${({ big, headerList }) =>
    big ? "150px" : headerList ? "300px" : "100px"};
  top: 50%;
  left: 5%;
  right: auto;
  bottom: auto;
  transform: translate(0%, -50%);
  transition-property: transform;
  transition-timing-function: ease-in;
  transition-duration: 300ms;
  font-size: 15px;
  ${({ date, exam }) =>
    (date || exam) &&
    css`
      transform: translate(-30px, -38px) scale(0.9);
      font-size: 12px;
      padding: 5px;
      padding-left: 6px;
      letter-spacing: 0.05em;
      color: white;
      background-color: ${({ theme, error }) =>
        error ? theme.colors.red : theme.colors.darkGrey};
    `}
  ${({ exam }) =>
    exam &&
    css`
      top: 30px;
      right: 0;
      left: 75px;
      margin: auto;
    `}
  input:focus ~ &&,
  textarea:focus ~ && {
    transform: translate(-30px, -38px) scale(0.9);
    font-size: 12px;
    padding: 5px;
    padding-left: 6px;
    letter-spacing: 0.05em;
    color: white;
    background-color: ${({ theme, error }) =>
      error ? theme.colors.red : theme.colors.darkGrey};
  }

  ${({ error, empty, theme }) => {
    let backgroundColor = error ? theme.colors.red : theme.colors.darkGrey;
    if (!empty)
      return css`
        transform: translate(-30px, -38px) scale(0.9);
        font-size: 12px;
        padding: 5px;
        padding-left: 6px;
        letter-spacing: 0.05em;
        color: white;
        background-color: ${backgroundColor};
      `;
  }}
`;

export const Span = styled.span`
  position: absolute;
  bottom: ${({ description, note }) =>
    description ? (note ? "-345px" : "-63px") : "-15px"};
  display: flex;
  font-size: 11px;
  width: 100%;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.red};
  justify-content: flex-end;
`;
