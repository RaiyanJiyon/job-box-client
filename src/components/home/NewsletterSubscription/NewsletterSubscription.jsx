import React from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { MdMarkEmailUnread } from 'react-icons/md';

const NewsletterSubscription = () => {
    return (
        <section className="w-11/12 max-w-screen-2xl mx-auto pb-20 bg-custom-gradient rounded-2xl">
            <h2 className='text-4xl text-center text-white font-bold pt-12 pb-10'>New Things Will Always <br /> Update Regularly</h2>

            <div className="flex items-center w-11/12 md:w-3/5 mx-auto px-2 md:px-4 py-3 bg-white rounded-xl">
                <div className="md:p-2">
                    <MdMarkEmailUnread className='text-2xl md:text-3xl text-[#66789C]' />
                </div>
                <input
                    type="email"
                    placeholder="Enter your email here"
                    className="flex-1 px-1 md:px-0 md:p-2 text-gray-600 placeholder-gray-400 rounded-full outline-none"
                />
                <button type="button" className="hidden sm:flex items-center gap-2 text-white bg-[#3c65f5] hover:bg-[#05264e] font-medium rounded-lg px-2 sm:px-5 py-3 md:py-5 text-center">
                    <IoMdCheckmarkCircleOutline className='text-lg' />
                    Subscribe
                </button>
            </div>
        </section>
    );
};

export default NewsletterSubscription;