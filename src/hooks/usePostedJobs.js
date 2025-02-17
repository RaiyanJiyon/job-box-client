import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const usePostedJobs = () => {
    const [manageJobs, setManageJobs] = useState([]);
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                setLoading(true);
                const response = await axiosPublic.get(`/jobs/applied-by-email/${user?.email}`);
                if (response.status === 200) {
                    setManageJobs(response.data);
                }
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
            setLoading(false);
        };

        if (user?.email) {
            fetchJobs();
        }
    }, [axiosPublic, user?.email]);

    return { manageJobs, loading };
};

export default usePostedJobs;
