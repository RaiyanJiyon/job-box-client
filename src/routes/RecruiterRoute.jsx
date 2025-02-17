import React from 'react';
import useAuth from '../hooks/useAuth';
import useCurrentUser from '../hooks/useCurrentUser';
import Loader from '../components/common/Loader/Loader';
import { Navigate, useLocation } from 'react-router-dom';

const RecruiterRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const currentUser = useCurrentUser();
    const location = useLocation();

    // Show loader while loading
    if (loading) {
        return <Loader />;
    }

    // Check if user is authenticated
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Debugging: Log the current user's role
    console.log("Current User Role:", currentUser?.role);

    // Check if user has recruiter role
    if (currentUser?.role !== "recruiter") {
        return <Navigate to="/unauthorized" replace />;
    }

    // Allow access to the protected route
    return children;
};

export default RecruiterRoute;