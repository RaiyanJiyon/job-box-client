import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Briefcase, Users, FileText } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import useCurrentUser from '../../../hooks/useCurrentUser';
import usePostedJobs from '../../../hooks/usePostedJobs';
import useReceivedApplications from '../../../hooks/useReceivedApplications';

const RecruiterDashboard = () => {
    const currentUser = useCurrentUser();
    const {manageJobs, loading} = usePostedJobs();
    const {candidates} = useReceivedApplications();
    const [hiringStats, setHiringStats] = useState([]);

    console.log(manageJobs)

    return (
        <div className="p-6">
            <Helmet>
                <title>Recruiter Dashboard | Job Box</title>
            </Helmet>

            <h1 className="text-2xl font-bold mb-6 text-gray-800">Recruiter Dashboard</h1>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white shadow-lg rounded-xl p-6 flex items-center justify-between border hover:scale-105 transition">
                    <div>
                        <h2 className="text-xl font-semibold">Total Posted Jobs</h2>
                        <p className="text-gray-600 text-lg">{manageJobs.length}</p>
                    </div>
                    <Briefcase className="w-12 h-12 text-blue-500" />
                </div>

                <div className="bg-white shadow-lg rounded-xl p-6 flex items-center justify-between border hover:scale-105 transition">
                    <div>
                        <h2 className="text-xl font-semibold">Applications Received</h2>
                        <p className="text-gray-600 text-lg">{candidates.length}</p>
                    </div>
                    <Users className="w-12 h-12 text-green-500" />
                </div>

                <div className="bg-white shadow-lg rounded-xl p-6 flex items-center justify-between border hover:scale-105 transition">
                    <div>
                        <h2 className="text-xl font-semibold">Profile</h2>
                        <p className="text-gray-600 text-lg">{currentUser?.name}</p>
                    </div>
                    <FileText className="w-12 h-12 text-yellow-500" />
                </div>
            </div>

            {/* Recent Job Posts */}
            <div className="bg-white shadow-lg rounded-xl p-6 mt-8">
                <h2 className="text-xl font-semibold mb-4">Recent Job Posts</h2>
                <ul className="space-y-2">
                    {manageJobs.length > 0 ? manageJobs.slice(0, 5).map((job) => (
                        <li key={job._id} className="border-b py-2 flex justify-between text-gray-700">
                            <span>{job.title} at {job.company}</span>
                            <span className="text-gray-500">{new Date(job.postedTime).toLocaleDateString()}</span>
                        </li>
                    )) : <p className="text-gray-500">No job posts yet.</p>}
                </ul>
            </div>

            {/* Received Applications */}
            <div className="bg-white shadow-lg rounded-xl p-6 mt-8">
                <h2 className="text-xl font-semibold mb-4">Recent Applications</h2>
                <ul className="space-y-2">
                    {candidates.length > 0 ? candidates.slice(0, 5).map((candidate) => (
                        <li key={candidate._id} className="border-b py-2 flex justify-between text-gray-700">
                            <span>{candidate.fullName} for {candidate.jobPosition}</span>
                            <span className="text-gray-500">{new Date(candidate.appliedAt).toLocaleDateString()}</span>
                        </li>
                    )) : <p className="text-gray-500">No applications yet.</p>}
                </ul>
            </div>

            {/* Hiring Trends Chart */}
            <div className="bg-white shadow-lg rounded-xl p-6 mt-8">
                <h2 className="text-xl font-semibold mb-4">Hiring Trends</h2>
                {hiringStats.length > 0 ? (
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={hiringStats}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="hires" stroke="#4CAF50" strokeWidth={3} />
                        </LineChart>
                    </ResponsiveContainer>
                ) : <p className="text-gray-500">No hiring data available.</p>}
            </div>
        </div>
    );
};

export default RecruiterDashboard;
