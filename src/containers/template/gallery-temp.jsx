import React from "react";
import Dialogs from "./images-dialog";
import styled from "styled-components";

 
const Container = styled.div`
display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1rem;
  grid-gap: 1.2rem;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
  `
const GalleryTemp = () => {
  return (
    <Container>
      <Dialogs />
      <Dialogs />
      <Dialogs />
      <Dialogs />
      <Dialogs />
      <Dialogs />
      <Dialogs />
      <Dialogs />
      <Dialogs />
      <Dialogs />
      <Dialogs />
      <Dialogs />
    </Container>
  );
};

export default GalleryTemp;
