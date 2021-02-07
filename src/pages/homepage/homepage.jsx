import React from 'react';
import Carousels from '../../containers/carousel/carousel';
import Services from '../../containers/services/services';
import AboutUs from '../../containers/about-us/about-us';
import SubFoot from '../../components/sub-foot/sub-foot';
import styled from 'styled-components';
import Project from '../../containers/project/project';
const Container = styled.div``
const Homepage = () => {
    return (
        <Container>
            
            <Carousels />
            <AboutUs />
            <Services/>
            <Project />
            <SubFoot/>
            
        </Container>
    );
};

export default Homepage;