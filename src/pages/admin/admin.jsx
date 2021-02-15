import React from "react";
import { Route} from "react-router-dom";
import { LgText } from "../../constant/style";
import AdHomepage from "../../containers/admin-pages/ad-homepage";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import AdAbout from "../../containers/admin-pages/ad-about";
import AdService from "../../containers/admin-pages/ad-services";
import AdContacts from "../../containers/admin-pages/ad-contacts";
import AdAgric from "../../containers/admin-pages/ad-agric";
import AdConstruct from "../../containers/admin-pages/ad-construct";
import AdManu from "../../containers/admin-pages/ad-manu";
const Container = styled.div`
  padding: 2rem;
  background: #f8f9fa;
`;

const NavBar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  grid-gap: .3rem;
  justify-content: space-between;
  padding: 2rem 6rem;

  @media only screen and (max-width: 1150px) {
  }
  @media only screen and (max-width: 500px) {
  }
`;
const NavLk = styled(NavLink)`
display: flex;
justify-content: center;
  text-decoration: none;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  will-change: color;
  background: #3E755F;
  transition: color 0.25s ease-out;
  padding: 0.5rem 0.5rem;
  &::before,
  &::after {
    content: "";
    width: 0;
    height: 3px;
    background-color: yellow;

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
  color: '#f8f9fa',
  fontWeight: 'bold',
  borderBottom: 'solid 6px yellow'
}
const Admin = (props) => {
  const { path } = props.match;

  return (
    <Container>
      <div>
        <LgText center>ADMIN DASHBOARD</LgText>
        <NavBar>
          <NavLk to={`${path}`} activeStyle={active}>
            HOMEPAGE
          </NavLk>
          <NavLk to={`${path}/ad-about`} activeStyle={active}>
            ABOUT
          </NavLk>
          <NavLk to={`${path}/ad-services`} activeStyle={active}>
            SERVICES
          </NavLk>
          <NavLk to={`${path}/ad-contacts`} activeStyle={active}>
            CONTACTS
          </NavLk>
          <NavLk to={`${path}/ad-agriculture`} activeStyle={active}>
            AGRICULTURE
          </NavLk>
          <NavLk to={`${path}/ad-construction`} activeStyle={active}>
            CONSTRUCTION
          </NavLk>
          <NavLk to={`${path}/ad-maun-rep`} activeStyle={active}>
            MANU-REP
          </NavLk>
        </NavBar>

        <Route path={`${path}`} exact component={AdHomepage} />
        <Route path={`${path}/ad-about`} component={AdAbout} />
        <Route path={`${path}/ad-services`} component={AdService} />
        <Route path={`${path}/ad-contacts`} component={AdContacts} />
        <Route path={`${path}/ad-agriculture`} component={AdAgric} />
        <Route path={`${path}/ad-construction`} component={AdConstruct} />
        <Route path={`${path}/ad-maun-rep`} component={AdManu} />
      </div>
    </Container>
  );
};

export default Admin;
