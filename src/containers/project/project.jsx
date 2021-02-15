import React from "react";
import { LgText, SmText } from "../../constant/style";
import Pic from "../../images/Picture1.png";
import styled from "styled-components";
import { CardMedia } from "@material-ui/core";
import Button from "../../components/button/button";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 4rem 6rem;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-gap: 2rem;

  @media only screen and (max-width: 700px) {
    
    padding: 4rem 1rem;
  }
  
`;
const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 4rem 1rem;
  }
`;

const Project = () => {
  return (
    <Container>
      <LgText>OUR PROJECT</LgText>
      <SmText>Bringing growth, ingenuity, and experience to market.</SmText>
      <Gallery>
      
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='200'
          image={Pic}
          title='Contemplative Reptile'
         
        />
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='200'
          image={Pic}
          title='Contemplative Reptile'
        />
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='200'
          image={Pic}
          title='Contemplative Reptile'
        />
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='200'
          image={Pic}
          title='Contemplative Reptile'
        />
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='200'
          image={Pic}
          title='Contemplative Reptile'
        />
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='200'
          image={Pic}
          title='Contemplative Reptile'
        />
      </Gallery>
      <Link to='/gallery'>
      <Button value='See More' />

      </Link>
    </Container>
  );
};

export default Project;
