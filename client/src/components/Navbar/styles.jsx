import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.nav`
  position: relative;
  width: 100vw;
  height: 7.5vh;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.div`
  color: white;
  margin: 20px;
  width: 55vw;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 45vw;
`;

export const Link = styled(NavLink)`
  margin-right: 2vw;
  justify-content: center;
  align-items: center;
  display: block;
  color: white;
  border-bottom: 2px solid transparent;
  padding-bottom: 2px;
  text-decoration: none;
  transition-property: all;
  transition-timing-function: ease-out;
  transition-duration: 200ms;
  &:hover,
  &.active {
    text-decoration: none;
    color: white;
    border-bottom: 2px solid white;
  }
`;
