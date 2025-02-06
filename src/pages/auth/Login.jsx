import React from 'react';
import WelcomeAuth from '../../components/common/WelcomeAuth/WelcomeAuth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import ErrorToaster from '../../components/common/Toaster/ErrorToaster';
import SuccessToaster from '../../components/common/Toaster/SuccessToaster';

const Login = () => {
    const { signInUserWithEmail } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;
        signInUserWithEmail(email, password)
            .then(() => {
                SuccessToaster('Successfully signed in');
                reset();
                navigate('/');
            })
            .catch(() => {
                ErrorToaster('Your email and password do not match. Please try again.');
            });
    };

    return (
        <div className='max-w-screen-2xl w-11/12 mx-auto'>
            <div className='w-4/5 md:w-[25%] mx-auto py-16'>
                <div className='pb-4'>
                    <WelcomeAuth welcomeMessage="Welcome back!" title="Member Login" description="Access to all features. No credit card required." />
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email address*</label>
                        <input 
                            {...register("email", { required: "Email is required" })}
                            type="email" 
                            id="email" 
                            className="bg-gray-50 border border-blue-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-4" 
                            placeholder="johndoe" 
                            required 
                        />
                        {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password *</label>
                        <input 
                            {...register("password", { required: "Password is required" })}
                            type="password" 
                            id="password" 
                            className="bg-gray-50 border border-blue-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-4" 
                            placeholder="************" 
                            required 
                        />
                        {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
                    </div>
                    <div className="flex justify-between items-start mb-6">
                        <div className="flex items-start mb-5">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300" />
                            </div>
                            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">Remember me</label>
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
