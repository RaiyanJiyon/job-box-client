import React from 'react';
import useAuth from '../hooks/useAuth';

const ProtectedRoute = ({children}) => {
    const {user, loading} = useAuth();

    if (loading) {
        
    }
    return (
        <div>
            
        </div>
    );
};

export default ProtectedRoute;