import React, { useEffect, useState } from 'react';

import PageTitle from '../../../shared/page title/PageTitle';
import Service from '../Home/service/Service';
import './services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    // console.log(services)
    return (
        <div id="services" className='container'>
            {/* <PageTitle title='service'></PageTitle> */}
            <div className="row">
                <h1 className='text-primary text-center mt-5'> Our Services</h1>
                <div className="services-container">
                    
                            {
                                services.map(service => <Service
                                    key={service.id}
                                    service={service}
                                >
                                </Service>)
                            }
                        
                    
                </div>
            </div>
        </div>

    );
};

export default Services;