import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useCurrentUser from "../hooks/useCurrentUser";
import Loader from "../components/common/Loader/Loader";

const AdminRoute = ({ children }) => {
    const { user, loading: authLoading } = useAuth();
    const { currentUser, loading: userLoading } = useCurrentUser();
    const location = useLocation();

    if (authLoading || userLoading) {
        return <Loader />;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!currentUser) {
        console.warn("Current user not found!");
        return <Navigate to="/unauthorized" replace />;
    }

    if (currentUser.role !== "admin") {
        return <Navigate to="/unauthorized" replace />;
    }

    return children;
};

export default AdminRoute;
