import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <div className='w-[60%] mx-auto mb-8'>
                        <img src="https://i.ibb.co.com/s9TMvMbH/404.png" alt="" />
                    </div>
                    <h1 className="mb-4 text-xl tracking-tight font-bold lg:text-3xl text-blue-600">404 Not Found</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Whoops! That page doesn’t exist.</p>
                    <p className="mb-4 text-lg font-medium text-gray-500">Here are some helpful links instead:</p>
                    <div className='flex justify-evenly items-center md:w-1/2 mx-auto'>
                        <Link to={'/'} className='text-gray-500 font-medium underline'>Home</Link>
                        <Link to={'/about'} className='text-gray-500 font-medium underline'>About</Link>
                        <Link to={'/help'} className='text-gray-500 font-medium underline'>Help</Link>
                        <Link to={'/contact'} className='text-gray-500 font-medium underline'>Contact</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;