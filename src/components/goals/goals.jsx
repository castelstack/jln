import React from "react";
import { BgText, SmText } from "../../constant/style";
import styled from "styled-components";
import Img from "../../images/bg.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${Img});
  padding: 10rem 3rem;

  @media only screen and (max-width: 700px) {
   
  padding: 1rem 1rem;
  }
`;

const Content = styled.div`

width: 70%;
display: flex;
flex-direction: column;
  align-items: center;
  align-content: center;
  
  @media only screen and (max-width: 700px) {
    align-items: start;
    align-content: start;
    width: 95%;
    }`;

const Goals = () => {
  return (
      <Container>
          <Content>

      <BgText white>Our Goals</BgText>
      <SmText white>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quas quod
        harum id voluptatem, fugit, suscipit itaque sit, provident blanditiis
        obcaecati. Nihil vitae ad delectus, officia ex aliquam at corporis!Lorem
      </SmText>
          </Content>
    </Container>
  );
};

export default Goals;
