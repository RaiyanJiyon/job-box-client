import React from "react";
import { Outlet } from "react-router-dom";
import Drawer from "../components/Dashboard/Drawer/Drawer";

const DashboardLayout = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar / Drawer
            <div className="">
                <Drawer />
            </div> */}

            {/* Main Content */}
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
