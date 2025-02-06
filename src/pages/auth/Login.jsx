import React from 'react';
import WelcomeAuth from '../../components/common/WelcomeAuth/WelcomeAuth';
import { Link } from 'react-router-dom';
import { div } from 'motion/react-client';

const Login = () => {
    return (
        <div className='max-w-screen-2xl w-11/12 mx-auto'>
            <div className='w-4/5 md:w-[25%] mx-auto py-16'>
                <div className='pb-4'>
                    <WelcomeAuth welcomeMessage="Welcome back!" title="Member Login" description="Access to all features. No credit card required." />
                </div>

                <form>
                    <div className="mb-6">
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Username or Email address*</label>
                        <input type="text" id="username" className="bg-gray-50 border border-blue-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-4" placeholder="johndoe" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password *</label>
                        <input type="password" id="password" className="bg-gray-50 border border-blue-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-4" placeholder="************" required />
                    </div>
                    <div className="flex justify-between items-start mb-6">
                        <div class="flex items-start mb-5">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <Link to={'/recover-password'} className='text-sm text-gray-900'>Forget Password</Link>
                    </div>
                    <button type="submit" className="w-full text-white bg-[#05264e] hover:bg-[#3c65f5] font-medium rounded-lg text-sm px-2 sm:px-5 py-3 text-center">
                        Login
                    </button>
                </form>
            </div>
            <div className='mt-6'>
                <img src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/login-register/img-3.svg" alt="" />
            </div>
            <div className='border border-b-blue-100 mt-4'></div>
        </div>
    );
};

export default Login;