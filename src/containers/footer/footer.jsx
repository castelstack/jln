import React from "react";
import styled from "styled-components";
import { BgText, SmText } from "../../constant/style";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: #343a40;
  padding: 2rem 0;
  overflow: hidden;
`;
const Content = styled.div`
  padding: 1rem 6rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5rem;

  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 900px) {
    grid-gap: 2rem;
    padding: 1rem 1.5rem;
  }
  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap: 3rem;
    padding: 1rem 1rem;
  }
`;
const Head = styled.div`
  @media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Links = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media only screen and (max-width: 500px) {
    grid-gap: 2rem;
  }
`;
const List = styled.div`
  list-type-style: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.7rem;
`;
const ListItems = styled.div`
  list-type-style: none;
`;
const Legal = styled.div`
  display: grid;
  grid-template-columns: repeat(3, min-content);
  grid-gap: 1rem;
  justify-self: center;
  padding: 1rem 0;
`;
const Hr = styled.hr`
  height: 1px;
  border-style: none;
  background: -moz-linear-gradient(
    left,
    transparent 0%,
    white 50%,
    transparent 100%
  );
  background: -webkit-linear-gradient(
    left,
    transparent 0%,
    white 50%,
    transparent 100%
  );
  background: linear-gradient(
    to right,
    transparent 0%,
    white 50%,
    transparent 100%
  );
`;

const Footer = () => {
  return (
    <Container>
      <Content>
        <Head>
          <BgText white center>
            JLN Buiders ltd
          </BgText>
          <SmText white>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At vitae
            itaque aut aliquam exercitationem officia quos magnam nemo dolorum
            repellat deleniti quas possimus voluptas, ea ex, expedita delectus
            magni quo.
          </SmText>
        </Head>
        <div>
          <Links>
            <List>
              <ListItems>
                <SmText white bold>
                  Quick link
                </SmText>
              </ListItems>
              <ListItems>
                <SmText white>Home</SmText>
              </ListItems>
              <ListItems>
                <SmText white>Blogs</SmText>
              </ListItems>
              <ListItems>
                <SmText white>Gallery</SmText>
              </ListItems>
            </List>
            <List>
              <ListItems>
                <SmText white bold>
                  About
                </SmText>
              </ListItems>
              <ListItems>
                <SmText white>Home</SmText>
              </ListItems>
              <ListItems>
                <SmText white>Blogs</SmText>
              </ListItems>
              <ListItems>
                <SmText white>Gallery</SmText>
              </ListItems>
            </List>
            <List>
              <ListItems>
                <SmText white bold>
                  Company
                </SmText>
              </ListItems>
              <ListItems>
                <SmText white>Home</SmText>
              </ListItems>
              <ListItems>
                <SmText white>Blogs</SmText>
              </ListItems>
              <ListItems>
                <SmText white>Gallery</SmText>
              </ListItems>
            </List>
          </Links>
        </div>
      </Content>
      <Hr></Hr>

      <Legal>
        <SmText white>Terms</SmText>
        <SmText white>Support</SmText>
        <SmText white>Privarcy</SmText>
      </Legal>
      <SmText white>© 2019 Jln all rights reserved</SmText>
    </Container>
  );
};

export default Footer;
