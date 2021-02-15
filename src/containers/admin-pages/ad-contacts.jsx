import { TextField } from "@material-ui/core";
import React from "react";
import Button from "../../components/button/button";
import { Form } from "../../constant/style";
import { HeadingAdmin } from "./admin-style";

const AdContacts = () => {
  return (
    <div>
      <Form>
        <HeadingAdmin>CALL</HeadingAdmin>
        <TextField
          placeholder='CALL 1'
         
          fullWidth
          id='outlined-multiline-static'
          label='CALL 1'
          rows={4}
          variant='outlined'
        />
       

      
        <TextField
          placeholder='CALL 2'
         
          fullWidth
          id='outlined-multiline-static'
          label='CALL 2'
          rows={4}
          variant='outlined'
        />
       

       
        <TextField
          placeholder='CALL 3'
         
          fullWidth
          id='outlined-multiline-static'
          label='CALL 3'
          rows={4}
          variant='outlined'
        />

<HeadingAdmin>EMAIL</HeadingAdmin>
        <TextField
          placeholder='EMAIL 1'
         
          fullWidth
          id='outlined-multiline-static'
          label='EMAIL 1'
          rows={4}
          variant='outlined'
        />
       

      
        <TextField
          placeholder='EMAIL 2'
         
          fullWidth
          id='outlined-multiline-static'
          label='EMAIL 2'
          rows={4}
          variant='outlined'
        />
       

       
        <TextField
          placeholder='EMAIL 3'
         
          fullWidth
          id='outlined-multiline-static'
          label='EMAIL 3'
          rows={4}
          variant='outlined'
        />

<HeadingAdmin>LOCATION</HeadingAdmin>
        <TextField
          placeholder='ADDRESS 1'
         
          fullWidth
          id='outlined-multiline-static'
          label='ADDRESS 1'
          rows={4}
          variant='outlined'
        />
       

      
        <TextField
          placeholder='ADDRESS 2'
         
          fullWidth
          id='outlined-multiline-static'
          label='ADDRESS 2'
          rows={4}
          variant='outlined'
        />
       

       
        <TextField
          placeholder='ADDRESS 3'
         
          fullWidth
          id='outlined-multiline-static'
          label='ADDRESS 3'
          rows={4}
          variant='outlined'
        />
       

        <Button value='POST' />
      </Form>
    </div>
  );
};

export default AdContacts;
