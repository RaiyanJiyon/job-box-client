import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import SectionTitle from '../../../components/common/SectionTitle';
import Swal from 'sweetalert2';
import Loader from '../../../components/common/Loader/Loader';

const ManageCandidates = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [candidates, setCandidates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCandidates = async () => {
            if (!user?.email) {
                console.warn('User email is undefined');
                setLoading(false);
                return;
            }
            try {
                const response = await axiosSecure.get(`applied-jobs/by-company-email/${user?.email}`);
                console.log('API Response:', response.data);
                setCandidates(response.data);
            } catch (error) {
                console.error(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchCandidates();
    }, [user?.email]);

    if (loading) {
        return <Loader />;
    }

    const handleCandidateCancel = (id) => {
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
                    if (response) {
                        setCandidates(candidates.filter(candidate => candidate._id !== id));
                        Swal.fire({
                            title: "Canceled!",
                            text: "Candidate application has been canceled.",
                            icon: "success"
                        });
                    }
                } catch (error) {
                    Swal.fire({
                        title: "Error!",
                        text: "Failed to cancel candidate application.",
                        icon: "error"
                    });
                }
            }
        });
    };

    return (
        <div>
            <Helmet>
                <title>Manage Candidates | Job Box</title>
            </Helmet>
            <SectionTitle
                title="All Candidates"
                description="Manage candidate applications, view details, or remove applications."
            />
            <div className="relative overflow-x-auto shadow-lg sm:rounded-lg mt-10 p-4 bg-white">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">Manage Candidates</h2>
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Email</th>
                            <th scope="col" className="px-6 py-3">Phone</th>
                            <th scope="col" className="px-6 py-3">Job Position</th>
                            <th scope="col" className="px-6 py-3">Company</th>
                            <th scope="col" className="px-6 py-3">Applied At</th>
                            <th scope="col" className="px-6 py-3">Resume Link</th>
                            <th scope="col" className="px-6 py-3 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidates.length > 0 ? (
                            candidates.map((candidate) => (
                                <tr key={candidate._id} className="bg-white border-b border-gray-200 hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium text-gray-900">{candidate.fullName}</td>
                                    <td className="px-6 py-4">{candidate.email}</td>
                                    <td className="px-6 py-4">{candidate.phone}</td>
                                    <td className="px-6 py-4">{candidate.jobPosition}</td>
                                    <td className="px-6 py-4">{candidate.jobCompany}</td>
                                    <td className="px-6 py-4">{new Date(candidate.appliedAt).toLocaleDateString()}</td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="flex justify-center space-x-4">
                                            <a href={`${candidate.resume}`} target='_blank'
                                                className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                            >
                                                Resume Link
                                            </a>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="flex justify-center space-x-4">
                                            <button
                                                onClick={() => handleCandidateCancel(candidate._id)}
                                                className="text-red-600 hover:underline"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="px-6 py-4 text-center">
                                    No candidates found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageCandidates;