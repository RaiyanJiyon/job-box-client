import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardNav from "../components/Dashboard/DashboardNav/DashboardNav";
import { AiOutlineMenu } from "react-icons/ai";

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen w-11/12 max-w-screen-2xl mx-auto border border-green-700">
            {/* Sidebar */}
            <DashboardNav isSidebarOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

            {/* Main Content */}
            <div className="flex-1 transition-all duration-300 ml-10 md:ml-0 p-6 border border-yellow-700">
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden absolute left-2 bg-blue-500 text-white p-2 rounded"
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    <AiOutlineMenu size={24} />
                </button>

                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
