import styled from "styled-components";

export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: center;
  padding-top: 0px;
  margin: 10px;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
