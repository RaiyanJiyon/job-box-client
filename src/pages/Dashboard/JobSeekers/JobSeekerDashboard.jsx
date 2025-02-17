import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { User, Briefcase, Bookmark } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import useCurrentUser from '../../../hooks/useCurrentUser';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAppliedJobs from '../../../hooks/useAppliedJobs';
import useSavedJobs from '../../../hooks/useSavedJobs';

const JobSeekerDashboard = () => {
    const {currentUser} = useCurrentUser();
    const appliedJobs = useAppliedJobs();
    const savedJobs = useSavedJobs();
    const axiosPublic = useAxiosPublic();

    const [applicationStats, setApplicationStats] = useState([]);

    return (
        <div className="p-6">
            <Helmet>
                <title>Job Seeker Dashboard | Job Box</title>
            </Helmet>

            <h1 className="text-2xl font-bold mb-6 text-gray-800">Job Seeker Dashboard</h1>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white shadow-lg rounded-xl p-6 flex items-center justify-between border hover:scale-105 transition">
                    <div>
                        <h2 className="text-xl font-semibold">Total Applied</h2>
                        <p className="text-gray-600 text-lg">{appliedJobs.length}</p>
                    </div>
                    <Briefcase className="w-12 h-12 text-blue-500" />
                </div>

                <div className="bg-white shadow-lg rounded-xl p-6 flex items-center justify-between border hover:scale-105 transition">
                    <div>
                        <h2 className="text-xl font-semibold">Saved Jobs</h2>
                        <p className="text-gray-600 text-lg">{savedJobs.length}</p>
                    </div>
                    <Bookmark className="w-12 h-12 text-green-500" />
                </div>

                <div className="bg-white shadow-lg rounded-xl p-6 flex items-center justify-between border hover:scale-105 transition">
                    <div>
                        <h2 className="text-xl font-semibold">Profile</h2>
                        <p className="text-gray-600 text-lg">{currentUser?.name}</p>
                    </div>
                    <User className="w-12 h-12 text-yellow-500" />
                </div>
            </div>

            {/* Recently Applied Jobs */}
            <div className="bg-white shadow-lg rounded-xl p-6 mt-8">
                <h2 className="text-xl font-semibold mb-4">Recently Applied Jobs</h2>
                <ul className="space-y-2">
                    {appliedJobs.length > 0 ? appliedJobs.slice(0, 5).map((job) => (
                        <li key={job._id} className="border-b py-2 flex justify-between text-gray-700">
                            <span>{job.jobPosition} at {job.jobCompany}</span>
                            <span className="text-gray-500">{new Date(job.appliedAt).toLocaleDateString()}</span>
                        </li>
                    )) : <p className="text-gray-500">No applications yet.</p>}
                </ul>
            </div>

            {/* Saved Jobs */}
            <div className="bg-white shadow-lg rounded-xl p-6 mt-8">
                <h2 className="text-xl font-semibold mb-4">Saved Jobs</h2>
                <ul className="space-y-2">
                    {savedJobs.length > 0 ? savedJobs.map((job) => (
                        <li key={job._id} className="border-b py-2 text-gray-700">
                            {job.jobPosition} at {job.jobCompany}
                        </li>
                    )) : <p className="text-gray-500">No saved jobs.</p>}
                </ul>
            </div>

            {/* Application Status Chart */}
            <div className="bg-white shadow-lg rounded-xl p-6 mt-8">
                <h2 className="text-xl font-semibold mb-4">Application Status</h2>
                {applicationStats.length > 0 ? (
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={applicationStats}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="applications" stroke="#4CAF50" strokeWidth={3} />
                        </LineChart>
                    </ResponsiveContainer>
                ) : <p className="text-gray-500">No application data available.</p>}
            </div>
        </div>
    );
};

export default JobSeekerDashboard;
