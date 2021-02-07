import React from 'react';
import { Breadcrumbs } from '@material-ui/core';
import { NavLink, Route, Switch, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const NavLk = styled(NavLink)`
text-decoration: none;
color: #333333;
font-size: 1.1rem;
font-weight: 300;
position: relative;
overflow: hidden;

will-change: color;
transition: color .25s ease-out;  


&::before, 
&::after{
content: "";
width: 0;
height: 3px;
background-color: green;

will-change: width;
transition: width .1s ease-out;

position: absolute;
bottom: 0;
}

&::before{
left: 50%;
transform: translateX(-50%); 
}

&::after{
right: 50%;
transform: translateX(50%); 
}

&:hover::before, 
&:hover::after{
width: 100%;
transition-duration: .2s;
}
`;
const Gallery = () => {
    return (
        <div>
            <div>
             
            </div>
            <div>
               
            </div>
        </div>
    );
};

export default Gallery;