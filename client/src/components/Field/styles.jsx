import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 50px;
  width: 90vw;
  height: 50px;
  position: relative;
`;

export const Input = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  padding-left: 5%;
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: rgba(112, 112, 112, 0.1);
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  border: none;
  outline: none;
  &:focus {
    border: ${({ theme }) => `1.5px solid ${theme.colors.darkGrey}`};
  }
`;

export const Label = styled.label`
  position: absolute;
  width: 100px;
  top: 50%;
  left: 5%;
  right: auto;
  bottom: auto;
  transform: translate(0%, -50%);
  transition-property: transform;
  transition-timing-function: ease-in;
  transition-duration: 300ms;
  font-size: 15px;
  input:focus ~ && {
    transform: translate(-30%, -38px) scale(0.9);
    font-size: 12px;
    padding: 5px;
    padding-left: 6px;
    letter-spacing: 0.05em;
    color: white;
    background-color: ${({ theme }) => theme.colors.darkGrey};
    border-right: ${({ theme }) => `1.5px solid ${theme.colors.darkGrey}`};
    border-left: ${({ theme }) => `1.5px solid ${theme.colors.darkGrey}`};
  }
`;
