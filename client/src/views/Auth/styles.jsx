import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  height: 92.5vh;
`;

export const WrapperAnimate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  ${({ isLogin }) =>
    isLogin
      ? css`
          animation-name: backInLeft;
          animation-duration: 0.5s;
        `
      : css`
          animation-name: backInRight;
          animation-duration: 0.5s;
          overflow-x: hidden;
        `}
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-top: ${({ isLogin }) => (isLogin ? "-5vh" : "0vh")};
`;
export const Form = styled.form`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5vh;
`;
