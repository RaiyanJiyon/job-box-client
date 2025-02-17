import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import SectionTitle from '../../../components/common/SectionTitle';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import useFetchJobs from '../../../hooks/useFetchJobs';
import Loader from '../../../components/common/Loader/Loader';
import { Helmet } from 'react-helmet-async';

const ManageJobs = () => {
    const axiosSecure = useAxiosSecure();

    const { jobs, loading } = useFetchJobs();

    if (loading) {
        return <Loader />
    }

    const handleJobDelete = id => {
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
                    const response = await axiosSecure.delete(`/jobs/${id}`);
                    if (response) {
                        setJobs(jobs.filter(job => job._id !== id));
                        Swal.fire({
                            title: "Deleted!",
                            text: "Job has been deleted.",
                            icon: "success"
                        });
                    }
                } catch (error) {
                    Swal.fire({
                        title: "Error!",
                        text: "Failed to delete job.",
                        icon: "error"
                    });
                }
            }
        });
    }

    return (
        <div>
            <Helmet>
                <title>Manage Jobs | Job Box</title>
            </Helmet>
            <div className="relative overflow-x-auto shadow-lg sm:rounded-lg p-4 bg-white">
                <h1 className="text-2xl font-bold mb-6 text-gray-800">Manage Jobs</h1>
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
                        {jobs.map((job) => (
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
                                <td className="px-6 py-4">{new Date(job.postedTime).toLocaleDateString()}</td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center space-x-4">
                                        <button className="text-blue-600 hover:underline">Edit</button>
                                        <button onClick={() => handleJobDelete(job._id)} className="text-red-600 hover:underline">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageJobs;
