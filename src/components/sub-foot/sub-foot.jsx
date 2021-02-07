import React from "react";
import { MdText, SmText, BgText } from "../../constant/style";
import Img from "../../images/slide3.jpg";
import styled from "styled-components";
import ContactBox from "../contact-box/contact-box";

const Container = styled.div``;
const Contain = styled.div`
  height: 35rem;
 background: #f8f9fa;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem 6rem;

  @media only screen and (max-width: 600px) {
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

const Visit = styled.div``;
const Call = styled.div``;
const Email = styled.div``;
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
          <BgText white>Get rich now</BgText>
          <SmText white>and stay rich forever</SmText>
        </Bg>
      </GetIn>
      <Contain>
        <ContactImport>
        <BgText>Contact Us</BgText>
          <SmText>Send us you message and we will get back to you!</SmText>
       <ContactBox />
        </ContactImport>
        <Info>
          <Visit>
            <MdText>Visit Us</MdText>
            <SmText>22 road lagos</SmText>
          </Visit>
          <Call>
            <MdText>Visit Us</MdText>
            <SmText>22 road lagos</SmText>
          </Call>
          <Email>
            <MdText>Visit Us</MdText>
            <SmText>22 road lagos</SmText>
          </Email>
        </Info>
      </Contain>
    </Container>
  );
};

export default SubFoot;
