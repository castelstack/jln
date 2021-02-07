import React from "react";
import { BgText, SmText, MdText } from "../../constant/style";
import Checkbox from '@material-ui/core/Checkbox';
import Button from "../../components/button/button";
import Slide from "../../images/slide3.jpg";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-gap: 5rem;
  padding: 4rem 6rem;
  justify-content: space-around;
  justify-items: center;

  @media only screen and (max-width: 700px) {
    padding: 2rem 1rem;
  }


  @media only screen and (max-width: 600px) {
    grid-gap: 2rem;
    grid-template-columns: 1fr ;
  }
`;
const Contain = styled.div`
display: grid;
  grid-template-columns: 1fr ;
  grid-gap: 20px;
  justify-content: space-around;`;

const Image = styled.img`
  width: 25rem;
  height: 30rem;
  object-fit: fill;
  z-index: 100;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  
  @media only screen and (max-width: 900px) {
    width: 20rem;
    height: 26rem;
  }
  
  @media only screen and (max-width: 600px) {
    width: 90%;
    height: 50%;
  }
  `;

const SpBox = styled.div`
display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-column-gap: 50px;
`;
const Offers = styled.div`

@media only screen and (max-width: 600px) {
 display: flex;
 flex-direction: column;
 align-items: center;

}
`
const AboutUs = () => {
  return (
    <Container>
      <Contain>
        <div>
          
          <BgText>JLN BUILDERS Ltd</BgText>
          <SmText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            repellendus enim reiciendis, voluptatem accusamus molestias nostrum
            consectetur aliquid, consequatur tempore aut quis quod veniam
            quaerat? Quas sapiente quos accusamus corrupti.
          </SmText>
        </div>
        <Offers>
        <MdText>Special Offer</MdText>
          <SpBox>
            <SmText><Checkbox style={{ color: 'green' }} checked /> Desgn build</SmText>
            <SmText><Checkbox style={{ color: 'green' }} checked /> Desgn build</SmText>
            <SmText><Checkbox style={{ color: 'green' }} checked /> Desgn build</SmText>
            <SmText><Checkbox style={{ color: 'green' }} checked /> Desgn build</SmText>
            <SmText><Checkbox style={{ color: 'green' }}checked /> Desgn build</SmText>
            <SmText><Checkbox style={{ color: 'green' }}checked /> Desgn build</SmText>
          </SpBox>
        <Button value='Learn more' yellow />
        </Offers>
      </Contain>
      <div>
        <Image src={Slide} />
      </div>
    </Container>
  );
};

export default AboutUs;
