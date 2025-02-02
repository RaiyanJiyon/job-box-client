import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-11/12 max-w-screen-2xl mx-auto py-8">
            {/* Footer Container */}
            <div className="flex flex-col md:flex-row justify-between gap-6">
                {/* Left Section - Logo & Social */}
                <div className="hidden lg:block w-full md:w-[35%]">
                    <img
                        src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/template/jobhub-logo.svg"
                        alt="JobBox Logo"
                        className="h-8"
                    />
                    <p className="mt-4 text-sm text-gray-700">
                        JobBox is the heart of the job portal community and the best resource to discover and connect with recruiters and jobs seekers worldwide.
                    </p>
                    {/* Social Icons */}
                    <div className="flex items-center gap-3 mt-4">
                        <a href="https://www.facebook.com/raiyan.ur.rahman.jiyon/" className="bg-[#3c65f5] text-white rounded-full p-2 cursor-pointer">
                            <FaFacebookF />
                        </a>
                        <a href="https://x.com/RaiyanJiyon0" className="bg-[#3c65f5] text-white rounded-full p-2 cursor-pointer">
                            <FaTwitter />
                        </a>
                        <a href="https://www.linkedin.com/in/raiyanjiyon/" className="bg-[#3c65f5] text-white rounded-full p-2 cursor-pointer">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                {/* Middle Section - Links */}
                <div className="w-full">
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
                        {/* Resources */}
                        <div>
                            <h2 className="mb-4 text-sm font-bold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium space-y-2">
                                <li><a href="#" className="hover:underline">About us</a></li>
                                <li><a href="#" className="hover:underline">Our Team</a></li>
                                <li><a href="#" className="hover:underline">Products</a></li>
                                <li><a href="#" className="hover:underline">Contact</a></li>
                            </ul>
                        </div>

                        {/* Community */}
                        <div>
                            <h2 className="mb-4 text-sm font-bold text-gray-900 uppercase">Community</h2>
                            <ul className="text-gray-500 font-medium space-y-2">
                                <li><a href="#" className="hover:underline">Feature</a></li>
                                <li><a href="#" className="hover:underline">Pricing</a></li>
                                <li><a href="#" className="hover:underline">Credit</a></li>
                                <li><a href="#" className="hover:underline">FAQ</a></li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h2 className="mb-4 text-sm font-bold text-gray-900 uppercase">Quick Links</h2>
                            <ul className="text-gray-500 font-medium space-y-2">
                                <li><a href="#" className="hover:underline">iOS</a></li>
                                <li><a href="#" className="hover:underline">Android</a></li>
                                <li><a href="#" className="hover:underline">Microsoft</a></li>
                                <li><a href="#" className="hover:underline">Desktop</a></li>
                            </ul>
                        </div>

                        {/* More */}
                        <div>
                            <h2 className="mb-4 text-sm font-bold text-gray-900 uppercase">More</h2>
                            <ul className="text-gray-500 font-medium space-y-2">
                                <li><a href="#" className="hover:underline">Privacy</a></li>
                                <li><a href="#" className="hover:underline">Help</a></li>
                                <li><a href="#" className="hover:underline">Terms</a></li>
                                <li><a href="#" className="hover:underline">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right Section - Download App */}
                <div className="w-full md:w-auto space-y-4">
                    <h2 className="text-sm font-bold text-gray-900 uppercase">Download App</h2>
                    <p className="text-sm text-gray-700">
                        Download our Apps and get extra 15% Discount on your first Order…!
                    </p>
                    <div className="space-y-2">
                        <img
                            src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/template/icons/app-store.png"
                            alt="App Store"
                            className="h-10 cursor-pointer"
                        />
                        <img
                            src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/template/icons/android.png"
                            alt="Google Play"
                            className="h-10 cursor-pointer"
                        />
                    </div>
                </div>
            </div>

            {/* Divider */}
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

            {/* Footer Bottom */}
            <div className="flex flex-wrap items-center justify-between">
                <span className="text-sm text-gray-700">Copyright © 2022. JobBox all rights reserved</span>
                <div className="flex flex-wrap gap-4 mt-4 sm:mt-0">
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-500">Privacy Policy</a>
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-500">Terms & Conditions</a>
                    <a href="#" className="text-sm text-gray-700 hover:text-blue-500">Security</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
