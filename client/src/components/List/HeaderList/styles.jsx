import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

export const Wrapper = styled.header`
  display: grid;
  grid-template-columns: minmax(0, 0.6fr) minmax(0, 1fr) minmax(0, 0.6fr);
  align-items: center;
  height: 10vh;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  width: 100%;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
  @media (max-width: 640px) {
    height: 20vh;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
`;
export const Header = styled.h1`
  margin-left: 2vw;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 640px) {
    grid-column: span 2 / span 2;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
  @media (max-width: 640px) {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }
`;
