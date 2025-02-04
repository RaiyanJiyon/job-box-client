import React from 'react';

const JobSearchBanner = () => {
    return (
        <section className="bg-white w-11/12 max-w-screen-2xl mx-auto">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="place-self-center lg:col-span-7">
                    <h2 className='text-2xl font-bold text-gray-600 mb-2'>Millions Of Jobs.</h2>
                    <h1 className="max-w-2xl mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                        Find The One That’s <span className='text-blue-600'>Right</span> For You
                    </h1>
                    <p className="max-w-2xl mb-6 text-gray-700 lg:mb-8 text-sm font-medium">
                        Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide. The right job is out there.
                    </p>
                    <div>
                        <button type="button" className="text-white bg-[#3c65f5] hover:bg-[#05264e] font-medium rounded-lg text-sm px-2 sm:px-5 py-3 text-center">Search Jobs</button>
                        <button type="button" className="text-gray-700 underline font-medium rounded-lg text-sm px-2 sm:px-5 py-3 text-center hover:text-blue-500">Learn More</button>
                    </div>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img className='rounded-3xl' src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/img1.png" alt="mockup" />
                </div>
            </div>
        </section>
    );
};

export default JobSearchBanner;
