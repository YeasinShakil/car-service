import React from 'react';
import Banner from '../banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;