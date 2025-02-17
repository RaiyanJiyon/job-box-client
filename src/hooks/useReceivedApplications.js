import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useReceivedApplications = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [candidates, setCandidates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCandidates = async () => {
            if (!user?.email) {
                console.warn('User email is undefined');
                setLoading(false);
                return;
            }
            try {
                const response = await axiosSecure.get(`applied-jobs/by-company-email/${user?.email}`);
                console.log('API Response:', response.data);
                setCandidates(response.data);
            } catch (error) {
                console.error("Error fetching candidates:", error.message);
            } finally {
                setLoading(false);
            }
        };

        if (user?.email) {
            fetchCandidates();
        }
    }, [user?.email, axiosSecure]);

    return { candidates, loading };
};

export default useReceivedApplications;
