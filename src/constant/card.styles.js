import styled from "styled-components";

export const CardFlip = styled.div`


display: inline-block;
width: 70%;
//margin: 0 auto;
padding: 4rem 1rem 7rem 1rem;
background-color: #f8f9fa;
position: relative;
&:after{
  content: "";
  display: block;
  width: 0px;
  height: 0px;
  background-color: #f8f9fa71;
  top: 0px;
  right: 0px;
  border-bottom: 20px solid darken(#f8f9fa, 5%);
  border-left: 20px solid darken(#f8f9fa, 5%);
  border-right: 20px solid #f8f9fa;
  border-top: 20px solid #f8f9fa;
  position: absolute;
  }
&:before{
  content: "";
  display: block;
  width: 0px;
  height: 0px;
  border-top: 40px solid darken(#f8f9fa, 5%);
  border-right: 40px solid darken(#f8f9fa, 5%);
  border-left: 40px solid #f8f9fa;
  border-bottom: 40px solid #f8f9fa;
  bottom: 0px;
  left: 0px;
  position: absolute;
  filter: drop-shadow(7px -7px 5px rgba(0,0,0,0.5));
  margin-right: 10%;}
&:nth-of-type(1){
  margin-right: 9%;}
  
  @media only screen and (max-width: 600px) {
   width: 100%;
  }`;