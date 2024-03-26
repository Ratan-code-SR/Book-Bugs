import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addWishList, saveReadBooksList } from '../utils';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Book_details = () => {
    const booksData = useLoaderData()
    const { id } = useParams()
    const numId = parseInt(id)
    const book = booksData.find(data => data.id === numId);
    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;
    const addReadList = (book) => {
        saveReadBooksList(book)
    }

    const handleWishList = (book) => {
        addWishList(book)
    }

    return (
        <div className='mt-5  md:flex justify-between items-center gap-10 grid grid-cols-1 py-3'>
            <div className='md:w-2/5 md:h-[450px] flex justify-center rounded-md bg-[#f3f3f3] p-10'>
                <img className='h-auto' src={image} alt="" />
            </div>
            <div className='md:w-3/5 w-full p-2  leading-10 '>
                <h1 className='text-3xl font-bold'>{bookName}</h1>
                <p><span className='font-bold'>By:</span> {author}</p>
                <hr />
                <p>{category}</p>
                <hr />
                <p className='leading-7'><span className='font-bold'>Review:</span> {review}</p>
                <p className='flex gap-3 items-center my-2'><span className='font-bold'>Tag:</span> {tags.map((tag, index) => <li key={index} className='text-[#23be0a] font-bold text-sm bg-[#f3f3f3] px-2 rounded-md list-none'>#{tag}</li>)}</p>
                <hr />

                <div className=' flex items-center gap-20 leading-7 my-2'>
                    <div>
                        <p>Number of page:</p>
                        <p>Publisher: </p>
                        <p>Year of Publishing: </p>
                        <p>Rating: </p>
                    </div>
                    <div className='font-bold'>
                        <p> {totalPages}</p>
                        <p> {publisher}</p>
                        <p> {yearOfPublishing}</p>
                        <p> {rating}</p>
                    </div>
                </div>

                <div className='flex gap-2'>
                    <button onClick={() => addReadList(book)} className='border border-gray-400 px-4 rounded-lg font-bold'>Read</button>
                    <button onClick={() => handleWishList(book)} className='btn btn-success text-white bg-[#50b1c9]'>Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Book_details;