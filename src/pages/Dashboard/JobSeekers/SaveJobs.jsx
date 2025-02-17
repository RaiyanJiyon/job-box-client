import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useSavedJobs from "../../../hooks/useSavedJobs";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/common/SectionTitle";

const SaveJobs = () => {
    const savedJobs = useSavedJobs(); // Fetch saved jobs using the custom hook
    const [jobs, setJobs] = useState(savedJobs); // Local state to manage jobs
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        setJobs(savedJobs); // Sync local state with fetched data
    }, [savedJobs]);

    const handleDeleteSavedJob = async (savedJobId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axiosSecure.delete(`/saved-jobs/${savedJobId}`);
                    if (response.status === 200) { // Check for HTTP 200 status
                        setJobs((prevJobs) => prevJobs.filter((job) => job._id !== savedJobId));
                        Swal.fire({
                            title: "Deleted!",
                            text: "Saved job has been deleted.",
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
                <title>Save Jobs | Job Box</title>
            </Helmet>

            <SectionTitle
                title="Saved Jobs"
            description="Manage saved jobs, view details, or remove saved jobs."
            />

            <div className="relative overflow-x-auto shadow-lg sm:rounded-lg mt-10 p-4 bg-white">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">Saved Jobs</h2>
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3">Job Title</th>
                            <th scope="col" className="px-6 py-3">Company</th>
                            <th scope="col" className="px-6 py-3">Location</th>
                            <th scope="col" className="px-6 py-3 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.length > 0 ? (
                            jobs.map((job) => (
                                <tr key={job._id} className="bg-white border-b border-gray-200 hover:bg-gray-50">
                                    <td className="px-6 py-4">{job.jobPosition}</td>
                                    <td className="px-6 py-4">{job.jobCompany}</td>
                                    <td className="px-6 py-4">{job.jobLocation}</td>
                                    <td className="px-6 py-4 text-center">
                                        <button
                                            onClick={() => handleDeleteSavedJob(job._id)}
                                            className="text-red-600 hover:underline"
                                        >
                                            Delete
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

export default SaveJobs;