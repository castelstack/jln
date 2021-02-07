import React from 'react';
import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
 import LandingBox from './data'
 import styled from "styled-components";
 
 const Con = styled.div`
  
   
 `;

const Carousels = () => {
    
   
    return (
        <Con>
   <CarouselProvider
        
        naturalSlideHeight={100}
        totalSlides={3}
        interval={9000}
                isPlaying
                isIntrinsicHeight
            >
                <Slider>
<Slide index={0}><LandingBox/></Slide>
<Slide index={1}><LandingBox/></Slide>
<Slide index={2}><LandingBox/></Slide>
                </Slider>
      </CarouselProvider>

        </Con>
    );
};
export default Carousels;