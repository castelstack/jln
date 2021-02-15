import { TextField } from "@material-ui/core";
import React from "react";
import Button from "../../components/button/button";
import { Form } from "../../constant/style";
import { HeadingAdmin } from "./admin-style";

const AdManu = () => {
  return (
    <div>
      <Form>
        <HeadingAdmin>RENTAL</HeadingAdmin>
        <TextField
          placeholder='about jln on homepage'
          multiline
          fullWidth
          id='outlined-multiline-static'
          label='RENTAL'
          rows={4}
          variant='outlined'
        />
        <input
          accept='image/*'
          id='contained-button-file'
          multiple
          type='file'
        />

        <HeadingAdmin>SALES</HeadingAdmin>
        <TextField
          placeholder='about jln on homepage'
          multiline
          fullWidth
          id='outlined-multiline-static'
          label='SALES'
          rows={4}
          variant='outlined'
        />
        <input
          accept='image/*'
          id='contained-button-file'
          multiple
          type='file'
        />

        <HeadingAdmin>PRODUCT</HeadingAdmin>
        <TextField
          placeholder='about jln on homepage'
          multiline
          fullWidth
          id='outlined-multiline-static'
          label='PRODUCT'
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

export default AdManu;
