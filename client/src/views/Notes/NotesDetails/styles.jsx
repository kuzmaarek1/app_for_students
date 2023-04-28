import styled, { css } from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoCloseSharp } from "react-icons/io5";

export const Wrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  height: 92.5vh;
  overflow-x: scroll;
`;

export const HeaderWrapper = styled.header`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: center;
  height: 10vh;
  width: 100%;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
  @media (max-width: 640px) {
    height: 20vh;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export const Header = styled.h1`
  margin-left: 2vw;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 92.5vh;
`;

export const DetailsWrapper = styled.div`
  display: grid;
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

  width: 100%;
  text-align: center;
  flex-wrap: wrap-reverse;
  overflow: auto;
  ${({ description }) =>
    !description &&
    css`
      height: 5vh;
    `}
  ${({ description }) =>
    description &&
    css`
      grid-column: span 2 / span 2;
      min-height: ${({ boldText }) => (boldText ? "6vh" : "10vh")};
      max-height: ${({ boldText }) => (boldText ? "6vh" : "100vh")};
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

export const ImagesWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100px;
  gap: 10px;
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const ImageLink = styled.a`
  width: 200px;
  height: 250px;
`;

export const Image = styled(LazyLoadImage)`
  width: 200px;
  height: 250px;
  border-radius: 15px;
  object-fit: cover;
`;

export const CloseButton = styled(IoCloseSharp)`
  position: absolute;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.red};
  right: 5px;
  top: 5px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;
