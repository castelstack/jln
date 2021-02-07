import React from "react";
import logo from "../../images/logo.png";
import slide3 from "../../images/slide3.jpg";
import { BgText, SmText } from "../../constant/style";
import Button from '../../components/button/button';
import styled from "styled-components";

const Container = styled.div`
 
  height: 90vh;

  &::after {
    content: "";
    background-image: url(${slide3});
    background-position: center;
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;   
  }
`;

const Contain = styled.div`
  background: #f8f9fa71;
  height: 90vh;
  display: flex;
  align-items: center;
`;

const Info = styled.div`
  margin: 0 6rem;
  @media only screen and (max-width: 700px) {
    margin: 0rem 1rem;
  }
`;
const Text = styled(BgText)`
color: white;
`;

const Motto = styled(SmText)`
font-size: 1rem;
    line-height: 1.2em;
    font-weight: 500;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 2rem;
    text-transform: uppercase;
`
const Span = styled.span`
color: #03663e;`
const LandingBox = () => {
  return (
    <Container>
      <Contain>
              <Info>
                  <img src={logo} alt='' />
                  <Text><Span>JLN</Span> BUILDERS <Span>NIGERIA</Span> LTD</Text>
<Motto>We are to make you better</Motto>
                  <Button value='CONTACT US'/>
        </Info>
      </Contain>
    </Container>
  );
};

export default LandingBox;
