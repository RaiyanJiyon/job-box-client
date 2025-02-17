import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useCurrentUser = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth(); // Get the currently logged-in user

    useEffect(() => {
        const fetchCurrentUser = async () => {
            if (user?.email) {
                try {
                    // Fetch the current user by email
                    const response = await axiosPublic.get(`/users/${user.email}`);
                    setCurrentUser(response.data); // Set the fetched user data
                } catch (error) {
                    console.error("Error fetching current user:", error.message);
                }
            }
        };
        fetchCurrentUser();
    }, [user?.email, axiosPublic]); // Re-fetch when the user's email changes

    return currentUser; // Return the current user object (includes role)
};

export default useCurrentUser;