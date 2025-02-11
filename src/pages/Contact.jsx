import React from 'react';
import Location from '../components/Contact/Location/Location';
import ContactForm from '../components/Contact/ContactForm/ContactForm';
import OurTeam from '../components/Contact/OurTeam/OurTeam';
import Testimonial from '../components/Contact/Testimonial/Testimonial';
import useScrollToTop from '../hooks/useScrollToTop';

const Contact = () => {
    useScrollToTop();
    return (
        <div>
            <div className="relative h-36 bg-cover bg-center mt-2" style={{ backgroundImage: 'url(https://i.ibb.co/MDNsJCHy/cover.jpg)' }}>
                {/* Dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center h-full w-11/12 max-w-screen-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-2">About Us</h2>
                    <p className="text-gray-200">Get the latest news, updates and tips</p>

                    {/* Breadcrumb navigation */}
                    <div className="absolute bottom-6 right-6 bg-white/90 px-4 py-2 rounded-lg text-sm">
                        <span className="text-gray-600">Home</span>
                        <span className="mx-2 text-gray-400">›</span>
                        <span className="text-gray-800">Blog</span>
                    </div>
                </div>
            </div>

            <div className='py-16'>
                <Location />
            </div>

            <div className=''>
                <ContactForm />
            </div>

            <div className='my-20'>
                <OurTeam />
            </div>

            <div className='my-20'>
                <Testimonial />
            </div>
        </div>
    );
};

export default Contact;