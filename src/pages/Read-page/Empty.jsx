import React from 'react';
import { Link } from 'react-router-dom';

const Empty = () => {
    return (
        <div className='flex flex-col justify-around  md:my-20 text-center'>
            <h1 className='text-5xl font-bold'> "No pages have been read."</h1>
            <Link to='/'> <button className='btn btn-success md:w-[150px] flex justify-center mx-auto text-white my-10'>Go back home</button></Link>
        </div>
    );
};

export default Empty;