import React from "react";
import slide3 from "../../images/slide1.jpg";
import { LgText, SmText } from "../../constant/style";
import Button from "../../components/button/button";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 90vh;
  background-image: url(${slide3});
  background-position: center;
 
`;

const Contain = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
   
  @media only screen and (max-width: 990px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   }
`;

const Info = styled.div`
  margin: 0 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
 
  @media only screen and (max-width: 800px) {
    margin: 0rem 1rem;
  }
`;
const Text = styled(LgText)`
  color: white;
  font-size: 6rem;
  line-height: 5rem;

  @media only screen and (max-width: 1200px) {
    font-size: 4rem;
    line-height: 45px;
  }

  @media only screen and (max-width: 992px) {
    font-size: 3rem;
    line-height: 35px;
  }
  @media only screen and (max-width: 802px) {
    font-size: 2.5rem;
    line-height: 35px;
  }

  @media only screen and (max-width: 602px) {
    font-size: 1.8rem;
    line-height: 30px;
  }
`;

const Motto = styled(SmText)`
  font-size: 1rem;
  line-height: 1.2em;
  font-weight: 600;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  text-transform: uppercase;
`;

const LandingBox = () => {
  return (
    <Container>
      <Contain>
        <Info>
          
          <Text>
           JLN BUILDERS NIGERIA LTD
          </Text>
          <Motto>We are to make you better</Motto>
          <Link to='contact'>
            <Button value='CONTACT US' />
          </Link>
        </Info>
      </Contain>
    </Container>
  );
};

export default LandingBox;
