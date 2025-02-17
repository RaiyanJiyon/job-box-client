import React from 'react';
import useAuth from '../hooks/useAuth';
import useCurrentUser from '../hooks/useCurrentUser';
import Loader from '../components/common/Loader/Loader';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {
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

    // Check if user has admin role
    if (currentUser?.role !== "admin") {
        return <Navigate to="/" replace />;
    }

    // Allow access to the protected route
    return children;
};

export default AdminRoute;