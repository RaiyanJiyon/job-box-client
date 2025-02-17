import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router";

const Hero = () => {
    return (
        <section className="bg-white mt-20 h-screen 2xl:h-auto 2xl:mb-56">
            <div className="max-w-screen-xl px-6 md:px-12 2xl:px-6 mx-auto mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Side: Text Content */}
                <div className="lg:col-span-7 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-gray-900">
                        Find Jobs, <br /> Hire Creatives
                    </h1>
                    <p className="mt-4 text-gray-600 text-lg">
                        Search thousands of open positions across the web. Get a personalized salary estimate.
                        Read reviews from over 600,000 companies worldwide.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
                        <Link to="/jobs">
                            <button className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg">
                                Search Jobs
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="px-6 py-3 text-blue-600 border border-blue-600 rounded-lg hover:bg-[#05264e] hover:text-white font-medium">
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="hidden lg:flex lg:col-span-5 flex-col items-center relative">
                    {/* Floating Images (Top) */}
                    <div className="flex gap-12 absolute -top-12">
                        <motion.img
                            animate={{ x: [0, -35, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="w-36 rounded-full"
                            src="https://i.ibb.co.com/0Rs9KH0X/banner2.png"
                            alt=""
                        />
                        <motion.img
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="w-30"
                            src="https://i.ibb.co.com/1GH6Pwvk/banner4.png"
                            alt=""
                        />
                    </div>

                    {/* Center Image */}
                    <motion.img
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-60 my-10 rounded-full border border-gray-200 shadow-lg"
                        src="https://i.ibb.co.com/gM10G8w5/banner1.png"
                        alt="mockup"
                    />

                    {/* Floating Images (Bottom) */}
                    <div className="flex gap-10 absolute -bottom-12">
                        <motion.img
                            animate={{ x: [0, -35, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="w-36 rounded-full"
                            src="https://i.ibb.co.com/8nFvvP2G/banner3.png"
                            alt=""
                        />
                        <motion.img
                            animate={{ y: [-10, 5, -10] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className=" rounded-full"
                            src="https://i.ibb.co.com/ymTnjkF7/banner6.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
