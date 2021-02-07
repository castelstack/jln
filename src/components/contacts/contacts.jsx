import React from "react";
import styled from "styled-components";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import {  MdText, SmText } from "../../constant/style";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
  }
`;

const ReachUs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  justify-content: space-between;
  background: #f8f9fa;
  padding: 6rem 6rem;

  @media only screen and (max-width: 700px) {
     grid-template-columns: 1fr;
     padding: 6rem 2rem;
  }
`;
const ContactBox = styled.div`
  display: grid;
  grid-template-rows: max-content 3rem min-content;
  justify-items: center;
  align-items: center;
  padding: 3rem 0;
  width: 100%;
  background: #fff;
  @media only screen and (max-width: 600px) {
  }
`;

const Contacts = () => {
  return (
    <Container>
      <ReachUs>
        <ContactBox>
          <LocationOnIcon style={{ color: "#3E755F", fontSize: "4rem" }} />
          <MdText>Our Office</MdText>
          <>
            <SmText>new road</SmText>
            <SmText>new road</SmText>
          </>
        </ContactBox>
        <ContactBox>
          <CallIcon style={{ color: "#3E755F", fontSize: "4rem" }} />
          <MdText>Our Office</MdText>
          <SmText>new road</SmText>
          <SmText>new road</SmText>
        </ContactBox>
        <ContactBox>
          <EmailIcon style={{ color: "#3E755F", fontSize: "4rem" }} />
          <MdText>Our Office</MdText>
          <SmText>new road</SmText>
          <SmText>new road</SmText>
        </ContactBox>
      </ReachUs>
    </Container>
  );
};

export default Contacts;
