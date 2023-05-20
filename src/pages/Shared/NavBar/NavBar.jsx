import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const NavBar = () => {
    const { user, handleSignOut } = useContext(AuthContext);

    return (
        <div className="navbar bg-purple-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
                <Link to='/' className="flex items-center gap-4 normal-case text-xl">
                    <img className='w-10 rounded-full' src={Logo} alt="" />
                    Kingdom of Toys</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li tabIndex={0}>
                        <NavLink to='/alltoys'> All Toys</NavLink>
                    </li>
                    {
                        user ? <>
                            <li><NavLink to='/addtoys'>Add Toys</NavLink></li>
                            <li><NavLink to='/mytoys'>My Toys</NavLink></li>
                            
                        </> : ""
                    }
                    <li><NavLink to='/blogs'>Blogs</NavLink></li>

                    {
                        user ? <li>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} >
                                    <li>
                                        <a className="justify-between">
                                            {
                                                user?.displayName
                                            },
                                        </a>
                                    </li>

                                    <li><button className='btn btn-primary text-white' onClick={handleSignOut}>Logout</button></li>
                                </ul>
                            </div>
                        </li>
                            :
                            <li><NavLink to="/login"><button className='btn btn-primary'>Login</button></NavLink></li>
                    }
                </ul>

            </div>


        </div>
    );
};

export default NavBar;