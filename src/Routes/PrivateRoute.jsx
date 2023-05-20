import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    if (user) {
        return children;
    }

    if (!user) {
        return <Navigate to="/login" replace state={{ from: location, search: location.search }}></Navigate>;
    }   
};

export default PrivateRoute;