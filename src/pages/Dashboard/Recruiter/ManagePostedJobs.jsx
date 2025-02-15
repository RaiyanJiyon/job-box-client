import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useCurrentUser from "../../../hooks/useCurrentUser";
import ErrorToaster from "../../../components/common/Toaster/ErrorToaster";
import Loader from "../../../components/common/Loader/Loader";
import useAuth from "../../../hooks/useAuth";


const ManagePostedJobs = () => {
    const [manageJobs, setManageJobs] = useState([]);
    const axiosPublic = useAxiosPublic();
    const {user} =  useAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                setLoading(true);
                const response = await axiosPublic.get(`/jobs/applied-by-email/${user?.email}`);
                if (response.status === 200) {
                    setManageJobs(response.data); // Update state with fetched jobs
                }
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
            setLoading(false);
        };
        fetchJobs();
    }, [axiosPublic]);

    const handleJobDelete = async (jobId) => {
        try {
            const response = await axiosPublic.delete(`/jobs/${jobId}`);
            if (response.status === 200) {
                // Remove the deleted job from the state
                setManageJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
                alert("Job deleted successfully!");
            }
        } catch (error) {
            console.error("Error deleting job:", error);
        }
    };

        
    if (loading) {
        return <Loader />
    }

    return (
        <div>
            <div className="relative overflow-x-auto shadow-lg sm:rounded-lg mt-10 p-4 bg-white">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3">Company</th>
                            <th scope="col" className="px-6 py-3">Position</th>
                            <th scope="col" className="px-6 py-3">Location</th>
                            <th scope="col" className="px-6 py-3">Employment Type</th>
                            <th scope="col" className="px-6 py-3">Work Type</th>
                            <th scope="col" className="px-6 py-3">Salary ($)</th>
                            <th scope="col" className="px-6 py-3">Posted</th>
                            <th scope="col" className="px-6 py-3 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {manageJobs.length > 0 ? (
                            manageJobs.map((job) => (
                                <tr key={job._id} className="bg-white border-b border-gray-200 hover:bg-gray-50">
                                    <td className="px-6 py-4 flex items-center space-x-3">
                                        <img className="w-8 h-8" src={job.logo} alt={job.company} />
                                        <span className="font-medium text-gray-900">{job.company}</span>
                                    </td>
                                    <td className="px-6 py-4">{job.position}</td>
                                    <td className="px-6 py-4">{job.location}</td>
                                    <td className="px-6 py-4">{job.employmentType}</td>
                                    <td className="px-6 py-4">{job.workType}</td>
                                    <td className="px-6 py-4">${job.salary}</td>
                                    <td className="px-6 py-4">job.postedTime</td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="flex justify-center space-x-4">
                                            <button className="text-blue-600 hover:underline">Edit</button>
                                            <button onClick={() => handleJobDelete(job._id)} className="text-red-600 hover:underline">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="px-6 py-4 text-center">
                                    No jobs found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManagePostedJobs;