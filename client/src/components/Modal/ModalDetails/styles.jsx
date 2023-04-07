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

export const DetailsWrapper = styled.div`
  display: grid;
  margin-top: 1vh;
  grid-template-columns: repeat(2, 1fr);
  overflow-y: auto;
  overflow-x: none;
  div:nth-child(4n),
  div:nth-child(4n + 3) {
    background-color: ${({ theme }) => theme.colors.grey};
  }
  @media (max-width: 640px) {
    overflow: scroll;
    grid-template-columns: repeat(1, 1fr);
    max-height: 65vh;
    div:nth-child(2n) {
      background-color: ${({ theme }) => theme.colors.grey};
    }
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  width: 100%;
  text-align: center;
  flex-wrap: wrap-reverse;
  overflow: auto;
  ${({ description }) =>
    description &&
    css`
      height: 20vh;
    `}
  ${({ boldText }) =>
    boldText &&
    css`
      font-weight: 800;
      @media (max-width: 640px) {
        height: 5vh;
      }
    `}
`;
