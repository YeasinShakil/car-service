import React from 'react';
import UseService from '../../serviceHooks/UseService';

const ManageService = () => {
    const [services, setServices] = UseService();
    const deleteService= (id)=> {
        const proceed = window.confirm('Are you sure?');
        if(proceed) {
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data=> {
                const remaining = services.filter(service=> service._id !== id);
                setServices(remaining)
            })
        }
    }
    return (
        <div className='mx-auto w-50'>
            <h4 className='mt-2'>Manage your services</h4>
            {
                services.map(service=> (<div key={service._id}>
                    <h6>{service.name} <button className='btn border-primary' onClick={()=> deleteService(service._id)}>delete</button></h6>
                </div>))
            }
        </div>
    );
};

export default ManageService;