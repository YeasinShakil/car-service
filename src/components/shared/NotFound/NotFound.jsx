import React from 'react';
import sleeping from '../../../images/icon/achievement.png'
const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Mechanic is sleeping</h2>
            <img className='w-40' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;