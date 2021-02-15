import { TextField } from "@material-ui/core";
import React from "react";
import Button from "../../components/button/button";
import { Form } from "../../constant/style";
import { HeadingAdmin } from "./admin-style";

const AdService = () => {
  return (
    <div>
      <Form>
        <HeadingAdmin>MANUFACTURES REPRESENTATIVE</HeadingAdmin>
        <TextField
          placeholder='about jln on homepage'
          multiline
          fullWidth
          id='outlined-multiline-static'
          label='MANUFACTURES REPRESENTATIVE'
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
          placeholder='about jln on homepage'
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

        <HeadingAdmin>AGRICULTURE</HeadingAdmin>
        <TextField
          placeholder='about jln on homepage'
          multiline
          fullWidth
          id='outlined-multiline-static'
          label='AGRICULTURE'
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

export default AdService;
