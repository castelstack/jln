import { Breadcrumbs } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Img from "../../images/slide2.jpg";
import { LgText, SmText } from '../../constant/style';
import styled from "styled-components";


const Container = styled.div`
background-image: url(${Img});
background-position: center;
`;

const Bg = styled.div`
height: 80vh;
width: 100%;
background-color: rgb(0, 0, 0, 0.5);
display: grid;
grid-template-columns: max-content;
grid-template-rows: min-content min-content;
align-content: end;
padding:1rem;
`;

const LinkTo = styled(Link)`
text-decoration: none;

`

const Box = ({title, currentPage}) => {
    return (
        <Container>
            <Bg>
                
             
                    
                <LgText white>{title}</LgText>
                    <Breadcrumbs>
                    <LinkTo to=''><SmText white bold>Home</SmText></LinkTo>
                    <LinkTo to=''><SmText white >{currentPage}</SmText></LinkTo>
                    </Breadcrumbs>

                
            </Bg>
        </Container>
    );
};

export default Box;