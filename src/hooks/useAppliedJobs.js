import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useCurrentUser from "../hooks/useCurrentUser";

const useAppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const axiosPublic = useAxiosPublic();
    const {currentUser} = useCurrentUser();

    useEffect(() => {
        const fetchAppliedJobs = async () => {
            if (currentUser?._id) {
                try {
                    const response = await axiosPublic.get(`/applied-jobs/${currentUser?._id}`);
                    setAppliedJobs(response.data);
                } catch (error) {
                    console.error("Error fetching saved jobs:", error.message);
                }
            }
        };

        fetchAppliedJobs();
    }, [currentUser?._id, axiosPublic]);

    return appliedJobs;
};

export default useAppliedJobs;