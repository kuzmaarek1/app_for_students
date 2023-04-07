import styled, { css } from "styled-components";

export const HeaderDetails = styled.header`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Header = styled.h1`
  width: 50%;
  margin-left: 2vw;
  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  gap: 5px;
  @media (max-width: 640px) {
    width: 100%;
    justify-content: center;
  }
`;
