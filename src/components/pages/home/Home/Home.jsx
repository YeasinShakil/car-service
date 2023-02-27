import React from 'react';
// import PageTitle from '../../../shared/page title/PageTitle';

import Banner from '../banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../services/Services';

const Home = () => {
    return (
        <div>
            {/* <PageTitle title='Home'></PageTitle> */}
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;