import React from "react";
import { BgText, SmText } from "../../constant/style";
import Img from "../../images/slide1.jpg";
import Img1 from "../../images/slide2.jpg";
import { CardMedia } from "@material-ui/core";
import styled from "styled-components";
const Container = styled.div`
padding: 4rem 3rem;
  display: grid ;
  grid-template-columns: max-content 1fr;
  margin: 3rem;

  @media only screen and (max-width: 830px) {
    grid-template-columns:1fr;
    justify-items: center;
    padding: 2rem 0rem;
    margin: 0rem;
  }
`;

const Image = styled.div`
width: 30rem;
@media only screen and (max-width: 830px) {
  width: 95%;
}`;

const Statement = styled.div`
background: rgba(0, 0, 0, 0.5);
padding: 1rem;
height:100%;
;
`;

const BgBox = styled.div`


transform: translate(-2rem,   2rem);

&::after {
    content: "";
    background-image: url(${Img1});
    background-position: center;
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;   
  }
  
  @media only screen and (max-width: 830px) {
    transform: translate(0rem,   -3rem);
  }`;
const MissionStatement = () => {
  return (
    <Container>
         
          <Image>

<CardMedia
    component='img'
    alt='Contemplative Reptile'
    height='500'
    image={Img}
    title='Contemplative Reptile'
/>
    </Image>
          <BgBox>
              
      <Statement>
        <BgText white>MissionStatement</BgText>
        <SmText white>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, fuga
          accusantium. Nisi minima voluptatibus reiciendis repellendus nobis
          ullam labore pariatur id, eos vel in non aperiam nostrum architecto,
          minus debitis. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Iure molestiae recusandae maxime quidem asperiores, pariatur, in
          qui et, commodi illo incidunt error aspernatur quas sequi omnis illum
          exercitationem iusto suscipit.
        </SmText>
      </Statement>
    </BgBox>
    </Container>
  );
};

export default MissionStatement;
