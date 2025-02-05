import React from 'react';

const ProfileCreation = () => {
    return (
        <section className="bg-[#eff2fb]">
            <div className="grid w-11/12 max-w-screen-2xl mx-auto px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img className='rounded-3xl' src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage5/img-profile.png" alt="mockup" />
                </div>
                <div className="place-self-center lg:col-span-7">
                    <h2 className='text-2xl font-bold text-blue-500 mb-2'>Create Profile</h2>
                    <h1 className="max-w-2xl mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                        Create Your Personal Account Profile
                    </h1>
                    <p className="max-w-2xl mb-6 text-gray-700 lg:mb-8 text-sm font-medium">
                        Work Profile is a personality assessment that measures an individual's work personality through their workplace traits, social and emotional traits; as well as the values and aspirations that drive them forward.
                    </p>
                    <div>
                        <button type="button" className="text-white bg-[#3c65f5] hover:bg-[#05264e] font-medium rounded-lg text-sm px-2 sm:px-5 py-3 text-center">Create Profile</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileCreation;