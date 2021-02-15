import { TextField } from '@material-ui/core';
import React from 'react';
import Button from '../../components/button/button';
import { Form } from '../../constant/style';
import { HeadingAdmin } from './admin-style';

const AdAbout = () => {
    return (
        <div>

        
        <Form>
            <HeadingAdmin>OVERVIEW</HeadingAdmin>
            <TextField
            placeholder='about jln on homepage'
                multiline
                fullWidth
                id="outlined-multiline-static"
                label="OVERVIEW"
                
                rows={4}
                
                variant="outlined" />
             <input
        accept="image/*"
        id="contained-button-file"
        multiple
        type="file"
                />
                <HeadingAdmin>GOALS</HeadingAdmin>
                <TextField
            placeholder='about jln on homepage'
                multiline
                fullWidth
                id="outlined-multiline-static"
                label="GOALS"
                
                rows={4}
                
                    variant="outlined" />
                <HeadingAdmin>MISSION STATEMENT</HeadingAdmin>
                <TextField
            placeholder='about jln on homepage'
                multiline
                fullWidth
                id="outlined-multiline-static"
                label="MISSION STATEMENT"
                
                rows={4}
                
                    variant="outlined" />
                  <HeadingAdmin>BUSSINESS RELATION</HeadingAdmin>
                <TextField
            placeholder='about jln on homepage'
                multiline
                fullWidth
                id="outlined-multiline-static"
                label="BUSSINESS RELATION"
                
                rows={4}
                
                    variant="outlined" />
            <Button value='POST' />
            </Form>
            </div>
    );
};

export default AdAbout;