import React from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Divider } from '@material-ui/core';
import { MdText } from '../../constant/style';
const Head = styled.div`
padding: 1rem ;
`;
const Nav = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-around;
  
    width: 100%;
  @media only screen and (max-width: 500px) {
   
  }
`;

const NavLk = styled(NavLink)`
width: 20rem;
padding: 1rem ;
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
const BlogBar = () => {
    return (
        <div>
            <Head>

            <MdText bold>Category</MdText>
            </Head>
             <Nav>
                <NavLk to='/'>Home</NavLk>
                <Divider light />
                <NavLk to='/about'>About</NavLk>
                <Divider light />
                <NavLk to='/contact'>Contact</NavLk>
                <Divider light />
        <NavLk to='/gallery'>Gallery</NavLk>
        </Nav>
        </div>
    );
};

export default BlogBar;