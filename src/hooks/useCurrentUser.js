import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useCurrentUser = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true); // Add loading state
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth(); // Get authenticated user

    useEffect(() => {
        const fetchCurrentUser = async () => {
            if (user?.email) {
                try {
                    setLoading(true); // Set loading to true before fetching
                    const response = await axiosPublic.get(`/users/${user.email}`);
                    setCurrentUser(response.data); // Store user data
                } catch (error) {
                    console.error("Error fetching current user:", error.message);
                    setCurrentUser(null);
                } finally {
                    setLoading(false); // Stop loading when request completes
                }
            } else {
                setLoading(false);
            }
        };

        fetchCurrentUser();
    }, [user?.email, axiosPublic]);

    return { currentUser, loading }; // Return both user data and loading state
};

export default useCurrentUser;
