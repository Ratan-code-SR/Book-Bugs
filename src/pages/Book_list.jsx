import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Book_list = () => {
    const data = useLoaderData()
    console.log(data);
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1 className="text-3xl font-bold text-center p-3 bg-[#f3f3f3] rounded-md">Books</h1>
            <button className="btn btn-secondary flex justify-center">Sort</button>

            <div>
                <div className="flex items-center my-5">
                    <Link to={`/bookLists`}>
                        <a onClick={() => setCount(0)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${count === 0 ? 'border border-b-0 w-full' : 'border-b '} dark:border-gray-600 border-black w-full`}>
                            <span>Read Books</span>
                        </a>
                    </Link>
                    <Link to={`wishList`}>
                        <a onClick={() => setCount(1)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 ${count === 1 ? 'border border-b-0 w-full' : ' border-b  '}  rounded-t-lg border-black dark:text-gray-900 w-full  `}>
                            <span>Wishlist Books</span>
                        </a>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Book_list;