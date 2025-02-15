import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useCurrentUser from '../../../hooks/useCurrentUser';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Loader from '../../../components/common/Loader/Loader';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const JobSeekerDashboard = () => {
    const currentUser = useCurrentUser();
    const axiosPublic = useAxiosPublic();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [savedJobs, setSavedJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [applicationStats, setApplicationStats] = useState([]);

    useEffect(() => {
        if (currentUser) {
            fetchJobSeekerData();
        }
    }, [currentUser]);

    const fetchJobSeekerData = async () => {
        try {
            setLoading(true);
            const [appliedRes, savedRes, statsRes] = await Promise.all([
                axiosPublic.get(`/applied-jobs?userId=${currentUser._id}`),
                axiosPublic.get(`/saved-jobs/${currentUser._id}`),
                axiosPublic.get(`/application-stats?userId=${currentUser._id}`)
            ]);
            setAppliedJobs(appliedRes.data);
            setSavedJobs(savedRes.data);
            setApplicationStats(statsRes.data);
        } catch (error) {
            console.error('Error fetching job seeker data:', error);
        } finally {
            setLoading(false);
        }
    };

    if (!currentUser || loading) {
        return <Loader />;
    }

    return (
        <div className="p-6">
            <Helmet>
                <title>Job Seeker Dashboard | Job Box</title>
            </Helmet>

            <h1 className="text-2xl font-bold mb-6">Job Seeker Dashboard</h1>

            {/* Profile Overview */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <h2 className="text-xl font-semibold">Profile Overview</h2>
                <p className="text-gray-600">Name: {currentUser.name}</p>
                <p className="text-gray-600">Email: {currentUser.email}</p>
                <p className="text-gray-600">Total Applied Jobs: {appliedJobs.length}</p>
            </div>

            {/* Recently Applied Jobs */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Recently Applied Jobs</h2>
                <ul>
                    {appliedJobs.slice(0, 5).map((job) => (
                        <li key={job._id} className="border-b py-2">{job.position} at {job.company} - <span className="text-gray-500">{job.status}</span></li>
                    ))}
                </ul>
            </div>

            {/* Saved Jobs */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Saved Jobs</h2>
                <ul>
                    {savedJobs.map((job) => (
                        <li key={job._id} className="border-b py-2">{job.position} at {job.company}</li>
                    ))}
                </ul>
            </div>

            {/* Application Status Chart */}
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Application Status</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={applicationStats}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="applications" stroke="#4CAF50" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default JobSeekerDashboard;
