import { TextField } from "@material-ui/core";
import React from "react";
import Button from "../../components/button/button";
import { Form } from "../../constant/style";
import { HeadingAdmin } from "./admin-style";

const AdConstruct = () => {
  return (
    <div>
      <Form>
        <HeadingAdmin>REAL ESTATE</HeadingAdmin>
        <TextField
          placeholder='REAL ESTATE'
          multiline
          fullWidth
          id='outlined-multiline-static'
          label='REAL ESTATE'
          rows={4}
          variant='outlined'
        />
        <input
          accept='image/*'
          id='contained-button-file'
          multiple
          type='file'
        />

        <HeadingAdmin>CONSTRUCTION</HeadingAdmin>
        <TextField
          placeholder='CONSTRUCTION'
          multiline
          fullWidth
          id='outlined-multiline-static'
          label='CONSTRUCTION'
          rows={4}
          variant='outlined'
        />
        <input
          accept='image/*'
          id='contained-button-file'
          multiple
          type='file'
        />
        <Button value='POST' />
      </Form>
    </div>
  );
};

export default AdConstruct;
