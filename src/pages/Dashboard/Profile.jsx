import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCurrentUser from '../../hooks/useCurrentUser';
import Loader from '../../components/common/Loader/Loader';

const Profile = () => {
    // Sample currentUser data
    const {currentUser} = useCurrentUser();

    if (!currentUser) {
        return <Loader />
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            {/* Helmet for SEO */}
            <Helmet>
                <title>Profile | Job Box</title>
            </Helmet>

            {/* Profile Section */}
            <div className="mx-4 lg:mx-10 bg-white shadow-lg rounded-lg overflow-hidden p-6">
                {/* Header */}
                <h1 className="text-2xl font-bold text-gray-800 mb-6">My Profile</h1>

                {/* Profile Content */}
                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                    {/* Profile Picture */}
                    <div className="shrink-0">
                        <img
                            src={currentUser?.photoURL}
                            alt={`${currentUser?.name}'s profile`}
                            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-md"
                        />
                    </div>

                    {/* Profile Details */}
                    <div className="flex-grow">
                        <div className="space-y-4">
                            {/* Name */}
                            <div className="flex items-center space-x-2">
                                <span className="text-gray-600 font-semibold">Name:</span>
                                <span className="text-gray-800">{currentUser?.name}</span>
                            </div>

                            {/* Email */}
                            <div className="flex items-center space-x-2">
                                <span className="text-gray-600 font-semibold">Email:</span>
                                <span className="text-gray-800">{currentUser?.email}</span>
                            </div>

                            {/* Username */}
                            <div className="flex items-center space-x-2">
                                <span className="text-gray-600 font-semibold">Username:</span>
                                <span className="text-gray-800">@{currentUser?.username}</span>
                            </div>

                            {/* Role */}
                            <div className="flex items-center space-x-2">
                                <span className="text-gray-600 font-semibold">Role:</span>
                                <span className="text-gray-800 capitalize">{currentUser?.role}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;