import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import SectionTitle from '../../../components/common/SectionTitle';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import Loader from '../../../components/common/Loader/Loader';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); // State for search term
    const axiosSecure = useAxiosSecure();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true)
                const response = await axiosSecure.get('/users', {
                    params: {
                        email: searchTerm || undefined, // Pass search term as email
                        name: searchTerm || undefined   // Pass search term as name
                    }
                });
                setUsers(response.data);
            } catch (error) {
                console.error(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, [searchTerm]); // Trigger fetch when searchTerm changes

    const handleUserDelete = id => {
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
                    const response = await axiosSecure.delete(`/users/${id}`);
                    if (response) {
                        setUsers(users.filter(user => user._id !== id));
                        Swal.fire({
                            title: "Deleted!",
                            text: "User has been deleted.",
                            icon: "success"
                        });
                    }
                } catch (error) {
                    Swal.fire({
                        title: "Error!",
                        text: "Failed to delete user.",
                        icon: "error"
                    });
                }
            }
        });
    };

    if (loading) {
        return <Loader />
    }

    return (
        <div>
            <Helmet>
                <title>Manage Users | Job Box</title>
            </Helmet>
            <div className="relative overflow-x-auto shadow-lg sm:rounded-lg p-4 bg-white">
                <div className='flex justify-between items-center mb-4'>
                <h1 className="text-2xl font-bold mb-6 text-gray-800">User Management</h1>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="table-search-users"
                            className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Search for users"
                            value={searchTerm} // Bind input value to state
                            onChange={(e) => setSearchTerm(e.target.value)} // Update state on input change
                        />
                    </div>
                </div>
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Username</th>
                            <th scope="col" className="px-6 py-3">Role</th>
                            <th scope="col" className="px-6 py-3 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.length > 0 ? (
                                users.map(user => (
                                    <tr key={user._id} className="bg-white border-b border-gray-200 hover:bg-gray-50">
                                        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                                            <img className="w-10 h-10 rounded-full" src={`${user.photoURL}`} alt="User" />
                                            <div className="ps-3">
                                                <div className="text-base font-semibold">{user.name}</div>
                                                <div className="font-normal text-gray-500">{user.email}</div>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">{user.username}</td>
                                        <td className="px-6 py-4 capitalize">{user.role}</td>
                                        <td className="px-6 py-4 text-center">
                                            <div className="flex justify-center space-x-4">
                                                <button className="text-blue-600 hover:underline">Edit</button>
                                                <button onClick={() => handleUserDelete(user._id)} className="text-red-600 hover:underline">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="px-6 py-4 text-center">
                                        No users found.
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;