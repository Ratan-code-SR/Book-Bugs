
import { Link } from 'react-router-dom';
import image from '../../assets/pngwing 1.png'
const Hero = () => {
    return (
        <div>
            <section className="flex justify-evenly items-center bg-[#f3f3f3] rounded-md p-7">
                <div>
                    <h1 className='text-5xl mb-5 font-bold'> Books to freshen <br /> up your bookshelf</h1>
                    <Link to={`/bookLists`}> <button className="btn bg-[#23be0a] border-none hover:bg-green-500 text-white px-5">View The List</button></Link>
                </div>
                <div>
                    <img src={image} alt="" />
                </div>
            </section>
        </div>
    );
};

export default Hero;