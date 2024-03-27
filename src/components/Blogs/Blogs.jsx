import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from './Blog';

const Blogs = () => {
    const blogs = useLoaderData()
    return (
       <>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 '>
            {blogs.map(data => <Blog key={data.id} data={data} />)}
        </div>
       </>
    );
};

export default Blogs;