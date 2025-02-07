import React from 'react';
import { useForm } from 'react-hook-form';
import { MdMailOutline } from 'react-icons/md';
import Swal from 'sweetalert2';

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Log the submitted data
        Swal.fire({
            title: "Form submitted successfully!",
            icon: "success",
            draggable: true
        });
        reset();
    };

    return (
        <div className="flex gap-10 w-11/12 max-w-screen-2xl mx-auto">
            <div className='space-y-2 w-full'>
                <h3 className='text-blue-500 font-medium'>Contact us</h3>
                <h2 className='text-4xl font-bold'>Get in touch</h2>
                <p className='text-gray-500 text-lg'>
                    The right move at the right time saves your investment. Live the dream of expanding your business.
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-6">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {/* Full Name Field */}
                        <div>
                            <input
                                {...register("name", { required: "Name is required" })}
                                type="text"
                                id="name"
                                className="bg-gray-50 border border-blue-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-3"
                                placeholder="Enter your name"
                            />
                            {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
                        </div>
                        {/* Company Field (Optional) */}
                        <div>
                            <input
                                {...register("company")}
                                type="text"
                                id="company"
                                className="bg-gray-50 border border-blue-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-3"
                                placeholder="Company (Optional)"
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {/* Email Field */}
                        <div>
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
                                className="bg-gray-50 border border-blue-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-3"
                                placeholder="Your Email"
                            />
                            {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                        </div>
                        {/* Phone Number Field */}
                        <div>
                            <input
                                {...register("phone", {
                                    required: "Phone number is required",
                                    minLength: {
                                        value: 10,
                                        message: "Phone number must be at least 10 digits"
                                    },
                                    maxLength: {
                                        value: 15,
                                        message: "Phone number cannot exceed 15 digits"
                                    }
                                })}
                                type="tel"
                                id="phone"
                                className="bg-gray-50 border border-blue-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-3"
                                placeholder="Phone Number"
                            />
                            {errors.phone && <span className='text-red-500'>{errors.phone.message}</span>}
                        </div>
                    </div>
                    {/* Tell Us About Yourself (Textarea) */}
                    <div>
                        <textarea
                            {...register("message", {
                                required: "Message is required",
                                minLength: {
                                    value: 10,
                                    message: "Message must be at least 10 characters"
                                }
                            })}
                            id="message"
                            rows="10"
                            className="bg-gray-50 border border-blue-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-3"
                            placeholder="Tell us about yourself"
                        ></textarea>
                        {errors.message && <span className='text-red-500'>{errors.message.message}</span>}
                    </div>
                    <div className='flex flex-col-reverse md:flex-row justify-start md:items-center gap-6'>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="flex justify-center items-center gap-1 w-auto text-white bg-[#3c65f5] hover:bg-[#05264e] font-bold rounded-lg text-sm px-5 py-3 text-center"
                        >
                            <MdMailOutline className='text-white text-lg' />
                            Send Message
                        </button>
                        {/* Terms and Conditions Checkbox */}
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    {...register("terms", { required: "You must agree to the terms and conditions" })}
                                    id="remember"
                                    type="checkbox"
                                    className="w-4 h-4 border border-blue-200 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300"
                                />
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">
                                By clicking contact us button, you agree to our terms and policy.
                            </label>
                            {errors.terms && <span className='text-red-500 ml-6'>{errors.terms.message}</span>}
                        </div>
                    </div>
                </form>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex h-1/2">
                <img
                    className='rounded-3xl'
                    src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/contact/img.png"
                    alt="Contact Us Illustration"
                />
            </div>
        </div>
    );
};

export default ContactForm;