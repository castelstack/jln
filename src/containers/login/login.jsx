import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import Button from '../../components/button/button';
import { BgText, Form } from '../../constant/style';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { AdminContext } from './../../utils/store';

const Container = styled.div`
display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  height: 90vh;`

const Login = (props) => {
    const user = useContext(AdminContext);
    
    const history = useHistory();

    const handleClick = (props) => {
        
    }

    const URL = "https://jln-api.herokuapp.com"

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },

        validationSchema: Yup.object({

            email: Yup.string().email('Invalid Email Address.').required('Email Is Required.'),

            password: Yup.string()
              .min(6, 'Password Must be 6 characters or more')
              .required('Password Is Required'),
          }),

        onSubmit: (values) => {
            axios
                .post(`${URL}/api/v1/admins/login`, values, { withCredentials: true })
                .then(res => {
                    if (res.data.status.toLowerCase() === 'success') {
                        user.setLoggedIn({ status: true, value: values.email });
                        console.log('logged in', user);

                        return history.push('/admin');
                    }
                })
                .catch(err => {
                    (err.response) ?
                    console.log(err.response.data) :
                    console.log(err)
                })

        }
    })
      
    return (
        <Container>
            <Form onSubmit={formik.handleSubmit}>
                <BgText>ADMIN LOGIN</BgText>
                {formik.touched.email && formik.errors.email ? (
                    <div style={{color: "red"}}>{formik.errors.email}</div>
                ) : null}
                <TextField label="Email" variant="filled" type="text" {...formik.getFieldProps('email')} />
                
                <TextField label="Password" variant="filled" type='password' {...formik.getFieldProps('password')} />
                {formik.touched.password && formik.errors.password ? (
                    <div style={{color: "red"}}>{formik.errors.password}</div>
                ) : null}
                <Button value='Login' type="submit" />
                {/* <Link to='/admin'>
                    
                </Link> */}
            </Form>
        </Container>
    );
};

export default Login;