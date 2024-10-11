import styled, { css, keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { darken } from "polished";

const bookHeight = (height) => `
  linear-gradient(to bottom, #111 ${height}, transparent ${height})
`;

const bookGrey = (start, end) => `
  linear-gradient(to right, transparent ${start}, #222 ${start}, #2e2e2e ${end}, transparent ${end})
`;

const bookColor = (color, shade, start, end) => `
  linear-gradient(to right, transparent ${start}, ${color} ${start}, transparent ${end})
`;

const flashlight = keyframes`
  0%, 9% {
    opacity: 0;
    clip-path: circle(150px at 0% 10%);
  }
  10%, 15%, 85% {
    opacity: 1;
  }
  50% {
    clip-path: circle(150px at 100% 20%);
  }
  54%, 100% {
    clip-path: circle(150px at 55% 92%);
  }
  88%, 100% {
    opacity: 0;
  }
`;

const eyes = keyframes`
  0%, 52% {
    opacity: 0;
  }
  53%, 87% {
    opacity: 1;
  }
  64% {
    transform: scaleY(1);
  }
  67% {
    transform: scaleY(0);
  }
  70% {
    transform: scaleY(1);
  }
  88%, 100% {
    opacity: 0;
  }
`;

const book = () => `linear-gradient(
      to top,
      #222 5%,
      #111 6%,
      #111 7%,
      transparent 7%
    ),
    ${bookHeight("30%")},
    linear-gradient(to right, #222, #2e2e2e 5%, transparent 5%),
    ${bookGrey("6%", "9%")}, ${bookGrey("27%", "34%")},
    ${bookGrey("51%", "57%")},
    ${bookHeight("35%")},
    ${bookGrey("42%", "44%")},
    ${bookGrey("45%", "47%")},
    ${bookGrey("48%", "50%")},
    ${bookGrey("87%", "91%")},
    ${bookHeight("37.5%")}, ${bookGrey("14%", "20%")},
    ${bookHeight("40%")}, ${bookGrey("10%", "13%")},
    ${bookColor("#222", "3", "21%", "25%")},
    ${bookGrey("58%", "64%")},
    ${bookGrey("92%", "95%")}, /* book 14 */ ${bookHeight("48%")},
    ${bookColor("#222", 3, "96%", "99%")},
      linear-gradient(
        to bottom,
        transparent 68.5%,
        transparent 76%,
        #111 76%,
        #111 77.5%,
        transparent 77.5%,
        transparent 86%,
        #111 86%,
        #111 87.5%,
        transparent 87.5%
      ),
    ${bookGrey("35%", "41%")}, ${bookHeight("68%")},
    linear-gradient(
      to right,
      transparent 78%,
      #333 78%,
      #333 80%,
      transparent 80%,
      transparent 82%,
      #333 82%,
      #333 83%,
      transparent 83%
    ),
    ${bookGrey("66%", "85%")}`;

const bookBefore = () => `linear-gradient(
        to top,
        tan 5%,
        #111 6%,
        #111 7%,
        transparent 7%
      ),
      ${bookHeight("30%")},
      linear-gradient(
        to right,
        firebrick,
        ${darken(0.1, "firebrick")} 5%,
        transparent 5%
      ),
      ${bookColor("tomato", 10, "6%", "9%")},
      ${bookColor("darkolivegreen", 10, "27%", "34%")},
      ${bookColor("salmon", 10, "51%", "57%")}, ${bookHeight("35%")},
      ${bookColor("teal", 10, "42%", "44%")},
      ${bookColor("teal", 10, "45%", "47%")},
      ${bookColor("teal", 10, "48%", "50%")},
      ${bookColor("lightslategrey", 17, "87%", "91%")}, ${bookHeight("37.5%")},
      ${bookColor("darkkhaki", 15, "14%", "20%")}, ${bookHeight("40%")},
      ${bookColor("olive", 10, "10%", "13%")},
      ${bookColor("saddlebrown", 10, "21%", "25%")},
      ${bookColor("saddlebrown", 10, "58%", "64%")},
      ${bookColor("darkslategrey", 10, "92%", "95%")}, ${bookHeight("48%")},
      ${bookColor("darkslategrey", 10, "96%", "99%")},
      linear-gradient(
        to bottom,
        transparent 68.5%,
        transparent 76%,
        #111 76%,
        #111 77.5%,
        transparent 77.5%,
        transparent 86%,
        #111 86%,
        #111 87.5%,
        transparent 87.5%
      ),
      ${bookColor("indianred", 10, "35%", "41%")}, ${bookHeight("68%")},
      linear-gradient(
        to right,
        transparent 78%,
        rosybrown 78%,
        rosybrown 80%,
        transparent 80%,
        transparent 82%,
        rosybrown 82%,
        rosybrown 83%,
        transparent 83%
      ),
      ${bookColor("brown", 10, "66%", "87%")};`;

export const ContainerBook = styled.div`
  width: 60%;
  margin: 0;
  position: relative;
  background-color: #111;
  rounded: 15px;
  @media (max-width: 1024px) {
    width: 40%;
  }
  @media (max-width: 640px) {
    display: none;
  }
  background-image: ${book()};
  background-size: 300px 150px;
  background-position: center bottom;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #111;
    background-size: 300px 150px;
    background-position: center bottom;
    background-image: ${bookBefore()};
    animation: ${flashlight} 5000ms infinite;
  }

  &:after {
    content: "";
    width: 25px;
    height: 10px;
    position: absolute;
    left: calc(56.5%);
    bottom: 50px;
    background-repeat: no-repeat;
    background-image: radial-gradient(circle, white 50%, transparent 50%),
      radial-gradient(circle, white 50%, transparent 50%);
    background-size: 10px 10px;
    background-position: left center, right center;
    animation: ${eyes} 5000ms infinite;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 92.5vh;
  justify-content: center;
  position: relative;
  max-width: 100vw;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const WrapperForm = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  width: 40%;
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  overflow-x: hidden;
  @media (max-width: 1024px) {
    width: 60%;
  }
  @media (max-width: 640px) {
    width: 100%;
    z-index: 5;
  }
`;

export const WrapperAnimate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ isLogin }) =>
    isLogin
      ? css`
          animation-name: fadeInRight;
          animation-duration: 1s;
        `
      : css`
          animation-name: fadeInLeft;
          animation-duration: 1s;
        `}
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.colors.darkGrey};
  padding-top: ${({ isLogin }) => (isLogin ? "-5vh" : "0vh")};
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5vh;
  margin-bottom: 1vh;
`;

export const Icon = styled(FontAwesomeIcon)`
  width: 25px;
  height: 30px;
  position: relative;
  z-index: 2;
`;

export const SocialMediaButton = styled.button`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.darkGrey};
  text-decoration: none;
  border: none;
  transition: background-color 0.3s ease;
  padding: 12px 17px;
  transition-property: all;
  transition-timing-function: ease-in;
  transition-duration: 500ms;
  &:hover {
    background-color: ${({ backgroundColor }) =>
      backgroundColor ? backgroundColor : ""};
    color: white;
    cursor: pointer;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: ${({ backgroundColor }) => backgroundColor};
    transition-property: all;
    transition-timing-function: ease-in;
    transition-duration: 300ms;
    transform: scaleX(0);
    transform-origin: left;
    width: 100%;
  }
  &:hover:after {
    transform: scaleX(1);
  }
  margin-bottom: 15px;
`;

export const SocialMediaWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 15px;
  }
`;

const calculateMask = (angle, size) => `
 conic-gradient(
    from ${angle}deg at left, 
    #0000,                     /* Start transparent */
    #000 1deg 89deg,           /* Black mask from 1deg to 89deg */
    #0000 90deg                /* Transparent again */
  ) left/51% 0.1px repeat-y,
   conic-gradient(from -${
     180 - angle
   }deg at right, #0000,#000 1deg 89deg,#0000 90deg) right/51% ${size}px repeat-y
`;

/*
  mask: ${({ angle, size }) => calculateMask(angle, size)};
  -webkit-mask: ${({ angle, size }) => calculateMask(angle, size)};
  */
