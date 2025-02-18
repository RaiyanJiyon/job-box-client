import React from 'react';
import Location from '../../components/Contact/Location/Location';
import ContactForm from '../../components/Contact/ContactForm/ContactForm';
import OurTeam from '../../components/Contact/OurTeam/OurTeam';
import Testimonial from '../../components/Contact/Testimonial/Testimonial';
import useScrollToTop from '../../hooks/useScrollToTop';
import { Helmet } from 'react-helmet-async';
import PageCover from '../../components/PageCover/PageCover';

const Contact = () => {
    useScrollToTop();
    return (
        <div>
            <Helmet>
                <title>Contact | Job Box</title>
            </Helmet>

            <PageCover backgroundImage="https://i.ibb.co/MDNsJCHy/cover.jpg" title="Contact Us" description="Get the latest news, updates and tips" pageName="Contact" nextPageName="Pricing Plan" />

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