import React from 'react';
import useAuth from '../hooks/useAuth';
import Loader from '../components/common/Loader/Loader';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <Loader />
    };

    if (user) {
        return children
    }
    return <Navigate to={'/login'} state={{ from: location }} replace />
};

export default ProtectedRoute;