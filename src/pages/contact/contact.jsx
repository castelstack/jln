import React from 'react';
import Box from '../../components/box/box';
import ContactBox from '../../components/contact-box/contact-box';
import Contacts from '../../components/contacts/contacts';
import { SmText, BgText } from "../../constant/style";
import styled from "styled-components";

const MessageUs = styled.div`
display: grid;
grid-template-columns: 1fr;
justify-content: center;
padding: 8rem 1rem;
background: #fff;`

const Head = styled.div`
display: flex;
flex-direction: column;
align-items: center;`
const Contact = () => {
    return (
        <div>
            <Box title='Contact us' currentPage='Contact us' />
            <Contacts />
            <MessageUs>
                <Head>

            <BgText >GET IN TOUCH</BgText>
          <SmText >Send us you message and we will get back to you!</SmText>
                </Head>
                <ContactBox color='secondary'/>
            </MessageUs>
           
        </div>
    );
};

export default Contact;