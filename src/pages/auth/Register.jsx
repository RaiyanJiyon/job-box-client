import React from 'react';
import WelcomeAuth from '../../components/common/WelcomeAuth/WelcomeAuth';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";
import SuccessToaster from '../../components/common/Toaster/SuccessToaster';
import ErrorToaster from '../../components/common/Toaster/ErrorToaster';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { Helmet } from 'react-helmet-async';
import useScrollToTop from '../../hooks/useScrollToTop';

const Register = () => {
    useScrollToTop();
    const { signUpUserWithEmail } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const password = watch("password");

    const onSubmit = async (data) => {
        const { fullName, email, username, password, role } = data;
        try {
            const result = await signUpUserWithEmail(email, password);

            if (result?.user) {
                await axiosPublic.post('/users', { name: fullName, email, username, photoURL: "https://i.ibb.co.com/fztydKNS/default-user.jpg", role });
                SuccessToaster('Congratulations, your account has been successfully created.');
                reset();
                navigate('/');
            }
        } catch (error) {
            ErrorToaster('Email has already been taken.');
        }
    };


    return (
        <div className='max-w-screen-2xl w-11/12 mx-auto'>
            <Helmet>
                <title>Register | Job Box</title>
            </Helmet>
            
            <div className='w-4/5 md:w-[25%] mx-auto py-16'>
                <div>
                    <WelcomeAuth
                        welcomeMessage="Register"
                        title="Start for free Today"
                        description="Access to all features. No credit card required."
                    />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Full Name Field */}
                    <div className="mb-6">
                        <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900">Full Name *</label>
                        <input
                            {...register("fullName", { required: "Full name is required" })}
                            type="text"
                            id="fullName"
                            className="bg-gray-50 border border-blue-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-4"
                            placeholder="John Doe"
                        />
                        {errors.fullName && <span className='text-red-500'>{errors.fullName.message}</span>}
                    </div>

                    {/* Email Field */}
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email *</label>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            })}
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-blue-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-4"
                            placeholder="john.doe@example.com"
                        />
                        {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                    </div>

                    {/* Username Field */}
                    <div className="mb-6">
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Username *</label>
                        <input
                            {...register("username", { required: "Username is required" })}
                            type="text"
                            id="username"
                            className="bg-gray-50 border border-blue-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-4"
                            placeholder="johndoe"
                        />
                        {errors.username && <span className='text-red-500'>{errors.username.message}</span>}
                    </div>

                    {/* Password Field */}
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password *</label>
                        <input
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters"
                                }
                            })}
                            type="password"
                            id="password"
                            className="bg-gray-50 border border-blue-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-4"
                            placeholder="************"
                        />
                        {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
                    </div>

                    {/* Confirm Password Field */}
                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900">Re-Password *</label>
                        <input
                            {...register("confirmPassword", {
                                required: "Confirm password is required",
                                validate: value => value === password || "Passwords do not match"
                            })}
                            type="password"
                            id="confirmPassword"
                            className="bg-gray-50 border border-blue-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-4"
                            placeholder="************"
                        />
                        {errors.confirmPassword && <span className='text-red-500'>{errors.confirmPassword.message}</span>}
                    </div>

                    {/* User Role Selection */}
                    <div className="mb-6">
                        <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900">Role *</label>
                        <select
                            {...register("role", { required: "Role is required" })}
                            id="role"
                            className="bg-gray-50 border border-blue-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-4"
                        >
                            <option value="">Select your role</option>
                            <option value="job seeker">Job Seeker</option>
                            <option value="recruiter">Recruiter</option>
                        </select>
                        {errors.role && <span className='text-red-500'>{errors.role.message}</span>}
                    </div>

                    {/* Terms and Conditions Checkbox */}
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input
                                {...register("terms", { required: "You must agree to the terms and conditions" })}
                                id="remember"
                                type="checkbox"
                                className="w-4 h-4 border border-blue-200 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300"
                            />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">I agree with the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>.</label>
                    </div>
                    {errors.terms && <span className='text-red-500'>{errors.terms.message}</span>}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full text-white bg-[#05264e] hover:bg-[#3c65f5] font-medium rounded-lg text-sm px-2 sm:px-5 py-3 text-center"
                    >
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
