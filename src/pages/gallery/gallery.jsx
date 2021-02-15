import React from "react";
import { NavLink, Route } from "react-router-dom";
import styled from "styled-components";
import GalleryTemp from "../../containers/template/gallery-temp";
import Box from "../../components/box/box";


const Container = styled.div`
`
const Content = styled.div`
display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;
  justify-items: center;
  padding: 4rem;
`
const Nav = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  grid-gap: 1.5rem;
`;
const NavLk = styled(NavLink)`
  text-decoration: none;
  color: #03663e;
  font-size: 1.2rem;
  font-weight: 600;
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

const active = {
  borderBottom: 'solid 3px green'
}
const Gallery = () => {
  return (
    <Container>
      <Box title='Gallery' currentPage='Gallery' />
          <Content>
              
        <Nav>
          <NavLk to='/tags' activeStyles={active}>AGRICULTURE</NavLk>
          <NavLk to='/tags'>CONSTRUCTION</NavLk>
          <NavLk to='/tags'>MANU-REP</NavLk>
          <NavLk to='/tags'>ESTATE</NavLk>
        </Nav>
      
<GalleryTemp/>
      <Route path='/agriculture-pro' component={GalleryTemp} />
      </Content>
    </Container>
  );
};

export default Gallery;
