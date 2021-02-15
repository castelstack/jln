import React from "react";
import ServiceTemp from "../../components/service-temp/service-temp";
import {Container, Heading, Span, ServiceBox } from './services.style'

const Services = () => {
  return (
    <Container>
      <Heading>
        JLN <Span>SERVICES</Span>
      </Heading>
      <ServiceBox>
        <ServiceTemp title='agric' description='lorem hh gg hh kj' link='agriculture'/>
      </ServiceBox>
    </Container>
  );
};

export default Services;
