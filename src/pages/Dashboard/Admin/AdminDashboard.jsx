import { User, Briefcase } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import useFetchJobs from "../../../hooks/useFetchJobs";
import useFetchUsers from "../../../hooks/useFetchUsers";
import Loader from "../../../components/common/Loader/Loader";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";

const Dashboard = () => {
    const { users = [], loading: usersLoading } = useFetchUsers();
    const { jobs = [], loading: jobsLoading } = useFetchJobs();

    const [featuredJobs, setFeaturedJobs] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const fetchFeaturedJobs = async () => {
            try {
                const response = await axiosPublic.get('/featured-jobs');
                setFeaturedJobs(response.data);
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchFeaturedJobs();
    }, []);

    if (usersLoading || jobsLoading) {
        return <Loader />;
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between border">
                    <div>
                        <h2 className="text-xl font-semibold">Total Users</h2>
                        <p className="text-gray-600 text-lg">{users.length}</p>
                    </div>
                    <User className="w-12 h-12 text-blue-500" />
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between border">
                    <div>
                        <h2 className="text-xl font-semibold">Total Jobs</h2>
                        <p className="text-gray-600 text-lg">{jobs.length}</p>
                    </div>
                    <Briefcase className="w-12 h-12 text-green-500" />
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between border">
                    <div>
                        <h2 className="text-xl font-semibold">Total Revenue</h2>
                        <p className="text-gray-600 text-lg">$78,520</p>
                    </div>
                    <span className="w-12 h-12 flex items-center justify-center bg-yellow-500 text-white rounded-full text-xl font-bold">$</span>
                </div>
            </div>

            {/* Featured Jobs Table */}
            <div className="overflow-x-auto mt-10">
                <h2 className="text-xl font-semibold mb-4">Featured Job Listings</h2>
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th className="px-6 py-3">Company</th>
                            <th className="px-6 py-3">Position</th>
                            <th className="px-6 py-3">Location</th>
                            <th className="px-6 py-3">Employment Type</th>
                            <th className="px-6 py-3">Work Type</th>
                            <th className="px-6 py-3">Salary ($)</th>
                            <th className="px-6 py-3">Posted</th>
                            <th className="px-6 py-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {featuredJobs.map((job) => (
                            <tr key={job._id} className="bg-white border-b hover:bg-gray-50">
                                <td className="px-6 py-4 flex items-center space-x-3">
                                    <img className="w-8 h-8" src={job.logo} alt={job.company} />
                                    <span className="font-medium text-gray-900">{job.company}</span>
                                </td>
                                <td className="px-6 py-4">{job.position}</td>
                                <td className="px-6 py-4">{job.location}</td>
                                <td className="px-6 py-4">{job.employmentType}</td>
                                <td className="px-6 py-4">{job.workType}</td>
                                <td className="px-6 py-4">${job.salary}</td>
                                <td className="px-6 py-4">{new Date(job.postedTime).toLocaleDateString()}</td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center space-x-4">
                                        <button className="text-blue-600 hover:underline">Edit</button>
                                        <button className="text-red-600 hover:underline ml-4">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            {/* Job Posting Trends Chart */}
            <div className="mt-10 bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Job Posting Trends</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={[{ month: "Jan", jobs: 40 }, { month: "Feb", jobs: 60 }]}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="jobs" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Dashboard;
