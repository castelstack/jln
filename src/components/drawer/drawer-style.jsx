import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Container = styled.div`
  display: none;

  @media only screen and (max-width: 1050px) {
    display: block;
  }
`;

export const NavLk = styled(NavLink)`
  text-decoration: none;
  color: #333333;
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  position: relative;
  overflow: hidden;
text-transform: uppercase;
  will-change: color;
  transition: color 0.25s ease-out;
padding: .5rem 2rem;
  &::before,
  &::after {
    content: "";
    width: 0;
    height: 3px;
    background-color: green;

    will-change: width;
    transition: width 0.1s ease-out;

    position: absolute;
    bottom: 0;
  }

  &::before {
    left: 50%;
    transform: translateX(-50%);
  }

  &::after {
    right: 50%;
    transform: translateX(50%);
  }

  &:hover::before,
  &:hover::after {
    width: 100%;
    transition-duration: 0.2s;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;