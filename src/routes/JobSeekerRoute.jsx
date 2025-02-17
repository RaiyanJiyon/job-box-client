import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useCurrentUser from "../hooks/useCurrentUser";
import Loader from "../components/common/Loader/Loader";

const JobSeekerRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const currentUser = useCurrentUser();
    const location = useLocation();

    if (loading) {
        return <Loader />
    };

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    };

    if (currentUser?.role !== "job seeker") {
        return <Navigate to="/" replace />;
    }
    return children;
};

export default JobSeekerRoute;