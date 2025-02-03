import React, { useEffect, useState } from 'react';
import SectionTitle from '../../common/SectionTitle';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const categoryImages = {
    "Marketing": "https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/marketing.svg",
    "Customer Help": "https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/customer.svg",
    "Finance": "https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/finance.svg",
    "Software": "https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/lightning.svg",
    "Human Resource": "https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/human.svg",
    "Management": "https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/management.svg",
    "Retail & Products": "https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/retail.svg",
    "Security Analyst": "https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/security.svg",
    "Content Writer": "https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/content.svg",
    "Market Research": "https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/research.svg",
};

const BrowseCategory = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('/job.json');
                const data = await response.json();
                setJobs(data);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchJobs();
    }, []);

    const categories = [...new Set(jobs.map(job => job.category))];

    return (
        <div className='w-4/5 max-w-screen-2xl mx-auto'>
            <div className='mb-20'>
                <SectionTitle title="Browse by category" description={`Find the job that’s perfect for you. about ${jobs.length}+ new jobs everyday`} />

            </div>

            <Swiper

                spaceBetween={20}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                }}
                modules={[Navigation]}
                className="mySwiper"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
            >
                {categories.map((category, idx) => {
                    const categoryJobs = jobs.filter(job => job.category === category);
                    const imageUrl = categoryImages[category] || "https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/research.svg"; // Use a default image if category not found

                    return (
                        <SwiperSlide key={idx}>
                            <div className=''>
                                <Link to={'/'} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
                                    <div className='mb-2'>
                                        <img src={imageUrl} alt={`${category} logo`} />
                                    </div>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{category}</h5>
                                    <p className="font-normal text-gray-700">{categoryJobs.length} Jobs Available</p>
                                </Link>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

            <style jsx>{`
                .swiper-button-prev,
                .swiper-button-next {
                    color: #9ba4bf; /* Change the color of the buttons */
                    background: #e6ecff; /* Add a semi-transparent background */
                    border-radius: 50%; /* Make the buttons round */
                    width: 60px; /* Set the width */
                    height: 60px; /* Set the height */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .swiper-button-prev:hover,
                .swiper-button-next:hover {
                    background: rgba(255, 255, 255, 0.8); /* Change the background on hover */
                }

                /* Hide buttons on smaller devices */
                @media (max-width: 768px) {
                    .swiper-button-prev,
                    .swiper-button-next {
                        display: none;
                    }
                }

                /* Adjust button positioning */
                .swiper-button-prev {
                    left: -20px;
                }

            
            `}</style>
        </div>
    );
};

export default BrowseCategory;
