import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <Link to='/'>
            <div className='flex flex-col justify-around  md:my-20 text-center'>
                <h1 className='text-5xl font-bold'>404</h1>
                <p className=''>Not found page</p>
            </div>
        </Link>
    );
};

export default Error;