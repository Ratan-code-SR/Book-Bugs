import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

const Book_list = () => {

    const [count, setCount] = useState(0)
    return (
        <div>
            <h1 className="text-3xl font-bold text-center p-3 bg-[#f3f3f3] rounded-md">Books</h1>
            <select class=" md:my-10 mx-auto flex justify-center bg-[#23be0a] outline-none text-white  p-3 rounded-md">
                <option >Sort Buys <FaAngleDown /></option>
                <option>Pages</option>
                <option>Rating</option>
                <option>Published Year</option>
            </select>
            <div>
                <div className="flex items-center my-5 mt-10">
                    <Link to='bookLists'>
                        <div onClick={() => setCount(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${count === 0 ? 'border border-b-0 w-full' : 'border-b '} rounded-t-lg dark:border-gray-600 border-black w-full`}>
                            <span>Read Books</span>
                        </div>
                    </Link>

                    <Link to='wishList'>
                        <div onClick={() => setCount(1)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 md:px-5 md:py-3 ${count === 1 ? 'border border-b-0 ' : ' border-b  '}  rounded-t-lg border-black dark:text-gray-900 w-full  `}>
                            <span>Wishlist Books</span>
                        </div>
                    </Link>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default Book_list;