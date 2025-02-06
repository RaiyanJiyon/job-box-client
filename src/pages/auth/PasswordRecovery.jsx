import React from 'react';

const PasswordRecovery = () => {
    return (
        <div className='max-w-screen-2xl w-11/12 mx-auto'>
            <div className='w-4/5 md:w-[40%] mx-auto py-16'>
                <div className='pb-4 mb-4 text-center'>
                    <h3 className='text-blue-500 font-medium text-sm mb-2'>Forgot Password</h3>
                    <h1 className='text-4xl font-bold mb-3'>Reset Your Password</h1>
                    <p className='text-sm text-gray-500 font-medium'>Enter email address associated with your account and we'll send you a link to reset your password</p>
                </div>

                <form>
                    <div className="mb-6">
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Email address*</label>
                        <input type="text" id="username" className="bg-gray-50 border border-blue-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-3" placeholder="stevenjob@gmail.com" required />
                    </div>
                    <button type="submit" className="w-full text-white bg-[#05264e] hover:bg-[#3c65f5] font-medium rounded-md text-sm px-2 sm:px-5 py-3 text-center">
                        Continue
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

export default PasswordRecovery;