import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import SuccessToaster from '../common/Toaster/SuccessToaster';
import ErrorToaster from '../common/Toaster/ErrorToaster';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, signOutUser } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSignOut = () => {
    signOutUser()
    .then(result => {
      SuccessToaster(`${user.displayName} is sign out.`)
    })
    .catch(error => {
      ErrorToaster(error.message);
    })
  };

  return (
    <nav className={`w-full z-20 top-0 start-0 pt-2 ${isScrolled ? 'border-b border-gray-200' : ''}`}>
      <div className="max-w-screen-2xl w-11/12 flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/template/jobhub-logo.svg" className="h-8" alt="Flowbite Logo" />
        </Link>
        <div className="flex items-center sm:gap-6 lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
          {
            user ?
              <button onClick={handleSignOut} type="button" className="text-white bg-[#3c65f5] hover:bg-[#05264e] font-medium rounded-lg text-sm px-2 sm:px-5 py-3 text-center">Sign Out</button>
              :
              <>
                <Link to={'/register'} className='hidden md:flex underline font-medium'>Register</Link>
                <Link to={'/login'}>
                  <button type="button" className="text-white bg-[#3c65f5] hover:bg-[#05264e] font-medium rounded-lg text-sm px-2 sm:px-5 py-3 text-center">Sign In</button>
                </Link>
              </>
          }
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${isMenuOpen ? 'flex' : 'hidden'} w-full lg:flex lg:w-auto lg:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium  rounded-lg lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block py-2 px-3 text-white bg-blue-700 rounded-sm lg:bg-transparent lg:text-blue-500 lg:p-0 lg:border-blue-700 lg:border-b-2 lg:pb-1"
                  : "text-black"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/jobs"
              className={({ isActive }) =>
                isActive
                  ? "block py-2 px-3 text-white bg-blue-700 rounded-sm lg:bg-transparent lg:text-blue-500 lg:p-0 lg:border-blue-700 lg:border-b-2 lg:pb-1"
                  : "text-black"
              }
            >
              Find a Job
            </NavLink>
            <NavLink
              to="/recruiters"
              className={({ isActive }) =>
                isActive
                  ? "block py-2 px-3 text-white bg-blue-700 rounded-sm lg:bg-transparent lg:text-blue-500 lg:p-0 lg:border-blue-700 lg:border-b-2 lg:pb-1"
                  : "text-black"
              }
            >
              Recruiters
            </NavLink>
            <NavLink
              to="/candidates"
              className={({ isActive }) =>
                isActive
                  ? "block py-2 px-3 text-white bg-blue-700 rounded-sm lg:bg-transparent lg:text-blue-500 lg:p-0 lg:border-blue-700 lg:border-b-2 lg:pb-1"
                  : "text-black"
              }
            >
              Candidates
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "block py-2 px-3 text-white bg-blue-700 rounded-sm lg:bg-transparent lg:text-blue-500 lg:p-0 lg:border-blue-700 lg:border-b-2 lg:pb-1"
                  : "text-black"
              }
            >
              Contact
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
