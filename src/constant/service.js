import styled from 'styled-components';
import {MdText, SmText} from './style'

export const Container = styled.div`
display: grid;
grid-template-columns: 1fr ;
`
export const Card = styled.div`
display: grid;
grid-template-columns: min-content 1fr;`
export const Img = styled.div`

object-fit: fill;`
export const Image = styled.img`
width: 20rem;
height: 30rem;
object-fit: fill;
z-index: 100;`
export const Details = styled.div`
background:  #343a40;
color: white;
transform: translate(-3rem, 2rem);
box-shadow: 5px -5px -10px grey;
z-index: 1;
padding: .5rem;
width: 20rem;
height: 30rem;`

export const Head = styled(MdText)`
text-decoration: uppercase;
font-weight: bold;
@media only screen and (max-width: 600px) {
    font-size: 1.1rem;
    line-height: 22px;
  }`

export const Info = styled(SmText)`
line-height: 22px;

@media only screen and (max-width: 600px) {
    font-size: 13px;
    line-height: 22px;
  }
  
`