import React from 'react';
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import Button from "../button/button";

export const ContactCon = styled.div`
  
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.5rem;
`;
const ContactBox = ({color}) => {
    return (
        <div>
             <ContactCon>
         
          <TextField label='Name' color={color}/>
          <TextField label='Email' color={color}/>
          <TextField label='Message' color={color}/>
          <Button yellow value='Send message' />
        </ContactCon>
        </div>
    );
};

export default ContactBox;