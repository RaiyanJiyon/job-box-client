import React from 'react';
import WelcomeAuth from '../../components/common/WelcomeAuth/WelcomeAuth';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";

const Register = () => {
    const { user, signInUserWithGoogle, signUpUserWithEmail } = useAuth();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    // Watch the password field to compare with confirm password
    const password = watch("password");

    const onSubmit = (data) => {
        console.log(data);
        const { fullName, email, username, password, confirmPassword, terms } = data;
        /*
        {
    "fullName": "Raiyan Jiyon",
    "email": "raiyanjiyon@gmail.com",
    "username": "RaiyanJiyon",
    "password": "123456",
    "confirmPassword": "123456",
    "terms": true
} */
        // You can call signUpUserWithEmail here if needed
        signUpUserWithEmail(email, password)
            .then(result => {
                alert('User successfully created');
                alert('User successfully created');
            })
            .catch(error => {
                alert('Error', error);
            })
    };

    return (
        <div className='max-w-screen-2xl w-11/12 mx-auto'>
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
                        <label htmlFor="full_name" className="block mb-2 text-sm font-medium text-gray-900">Full Name *</label>
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
                        <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900">Re-Password *</label>
                        <input
                            {...register("confirmPassword", {
                                required: "Confirm password is required",
                                validate: value => value === password || "Passwords do not match"
                            })}
                            type="password"
                            id="confirm_password"
                            className="bg-gray-50 border border-blue-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-4"
                            placeholder="************"
                        />
                        {errors.confirmPassword && <span className='text-red-500'>{errors.confirmPassword.message}</span>}
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