
import { Link, useLoaderData, useParams } from 'react-router-dom';
const Blog_details = () => {
    const blogData = useLoaderData()
    const { id } = useParams()
    const numId = parseInt(id)
    const idData = blogData.find((data) => data.id === numId)
    const { banner_img, post, date, book_name } = idData;
    return (
        <div>

            <div className="md:w-[800px] mx-auto my-10 p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={banner_img} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        <div className="flex items-center text-xs">
                            <span>{date} ago</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-xl font-semibold dark:text-violet-600">{book_name}</h3>
                        </a>
                        <p className="leading-snug dark:text-gray-600">{post}</p>
                    </div>
                </div>
                <Link to='/'> <button className='btn btn-secondary my-3'>Go To Home Page</button></Link>
            </div>
        </div>
    );
};

export default Blog_details;