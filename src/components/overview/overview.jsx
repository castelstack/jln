import React from "react";
import styled from "styled-components";
import { CardFlip } from "../../constant/card.styles";
import { LgText, SmText } from "../../constant/style";
import Img from "../../images/slide3.jpg";
import { CardMedia } from "@material-ui/core";

const Container = styled.div`
  display: flex;
  padding: 3rem 2rem;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 3rem 1rem;
  }
`;
const CrdFlip = styled(CardFlip)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Image = styled.div`
  width: 50%;

  @media only screen and (max-width: 600px) {
    width: 100%;
    margin: 2rem 0;
  }
`;
const Overview = () => {
  return (
    <Container>
      <CrdFlip>
        <LgText>OVERVIEW</LgText>
        <SmText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
          ducimus, doloribus harum tempora esse iusto, deleniti sed, accusantium
          quisquam autem nihil necessitatibus suscipit similique nostrum?
          Praesentium at autem odio facilis!
        </SmText>
      </CrdFlip>
      <Image>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='300'
          image={Img}
          title='Contemplative Reptile'
        />
      </Image>
    </Container>
  );
};

export default Overview;
