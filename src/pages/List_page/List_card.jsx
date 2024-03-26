
import PropTypes from 'prop-types';
import { MdOutlineUpdate } from "react-icons/md";
import { MdOutlineInsertPageBreak } from "react-icons/md";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { Link } from 'react-router-dom';
const List_card = ({list}) => {
    const { id, image, bookName, author, category, totalPages, tags, publisher, yearOfPublishing, rating } = list;
    return (
        <div>
            <div className='mt-5  md:flex justify-between items-center gap-10 grid grid-cols-1 border p-3 rounded-lg my-5'>
                <div className='md:w-2/6  flex justify-center rounded-md bg-[#f3f3f3] p-10'>
                    <img className='md:h-[160px]' src={image} alt="" />
                </div>
                <div className='md:w-3/4 w-full p-2  leading-10 '>
                    <h1 className='text-3xl font-bold'>{bookName}</h1>
                    <p><span >By:</span> {author}</p>
                    <div className='md:flex  md:gap-10 items-center grid grid-cols-1'>
                        <div className='flex items-center gap-2'>
                            <p className='flex gap-3 items-center my-2'><span className='font-bold'>Tag:</span> {tags.map((tag, index) => <li key={index} className='text-[#23be0a] font-bold text-sm bg-[#f3f3f3] px-2 rounded-md list-none'>#{tag}</li>)}</p>
                        </div>
                        <p className='flex gap-2 items-center'><MdOutlineUpdate /> Year of Publish: {yearOfPublishing}</p>
                    </div>
                    <div className='md:flex items-center md:gap-10 text-[#ababab] text-sm grid grid-cols-1'>
                        <p className='flex items-center gap-1'>Publisher:
                            <MdOutlinePeopleAlt /> <span className='ml-2'>{publisher}</span></p>
                        <p className='flex items-center gap-1 my-4'> <MdOutlineInsertPageBreak /> Page <span className='ml-2'>{totalPages}</span></p>
                    </div>
                    <hr />
                    <div className='md:flex items-center md:gap-5  gap-2 text-center mt-5 grid grid-cols-1'>
                        <p className='text-blue-400 bg-[#e0eeff] rounded-full px-4'>Category: {category}</p>
                        <p className='bg-[#fff3e1] text-[#ffae39] rounded-full px-4'>Rating: {rating}</p>
                        <Link to={`/details/${id}`}><button className='bg-[#23be0a] px-4 text-white rounded-full'>View Details</button></Link>

                    </div>

                </div>
            </div>
        </div>
    );
};

List_card.propTypes = {
    list: PropTypes.object.isRequired,
};
export default List_card;