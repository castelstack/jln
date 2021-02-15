import { TextField } from '@material-ui/core';
import React from 'react';
import Button from '../../components/button/button';
import { BgText, Form } from '../../constant/style';
import styled from "styled-components";
import { Link } from 'react-router-dom';


const Container = styled.div`
display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  height: 90vh;`
const Login = (props) => {
      
    const handleClick = (props) => {
  
    }

      
    return (
        <Container>
            <Form>
            <BgText>ADMIN LOGIN</BgText>
            <TextField id="filled-basic" label="Admin" variant="filled" />
                <TextField id="filled-basic" label="Password" variant="filled" type='password' />
                <Link to='/admin'>
                <Button value='Login' onclick={handleClick} />
                </Link>
            </Form>
        </Container>
    );
};

export default Login;