import { createContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getBooks } from "../utils";

export const UserContext = createContext()
const Book_list = () => {
    const [count, setCount] = useState(0)
    const data = getBooks()
    const [items, setItems] = useState(data);
    const [sortBy, setSortBy] = useState('');

    const sortDescending = (property) => {
        const sortedItems = [...items].sort((a, b) => b[property] - a[property]);
        setItems(sortedItems);
    };

    const handleSortChange = (event) => {
        const selectedField = event.target.value;
        setSortBy(selectedField);
        sortDescending(selectedField);
    };

    return (

        <div>
            <UserContext.Provider value={items}>
                <h1 className="text-3xl font-bold text-center p-3 bg-[#f3f3f3] rounded-md">Reading books enhances knowledge acquisition.</h1>
                <select className="select   text-xl   mx-auto flex my-5 bg-[#23be21] border-none " value={sortBy} onChange={handleSortChange}>
                    <option className="bg-white " value="">Sort By</option>
                    <option className="bg-white " value="totalPages">Total Pages</option>
                    <option className="bg-white " value="rating">Rating</option>
                    <option className="bg-white " value="yearOfPublishing">Year Of Publishing</option>
                </select>
                <div>
                    <div className="flex items-center px-5 -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                        <Link to=''>
                            <div onClick={() => setCount(0)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  ${count === 0 ? 'border border-b-0 border-l-0 w-full' : 'border-b '} rounded-t-lg border-[#d1d1d1]dark:text-gray-600`}>
                                <span>Read Books</span>
                            </div>
                        </Link>
                        <Link to='wishList'>
                            <div onClick={() => setCount(1)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${count === 1 ? 'border border-b-0' : ' border-b  '}  rounded-t-lg border-[#d1d1d1] dark:text-gray-900`}>

                                <span>Wishlist Books</span>
                            </div>
                        </Link>

                        <div rel="noopener noreferrer" href="#" className={`flex md:block items-center flex-shrink-0 px-5 py-3 space-x-2  rounded-t-lg border-[#d1d1d1] dark:text-gray-900 border-b md:w-[950px]  hidden `}>
                            <span className="text-white">.</span>
                        </div>
                    </div>
                    <Outlet />
                </div>
            </UserContext.Provider>

        </div>
    );
};

export default Book_list;