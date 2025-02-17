import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useSavedJobs from "../../../hooks/useSavedJobs";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAppliedJobs from "../../../hooks/useAppliedJobs";

const AppliedJobs = () => {
    const appliedJobs = useAppliedJobs(); // Fetch saved jobs using the custom hook
    const [jobs, setJobs] = useState(appliedJobs); // Local state to manage jobs
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        setJobs(appliedJobs); // Sync local state with fetched data
    }, [appliedJobs]);

    const handleDeleteAppliedJob = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axiosSecure.delete(`/applied-jobs/${id}`);
                    if (response.status === 200) { // Check for HTTP 200 status
                        setJobs((prevJobs) => prevJobs.filter((job) => job._id !== id));
                        Swal.fire({
                            title: "Deleted!",
                            text: "Applied job has been canceled.",
                            icon: "success"
                        });
                    }
                } catch (error) {
                    Swal.fire({
                        title: "Error!",
                        text: "Failed to delete saved job.",
                        icon: "error"
                    });
                }
            }
        });
    };

    return (
        <div>
            <Helmet>
                <title>Applied Jobs | Job Box</title>
            </Helmet>

            <div className="relative overflow-x-auto shadow-lg sm:rounded-lg p-4 bg-white">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Applied Jobs</h1>
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3">Company Name</th>
                            <th scope="col" className="px-6 py-3">Company Position</th>
                            <th scope="col" className="px-6 py-3">Phone</th>
                            <th scope="col" className="px-6 py-3 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.length > 0 ? (
                            jobs.map((job) => (
                                <tr key={job._id} className="bg-white border-b border-gray-200 hover:bg-gray-50">
                                    <td className="px-6 py-4">{job.jobCompany}</td>
                                    <td className="px-6 py-4">{job.jobPosition}</td>
                                    <td className="px-6 py-4">{job.phone}</td>
                                    <td className="px-6 py-4 text-center">
                                        <button
                                            onClick={() => handleDeleteAppliedJob(job._id)}
                                            className="text-red-600 hover:underline"
                                        >
                                            Cancel Application
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="px-6 py-4 text-center">
                                    No saved jobs found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppliedJobs;