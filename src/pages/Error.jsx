import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <Link to='/'>
            <div className='flex flex-col justify-around  md:my-20 text-center'>
                <h1 className='text-5xl font-bold my-3'>OOPPSS!!!</h1>
                <h1 className='text-5xl font-bold'>404</h1>
                <p className='text-2xl'>Not found page</p>
            </div>
        </Link>
    );
};

export default Error;