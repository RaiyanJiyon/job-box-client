import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { GoBell } from "react-icons/go";
import { AiOutlineMoon } from "react-icons/ai";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const DashboardNav = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);


    const userData = axiosSecure.get(`/users/${user._id}`);
    console.log(userData);

    // Toggle sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Toggle notifications dropdown
    const toggleNotifications = () => {
        setIsNotificationsOpen(!isNotificationsOpen);
    };

    // Toggle user menu dropdown
    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } bg-white w-64`}
            >
                <h5 className="text-base font-semibold text-gray-500 uppercase">Menu</h5>
                <button
                    type="button"
                    onClick={toggleSidebar}
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
                                href="/dashboard"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                            >
                                <span className="ms-3">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/jobs"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                            >
                                <span className="ms-3">Browse Jobs</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/saved-jobs"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                            >
                                <span className="ms-3">Saved Jobs</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/applied-jobs"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                            >
                                <span className="ms-3">Applied Jobs</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/post-job"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                            >
                                <span className="ms-3">Post a Job</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/manage-candidates"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                            >
                                <span className="ms-3">Manage Candidates</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/analytics"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                            >
                                <span className="ms-3">Analytics</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/profile"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                            >
                                <span className="ms-3">Profile</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/settings"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                            >
                                <span className="ms-3">Settings</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/logout"
                                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                            >
                                <span className="ms-3">Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-4">
                {/* Header */}
                <header className="flex justify-between items-center mb-4 border border-b-gray-300 h-20">
                    {/* Sidebar Toggle Button */}
                    <button
                        onClick={toggleSidebar}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                    >
                        Toggle sidebar
                    </button>

                    {/* Navbar */}
                    <nav className="flex items-center gap-4">
                        {/* Dark Mode Toggle */}
                        <AiOutlineMoon
                            className="w-6 h-6 cursor-pointer"
                            title="Toggle dark mode"
                        />

                        {/* Notifications Dropdown */}
                        <div className="relative">
                            <button
                                onClick={toggleNotifications}
                                className="p-2 relative"
                            >
                                <GoBell className="w-6 h-6 cursor-pointer" />
                                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    12
                                </span>
                            </button>
                            {isNotificationsOpen && (
                                <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                    <div className="p-4 space-y-2 max-h-64 overflow-y-auto">
                                        <div className="flex items-start">
                                            <img
                                                className="w-10 h-10 rounded-full"
                                                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                                alt="Bonnie Green"
                                            />
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-gray-900">
                                                    Bonnie Green
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Hey, what's up? All set for the presentation?
                                                </p>
                                                <p className="text-xs text-gray-400">
                                                    a few moments ago
                                                </p>
                                            </div>
                                        </div>
                                        {/* Add more notifications here */}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* User Menu Dropdown */}
                        <div className="relative">
                            <button
                                onClick={toggleUserMenu}
                                className="flex items-center gap-2"
                            >
                                <img
                                    className="w-10 h-10 rounded-full"
                                    src={user?.photoURL || 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'}
                                    alt="user photo"
                                />
                                <div>
                                    <h4 className="text-sm font-medium">{user.displayName}</h4>
                                    <p className="text-sm text-gray-600">{user.email}</p>
                                </div>
                            </button>
                            {isUserMenuOpen && (
                                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                                    <div className="p-4">
                                        <p className="text-sm font-medium text-gray-900">
                                            {user.displayName}
                                        </p>
                                        <p className="text-sm text-gray-500">{user.email}</p>
                                        <hr className="my-2" />
                                        <ul className="space-y-1">
                                            <li>
                                                <a
                                                    href="/profile"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    My Profile
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/settings"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    Account Settings
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/collections"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    Collections
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/pro-version"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    Pro Version
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/logout"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    Sign Out
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </nav>
                </header>
            </main>
        </div>
    );
};

export default DashboardNav;