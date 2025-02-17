import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useCurrentUser from "../hooks/useCurrentUser";

const useSavedJobs = () => {
    const [savedJobs, setSavedJobs] = useState([]);
    const axiosPublic = useAxiosPublic();
    const {currentUser} = useCurrentUser();

    useEffect(() => {
        const fetchSavedJobs = async () => {
            if (currentUser?._id) {
                try {
                    const response = await axiosPublic.get(`/saved-jobs/${currentUser._id}`);
                    setSavedJobs(response.data);
                } catch (error) {
                    console.error("Error fetching saved jobs:", error.message);
                }
            }
        };

        fetchSavedJobs();
    }, [currentUser?._id, axiosPublic]);

    return savedJobs;
};

export default useSavedJobs;