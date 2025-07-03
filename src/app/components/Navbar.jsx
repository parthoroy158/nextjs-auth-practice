import Link from 'next/link';
import React from 'react';


const Navbar = () => {


    const NavBarOfNavLink =
        <div className='md:flex'>
            <Link href='/'>
                <li><a>Home</a></li>
            </Link>
            <Link href='/logIn'>
                <li><a>Log In</a></li>
            </Link>
            <Link href='/signUp'>
                <li><a>Sign Up</a></li>
            </Link>
        </div>



    return (
        <div className='w-full fixed top-0 z-20 bg-white dark:bg-white shadow-sm'>
            <div className="navbar bg-base-100 max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {NavBarOfNavLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Next Js Auth Practice</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavBarOfNavLink}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;