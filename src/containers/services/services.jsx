import React from "react";
import { LgText } from "../../constant/style";
import Agriculture from "../../components/agriculture/agriculture";
import Construction from "../../components/construction/construction";
import ManuRep from "../../components/manu-rep/manu-rep";
import styled from "styled-components";
const Container = styled.div`
background: #28a7461e;
padding: 3rem 6rem;

@media only screen and (max-width: 1200px) {
  padding: 3rem 2rem;
}

@media only screen and (max-width: 802px) {
  padding: 3rem 1rem;
};`
const ServiceBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-around;
  grid-gap: 5rem;
 

  @media only screen and (max-width: 1050px) {
   
    grid-gap: 2rem;
  }
  @media only screen and (max-width: 702px) {
    grid-template-columns: 1fr;
    justify-items: center;
    justify-content: space-between;
    grid-gap: 2.5rem;
  }
`;
const Heading = styled(LgText)`
  color: #333333;
  text-align: center;
  margin-bottom: 1.5rem;
`;
const Span = styled.span`
  color: #737373;
  font-weight: 300;
`;
const Services = () => {
  return (
    <Container>
      <Heading>
        JLN <Span>SERVICES</Span>
      </Heading>
      <ServiceBox>
        <Agriculture />
        <Construction />
        <ManuRep />
      </ServiceBox>
    </Container>
  );
};

export default Services;
