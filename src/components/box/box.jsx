import { Breadcrumbs } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Img from "../../images/slide2.jpg";
import { BgText, SmText } from '../../constant/style';
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
padding:2rem;
`;


const Box = ({title, currentPage}) => {
    return (
        <Container>
            <Bg>
                
             
                    
                <BgText white>{title}</BgText>
                    <Breadcrumbs>
                    <Link to=''><SmText white>Home</SmText></Link>
                    <Link to=''><SmText white>{currentPage}</SmText></Link>
                    </Breadcrumbs>

                
            </Bg>
        </Container>
    );
};

export default Box;