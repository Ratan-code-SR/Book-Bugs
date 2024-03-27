import { NavLink } from "react-router-dom";

const Nav = () => {
    const navList = <>
        <NavLink className={`ml-6 border border-white p-2 rounded-md text-lg`} to='/'> <li>Home</li></NavLink>
        <NavLink className={`ml-6 border border-white p-2 rounded-md text-lg`} to='/bookLists'> <li>Listed Books</li></NavLink>
        <NavLink className={`ml-6 border border-white p-2 rounded-md text-lg`} to='/pages'> <li>Pages to Read </li></NavLink>
        <NavLink className={`ml-6 border border-white p-2 rounded-md text-lg`} to='/faqs'> <li>FAQ </li></NavLink>
        <NavLink className={`ml-6 border border-white p-2 rounded-md text-lg`} to='/blogs'> <li>Blogs </li></NavLink>
    </>
    return (
        <>
            <div className="navbar bg-base-100 md:flex-row flex-col-reverse ">
                <div className="md:navbar-start items-center">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navList}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Book Bugs</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navList}
                    </ul>
                </div>
                <div className="md:navbar-end  md:gap-3 gap-2 w-none">
                    <a className="btn  bg-[#23be0a] hover:bg-green-500 text-white px-5">Sign In</a>
                    <a className="btn bg-[#42afea] hover:bg-blue-400 text-white px-5" >Sign Up</a>
                </div>
            </div>

        </>
    );
};

export default Nav;