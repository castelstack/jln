import React from "react";
import { MdText, SmText, BgText } from "../../constant/style";
import Img from "../../images/slide3.jpg";
import styled from "styled-components";
import ContactBox from "../contact-box/contact-box";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";


const Container = styled.div``;
const Contain = styled.div`
  height: 35rem;
 background: #f8f9fa;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem 6rem;
  grid-gap: 4rem;

  @media only screen and (max-width: 1200px) {
    grid-gap: 2rem;
    padding: 10px 1rem;
  }
  @media only screen and (max-width: 1031px) {
    grid-gap: 2rem;
    grid-template-columns: 1fr;
    padding: 10px 1rem;
  }
`;
const GetIn = styled.div`
  height: 20rem;
  display: flex;
  align-items: center;
  justify-items: center;
  text-align: center;

  background-image: url(${Img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Bg = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  padding-top: 7rem;
  display: flex;
  flex-direction: column; 
  justify-items: center;
  align-items: center;
`;

const ContactInfo = styled.div`
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
height: 10rem;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding: 2rem 2rem;
justify-items: flex-start;
@media only screen and (max-width: 1031px) {
  display: none;
}
`;


const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  justify-content: space-around;
`;

const ContactImport = styled.div`
padding: 2rem;
background: #fff;
  transform: translateY(-16%);

   @media only screen and (max-width: 600px) {
    padding: 1rem;
  }
`

const SubFoot = () => {
  return (
    <Container>
      <GetIn>
        <Bg>
          <BgText white>Let us work together</BgText>
          <SmText white>Get in touch now</SmText>
        </Bg>
      </GetIn>
      <Contain>
        <ContactImport>
        <BgText>Contact Us</BgText>
          <SmText>Send us you message and we will get back to you!</SmText>
       <ContactBox />
        </ContactImport>
        <Info>
          <ContactInfo>
          <LocationOnIcon style={{ color: "#3E755F", fontSize: "2rem" }} />
            <MdText>Locate Us</MdText>
            <SmText>22 road lagos</SmText>
          </ContactInfo>
          <ContactInfo>
          <CallIcon style={{ color: "#3E755F", fontSize: "2rem" }} />
            <MdText>Call Us</MdText>
            <SmText>080****343</SmText>
            <SmText>080****343</SmText>
          </ContactInfo>
          <ContactInfo>
          <EmailIcon style={{ color: "#3E755F", fontSize: "2rem" }} />
            <MdText>Email Us</MdText>
            <SmText>jnl2332@gmail.com</SmText>
          </ContactInfo>
        </Info>
      </Contain>
    </Container>
  );
};

export default SubFoot;
