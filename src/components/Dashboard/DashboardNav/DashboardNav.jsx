import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const DashboardNav = ({ isSidebarOpen, toggleSidebar }) => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [userData, setUserData] = useState(null);

    // Fetch user data
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axiosSecure.get(`/users/${user?.email}`);
                if (response.data) {
                    setUserData(response.data);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        fetchUserData();
    }, [axiosSecure, user]);

    // Get navigation items based on user role
    const getNavItems = () => {
        if (!userData) return null;
        let navLinks = [];

        if (userData?.role === "admin") {
            navLinks = [
                { name: "Home", path: "/" },
                { name: "Dashboard", path: "/dashboard/admin/dashboard" },
                { name: "Manage Users", path: "/dashboard/admin/manage-users" },
                { name: "Manage Jobs", path: "/dashboard/admin/manage-jobs" },
                { name: "Analytics", path: "/dashboard/admin/analytics" },
                { name: "Settings", path: "/dashboard/settings" },
                { name: "Logout", path: "/dashboard/logout" },
            ];
        } else if (userData?.role === "job seeker") {
            navLinks = [
                { name: "Home", path: "/" },
                { name: "Dashboard", path: "/dashboard/job-seeker/dashboard" },
                { name: "Browse Jobs", path: "/dashboard/job-seeker/browse-jobs" },
                { name: "Saved Jobs", path: "/dashboard/job-seeker/saved-jobs" },
                { name: "Applied Jobs", path: "/dashboard/job-seeker/applied-jobs" },
                { name: "Profile", path: "/dashboard/profile" },
                { name: "Settings", path: "/dashboard/settings" },
                { name: "Logout", path: "/dashboard/logout" },
            ];
        } else if (userData?.role === "recruiter") {
            navLinks = [
                { name: "Home", path: "/" },
                { name: "Dashboard", path: "/dashboard/recruiter/home" },
                { name: "Post a Job", path: "/dashboard/recruiter/post-job" },
                { name: "Manage Candidates", path: "/dashboard/recruiter/manage-candidates" },
                { name: "Analytics", path: "/dashboard/recruiter/analytics" },
                { name: "Profile", path: "/dashboard/profile" },
                { name: "Settings", path: "/dashboard/settings" },
                { name: "Logout", path: "/dashboard/logout" },
            ];
        }

        return (
            <ul className="space-y-2 font-medium">
                {navLinks.map((item, index) => (
                    <li key={index}>
                        <Link
                            to={item.path}
                            className="flex items-center p-3 text-gray-900 rounded-lg hover:bg-gray-200 transition-all"
                        >
                            <span className="ms-3">{item.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <aside
            className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 z-50
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static`}
        >
            <div className="flex justify-between items-center p-4">
                <h5 className="text-lg font-semibold">Menu</h5>
                <button onClick={toggleSidebar} className="md:hidden text-gray-600">
                    <IoIosArrowRoundForward size={30} />
                </button>
            </div>

            {/* Navigation Links */}
            <div className="py-4 overflow-y-auto">{getNavItems()}</div>
        </aside>
    );
};

export default DashboardNav;
