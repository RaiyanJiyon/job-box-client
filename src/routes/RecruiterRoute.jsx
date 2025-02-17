import React from 'react';
import useAuth from '../hooks/useAuth';
import useCurrentUser from '../hooks/useCurrentUser';
import Loader from '../components/common/Loader/Loader';
import { Navigate, useLocation } from 'react-router-dom';

const RecruiterRoute = ({ children }) => {
    const { user, loading: authLoading } = useAuth(); // Check if user is authenticated
    const { currentUser, loading: userLoading } = useCurrentUser(); // Get role

    const location = useLocation();

    // Show loader while fetching data
    if (authLoading || userLoading) {
        return <Loader />;
    }

    // Redirect to login if no user is found
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Redirect to unauthorized page if user is not a recruiter
    if (!currentUser || currentUser?.role !== "recruiter") {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default RecruiterRoute
