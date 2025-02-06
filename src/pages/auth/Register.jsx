import React from 'react';
import WelcomeAuth from '../../components/common/WelcomeAuth/WelcomeAuth';

const Register = () => {
    return (
        <div className='max-w-screen-2xl w-11/12 mx-auto'>
            <div className='w-4/5 md:w-[25%] mx-auto py-16'>
                <div>
                    <WelcomeAuth welcomeMessage="Register" title="Start for free Today" description="Access to all features. No credit card required." />
                </div>

                <form>
                    <div className="mb-6">
                        <label htmlFor="full_name" className="block mb-2 text-sm font-medium text-gray-900">Full Name *</label>
                        <input type="text" id="full_name" className="bg-gray-50 border border-blue-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-4" placeholder="John Doe" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email *</label>
                        <input type="email" id="email" className="bg-gray-50 border border-blue-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-4" placeholder="john.doe@example.com" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Username *</label>
                        <input type="text" id="username" className="bg-gray-50 border border-blue-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-4" placeholder="johndoe" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password *</label>
                        <input type="password" id="password" className="bg-gray-50 border border-blue-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-4" placeholder="************" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900">Re-Password *</label>
                        <input type="password" id="confirm_password" className="bg-gray-50 border border-blue-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-4" placeholder="************" required />
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-blue-200 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">I agree with the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>.</label>
                    </div>
                    <button type="submit" className="w-full text-white bg-[#05264e] hover:bg-[#3c65f5] font-medium rounded-lg text-sm px-2 sm:px-5 py-3 text-center">
                        Submit & Register
                    </button>
                </form>
            </div>
            <div>
                <img src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/login-register/img-2.svg" alt="" />
            </div>
            <div className='border border-b-blue-100 mt-4'></div>
        </div>
    );
};

export default Register;