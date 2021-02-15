import { TextField } from '@material-ui/core';
import React from 'react';
import Button from '../../components/button/button';
import { Form} from '../../constant/style';
import { HeadingAdmin } from './admin-style';

const AdHomepage = () => {
    return (
        <div>

        
        <Form>
            <HeadingAdmin >ABOUT</HeadingAdmin>
            <TextField
            placeholder='about jln on homepage'
                multiline
                fullWidth
                id="outlined-multiline-static"
                label="Multiline"
                
                rows={4}
                
                variant="outlined" />
             <input
        accept="image/*"
        id="contained-button-file"
        multiple
        type="file"
      />
            <Button value='POST' />
            </Form>
            </div>
    );
};

export default AdHomepage;