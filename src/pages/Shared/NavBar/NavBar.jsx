import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../assets/logo.svg'

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink>Home</NavLink></li>
                        <li tabIndex={0}>
                            <NavLink className="justify-between">
                                All Toys
                            </NavLink>
                        </li>
                        <li><NavLink>My Toys</NavLink></li>
                        <li><NavLink>Add A Toys</NavLink></li>
                        <li><NavLink to='/blogs'>Blogs</NavLink></li>
                    </ul>
                </div>
                <Link to='/' className="flex items-center gap-4 normal-case text-xl">
                    <img className='w-10 rounded-full' src={Logo} alt="" />
                    Kingdom of Toys</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    <li><NavLink>Home</NavLink></li>
                    <li tabIndex={0}>
                        <NavLink>
                            All Toys
                        </NavLink>
                    </li>
                    <li><NavLink>My Toys</NavLink></li>
                    <li><NavLink>Add A Toys</NavLink></li>
                    <li><NavLink to='/blogs'>Blogs</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    );
};

export default NavBar;