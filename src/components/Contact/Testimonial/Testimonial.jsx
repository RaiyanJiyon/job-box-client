import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch('/testimonials.json');
                const data = await response.json();
                setTestimonials(data);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchTestimonials();
    }, []);

    return (
        <div>
            <div className='w-11/12 md:w-1/2 mx-auto text-center'>
                <h2 className='text-4xl font-bold mb-4'>Our Happy Customer</h2>
                <p className='text-gray-500 text-sm'>
                    When it comes to choosing the right web hosting provider, we know how easy it is to get overwhelmed with the number.
                </p>
            </div>

            <Swiper
                spaceBetween={20}
                modules={[Navigation, Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                className="mySwiper w-11/12 max-w-screen-2xl mx-auto my-16"
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
                }}
            >
                {
                    testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className='flex flex-col gap-6'>
                                <div className="mx-auto bg-white border border-gray-200 rounded-lg shadow-md p-6">
                                    <div className="relative">
                                        <p className="text-gray-700 text-base">
                                            {testimonial.review}
                                        </p>
                                        <div className="absolute -bottom-10 w-8 h-8 bg-white border border-t-white border-l-white rotate-45"></div>
                                    </div>
                                </div>
                                <div className="flex items-center ml-3 mt-3">
                                    <div className="shrink-0">
                                        <img className="w-14 h-14 rounded-full" src={`${testimonial.image}`} alt={`${testimonial.name} image`} />
                                    </div>
                                    <div className="flex-1 min-w-0 ms-4">
                                        <p className="text-sm font-medium text-gray-900 truncate">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-sm text-gray-500 truncate">
                                            {testimonial.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Testimonial;
