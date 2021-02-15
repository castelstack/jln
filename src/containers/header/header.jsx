import React from "react";
import Logo from "../../images/logo.png";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "./header.css";
import Drawer from "../../components/drawer/drawer";
import { NavDrop } from "../../components/drawer/drawer-style";

const Container = styled.div`
  display: grid;
  grid-template-columns: min-content max-content;
  align-items: center;
  justify-content: space-between;
  padding: 0 6rem;

  @media only screen and (max-width: 1150px) {
    padding: 0 1rem;
  }
  @media only screen and (max-width: 500px) {
    padding: 0 1rem;
  }
`;
const Img = styled.img`
  width: 6rem;
  height: 5rem;
`;
const Nav = styled.div`
  @media only screen and (max-width: 1050px) {
    display: none;
  }
`;

const NavLk = styled(NavLink)`
  text-decoration: none;
  color: #333333;
  font-size: 1.1rem;
  font-weight: 300;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  will-change: color;
  transition: color 0.25s ease-out;
  padding: 0.3rem 2rem;
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

export default function Header() {
  return (
    <Container className='header'>
      <NavLink to='/'>
        <Img src={Logo} alt='logo' />
      </NavLink>
      <Drawer />
      <Nav>
        <nav>
          <ul className='primary'>
            <li>
              <NavLk to='/'>Home</NavLk>
            </li>
            <li>
              <NavLk to='/about'>About</NavLk>
            </li>
            <li>
              <NavLk to='/gallery'>Gallery</NavLk>
            </li>
            <li>
              <NavDrop>GOOD'S AND SERVICE</NavDrop>
              <ul className='sub'>
                <li>
                  <NavLk to='/construction'>CONSTRUCTION</NavLk>
                </li>
                <li>
                  <NavLk to='/agriculture'>Agriculture</NavLk>
                </li>
                <li>
                  <NavLk to='/'>Blog</NavLk>
                </li>
              </ul>
            </li>
            <li>
              <NavLk to='/contact'>Contact</NavLk>
            </li>
            <li>
              <NavLk to='/blog'>Blog</NavLk>
            </li>
            <li>
              <NavLk to='/login'>Admin</NavLk>
            </li>
          </ul>
        </nav>
      </Nav>
    </Container>
  );
}
