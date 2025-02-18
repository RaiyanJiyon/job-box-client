import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { AiOutlineHome, AiOutlineDashboard, AiOutlineUser } from "react-icons/ai";
import { MdWorkOutline, MdOutlineSaveAlt, MdPostAdd } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaRegUserCircle } from "react-icons/fa";
import useCurrentUser from "../../../hooks/useCurrentUser";

const DashboardNav = ({ isSidebarOpen, toggleSidebar }) => {
    const { user } = useAuth();
    const {currentUser} = useCurrentUser();
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
                { name: "Home", path: "/", icon: <AiOutlineHome /> },
                { name: "Dashboard", path: "/dashboard/admin/dashboard", icon: <AiOutlineDashboard /> },
                { name: "Manage Users", path: "/dashboard/admin/manage-users", icon: <AiOutlineUser /> },
                { name: "Manage Jobs", path: "/dashboard/admin/manage-jobs", icon: <MdWorkOutline /> },
            ];
        } else if (userData?.role === "job seeker") {
            navLinks = [
                { name: "Home", path: "/", icon: <AiOutlineHome /> },
                { name: "Dashboard", path: "/dashboard/job-seeker/dashboard", icon: <AiOutlineDashboard /> },
                { name: "Browse Jobs", path: "/dashboard/job-seeker/browse-jobs", icon: <MdWorkOutline /> },
                { name: "Saved Jobs", path: "/dashboard/job-seeker/saved-jobs", icon: <MdOutlineSaveAlt /> },
                { name: "Applied Jobs", path: "/dashboard/job-seeker/applied-jobs", icon: <MdPostAdd /> },
                { name: "Profile", path: "/dashboard/profile", icon: <AiOutlineUser /> },
            ];
        } else if (userData?.role === "recruiter") {
            navLinks = [
                { name: "Home", path: "/", icon: <AiOutlineHome /> },
                { name: "Dashboard", path: "/dashboard/recruiter/dashboard", icon: <AiOutlineDashboard /> },
                { name: "Post a Job", path: "/dashboard/recruiter/post-job", icon: <MdPostAdd /> },
                { name: "Manage Jobs", path: "/dashboard/recruiter/manage-jobs", icon: <MdWorkOutline /> },
                { name: "Manage Candidates", path: "/dashboard/recruiter/manage-candidates", icon: <FaRegUserCircle /> },
                { name: "Profile", path: "/dashboard/profile", icon: <AiOutlineUser /> },
            ];
        }

        return (
            <ul className="space-y-2 font-medium">
                {navLinks.map((item, index) => (
                    <li key={index}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center p-3 rounded-lg transition-all ${isActive ? 'bg-blue-100 text-blue-500' : 'text-gray-900 hover:bg-blue-100'
                                }`
                            }
                        >
                            <span className="text-blue-500 text-xl">{item.icon}</span>
                            <span className="ms-3 font-semibold">{item.name}</span>
                        </NavLink>

                    </li>
                ))}
            </ul>
        );
    };

    return (
        <aside
            className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg transition-transform duration-300 z-50 border border-gray-300
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static`}
        >
            <div className="flex justify-between items-center p-4 border-b border-gray-300">
                <div className="text-lg font-semibold text-blue-600">
                    <div className="flex items-center">
                        <div className="shrink-0">
                            <img className="w-8 h-8 rounded-full" src={`${currentUser?.photoURL}`} alt="Neil image" />
                        </div>
                        <div className="flex-1 min-w-0 ms-4">
                            <p className="text-sm font-medium text-gray-900 truncate">
                                {user?.displayName}
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                                {user?.email}
                            </p>
                        </div>
                    </div>
                </div>
                <button onClick={toggleSidebar} className="md:hidden text-blue-600">
                    <IoIosArrowRoundForward size={30} />
                </button>
            </div>

            {/* Navigation Links */}
            <div className="py-4 overflow-y-auto">{getNavItems()}</div>
        </aside>
    );
};

export default DashboardNav;
