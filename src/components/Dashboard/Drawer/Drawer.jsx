import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaArrowRightToBracket } from "react-icons/fa6";

const Drawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Toggle the drawer open/close
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    // Toggle the dropdown open/close
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div>
            {/* Drawer init and show */}
            <div className="">
                <button
                    onClick={toggleDrawer}
                    className="text-2xl"
                    type="button"
                    data-drawer-target="drawer-navigation"
                    data-drawer-show="drawer-navigation"
                    aria-controls="drawer-navigation"
                >
                    {isDrawerOpen ? <FaArrowRightToBracket /> : <RxHamburgerMenu />}
                </button>
            </div>

            {/* Drawer component */}
            <div
                id="drawer-navigation"
                className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
                    isDrawerOpen ? "translate-x-0" : "-translate-x-full"
                } bg-white w-64`}
                tabIndex="-1"
                aria-labelledby="drawer-navigation-label"
            >
                <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase">
                    JobBox
                </h5>
                <button
                    type="button"
                    onClick={toggleDrawer}
                    aria-controls="drawer-navigation"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center"
                >
                    <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <div className="py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                            >
                                <span className="ms-3">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={toggleDropdown}
                                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
                                aria-controls="dropdown-example"
                                data-collapse-toggle="dropdown-example"
                            >
                                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                                    E-commerce
                                </span>
                                <svg
                                    className={`w-3 h-3 ${isDropdownOpen ? "rotate-180" : ""}`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>
                            <ul
                                id="dropdown-example"
                                className={`${isDropdownOpen ? "block" : "hidden"} py-2 space-y-2`}
                            >
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                                    >
                                        Products
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                                    >
                                        Billing
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                                    >
                                        Invoice
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Drawer;