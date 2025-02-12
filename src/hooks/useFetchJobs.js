import { useState, useEffect } from 'react';
import useAxiosPublic from './useAxiosPublic';


const useFetchJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axiosPublic.get('/jobs'); // Fetch job data from API
                setJobs(response.data);
            } catch (error) {
                console.error('Error fetching jobs:', error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, [axiosPublic]);

    return { jobs, loading, error };
};

export default useFetchJobs;
