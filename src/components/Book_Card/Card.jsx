import { FaRegStar } from "react-icons/fa";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const Card = ({ data }) => {
    const { id, image, tags, bookName, author, category, rating } = data;

    return (
        <div>
            <Link to={`/details/${id}`}>
                <div className="card border border-gray-400 p-4 transition-all hover:scale-105">
                    <figure className="p-10 rounded-xl  bg-[#f3f3f3]">
                        <img src={image} alt="Shoes" className=" h-[150px] rounded-md" />
                    </figure>
                    <div className='mt-4'>
                        <div className='flex list-none gap-3 '>
                            {tags.map((tag,index) => <li key={index} className='text-[#23be0a] font-bold bg-[#f3f3f3] p-2 rounded-md'>{tag}</li>)}
                        </div>
                        <h1 className='text-2xl font-bold my-2'>{bookName}</h1>
                        <p>By: {author}</p>
                        <div className='flex justify-between items-center my-2'>
                            <h2>{category}</h2>
                            <p className="flex gap-3 items-center">{rating} <FaRegStar /></p>
                        </div>
                    </div>
                </div>
            </Link>

        </div>
    );
};

Card.propTypes = {
    data: PropTypes.object.isRequired
};
export default Card;