
import React from "react";
import Button from "../../components/button/button";
import { Form } from "../../constant/style";
import { HeadingAdmin } from "./admin-style";
const AdSlider = () => {
    return (
        <div>
             <Form>
        <HeadingAdmin>SLIDER</HeadingAdmin>
        
        <input
          accept='image/*'
          id='contained-button-file'
          multiple
          type='file'
        />

<input
          accept='image/*'
          id='contained-button-file'
          multiple
          type='file'
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

export default AdSlider;