import React from "react";
import styled from "styled-components";
import { LgText, SmText } from "../../constant/style";

const Container = styled.div`
  display: flex;
  //grid-template-columns: 1fr ;
  justify-content: center;
  padding: 4rem 6rem;

  @media only screen and (max-width: 1000px) {
    padding: 4rem 3rem;
  }
  @media only screen and (max-width: 850px) {
    padding: 4rem 1rem;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;
  grid-gap: 1rem;

  @media only screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
  }
`;

const ContentRev = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  align-items: center;
  grid-gap: 1rem;

  @media only screen and (max-width: 850px) {
    grid-template-columns:1fr;
  }
`;
const WriteUp = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  grid-gap: 1rem;
  @media only screen and (max-width: 850px) {
    grid-row:1/2;
    grid-column: 1/2;
  }
`;

const Img = styled.img`
  width: 30rem;
  height: 30rem;
  @media only screen and (max-width: 850px) {
    width: 100%;
    
  }
`;

export const PagesBox = ({ title, description, image, alt }) => {
  return (
    <Container>
      <Content>
        <WriteUp>
          <LgText>{title}</LgText>
          <SmText>{description}</SmText>
        </WriteUp>
              <div>
                  
        <Img src={image} alt={alt} />
        </div>
      </Content>
    </Container>
  );
};

export const RevPagesBox = ({ title, description, image, alt }) => {
  return (
    <Container>
          <ContentRev><div>
              
        <Img src={image} alt={alt} />
      </div>
        <WriteUp>
          <LgText>{title}</LgText>
          <SmText>{description}</SmText>
        </WriteUp>
      </ContentRev>
    </Container>
  );
};
