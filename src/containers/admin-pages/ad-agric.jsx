import { TextField } from "@material-ui/core";
import React from "react";
import Button from "../../components/button/button";
import { Form } from "../../constant/style";
import { HeadingAdmin } from "./admin-style";

const AdAgric = () => {
  return (
    <div>
      <Form>
        <HeadingAdmin>LIVESTOCK</HeadingAdmin>
        <TextField
          placeholder='Livestock'
          multiline
          fullWidth
          id='outlined-multiline-static'
          label='LIVESTOCK'
          rows={4}
          variant='outlined'
        />
        <input
          accept='image/*'
          id='contained-button-file'
          multiple
          type='file'
        />

        <HeadingAdmin>FARM CROP</HeadingAdmin>
        <TextField
          placeholder='Farm Crop'
          multiline
          fullWidth
          id='outlined-multiline-static'
          label='FARM CROP'
          rows={4}
          variant='outlined'
        />
        <input
          accept='image/*'
          id='contained-button-file'
          multiple
          type='file'
        />

        <HeadingAdmin>PROCESSING</HeadingAdmin>
        <TextField
          placeholder='PROCESSING'
          multiline
          fullWidth
          id='outlined-multiline-static'
          label='PROCESSING'
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

export default AdAgric;
