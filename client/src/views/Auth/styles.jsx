import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

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

export const Icon = styled(FontAwesomeIcon)`
  width: 35px;
  height: 40px;
`;

export const SocialMediaButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.darkGrey};
  text-decoration: none;
  border: none;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  width: 65px;
  height: 70px;
  &:hover {
    background-color: ${({ backgroundColor }) =>
      backgroundColor ? backgroundColor : ""};
    color: white;
    cursor: pointer;
  }
`;

export const SocialsMediaWrapper = styled.div`
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:15px;
  margin-top:15px;
  }
`;
