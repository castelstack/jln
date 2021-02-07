import React from "react";
import Logo from "../../images/logo.png";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


 
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 0 6rem;

   @media only screen and (max-width: 500px) {
    padding: 0 1rem;
  }
`;
const Img = styled.img`
  width: 6rem;
  height: 5rem;
`;
const Nav = styled.div`
  display: grid;
  grid-template-columns: repeat(6, max-content);
  justify-content: space-around;

  @media only screen and (max-width: 500px) {
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

const Dropd = styled.button`
border: none;
background: white;
color: #333333;
font-size: 1.1rem;
font-weight: 300;
`

export default function Header() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Container className='header'>
      <Img src={Logo} alt='logo' />
      <Nav>
        <NavLk to='/'>Home</NavLk>
        <NavLk to='/about'>About</NavLk>
        <NavLk to='/contact'>Contact</NavLk>
        <NavLk to='/gallery'>Gallery</NavLk>
        
        <Dropd aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        GOODS & SERVICES
      </Dropd>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><NavLk to='/construction'>Construction</NavLk></MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
        <NavLk to='/blog'>Blog</NavLk>
      </Nav>
    </Container>
  );
}
