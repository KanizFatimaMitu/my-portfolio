import React from 'react';
import  pic from '../Assests/404.jpg'

const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <img src={pic} alt='picture' />
        </div>
    );
};

export default NotFound;