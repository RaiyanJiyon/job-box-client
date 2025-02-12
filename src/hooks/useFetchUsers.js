import { useState, useEffect } from 'react';
import useAxiosSecure from './useAxiosSecure';

const useFetchUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axiosSecure.get('/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, [axiosSecure]);

    return { users, loading, error };
};

export default useFetchUsers;
