import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user}= useContext(AuthContext);

    if(user){
        return children;
    }

    return <Navigate to="/login" replace state={{ from: location, search: location.search }}></Navigate>;
};

export default PrivateRoute;