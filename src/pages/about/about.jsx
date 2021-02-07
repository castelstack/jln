import React from 'react';
import Box from '../../components/box/box';
import BusinessRelations from '../../components/business-rel/business-rel';
import Goals from '../../components/goals/goals';
import MissionStatement from '../../components/mission-state/mission-state';
import Overview from '../../components/overview/overview';

const About = () => {
    return (
        <div>
            <Box title='About Us' currentPage='about Us'/>
            <Overview />
            <Goals />
            <MissionStatement />
            <BusinessRelations />
        </div>
    );
};

export default About;