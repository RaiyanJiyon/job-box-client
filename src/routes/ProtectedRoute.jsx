import React from 'react';
import useAuth from '../hooks/useAuth';
import Loader from '../components/common/Loader/Loader';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    // Show loader while loading
    if (loading) {
        return <Loader />;
    }

    // Redirect unauthenticated users to login
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Debugging: Log the authenticated user
    console.log("Authenticated User:", user);

    // Allow access to authenticated users
    return children;
};

export default ProtectedRoute;