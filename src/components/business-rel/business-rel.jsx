import React from "react";
import { BgText, SmText } from "../../constant/style";
import styled from "styled-components";
import Img from "../../images/slide1.jpg";
import Img2 from "../../images/bg.svg";

const Container = styled.div`
height: 80vh;


  background-image: url(${Img});
  padding: 0 3rem;

  @media only screen and (max-width: 600px) {
    background-image: none;
    padding: 0 0rem;
  }
`;


const Content = styled.div`
  background:  rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 40%;
  padding: 1rem;
  margin-left: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-left: 0rem;
    padding: 1rem;
    background-image: url(${Img2});
  }
`;
const BusinessRelations = () => {
  return (
    <Container>
      <Content>
        <BgText white>Business Relations</BgText>
        <SmText white>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, a.
          Maiores quos, sed libero repudiandae voluptate dolorum sapiente?
          Repellat assumenda in perferendis quod non quae sequi accusamus enim
          quo nemo.lorem Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Debitis tenetur facilis nobis aperiam provident optio assumenda,
          id minima sequi? Officiis maiores explicabo temporibus velit cum
          voluptatem recusandae perferendis sapiente nesciunt!
        </SmText>
      </Content>
    </Container>
  );
};

export default BusinessRelations;
