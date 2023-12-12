

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";




const PrivateRoute = ({ children }) => {

    let { user, loader } = useContext(AuthContext)
    let location = useLocation();

    console.log(location)

    if (loader) {
        return <div className="text-center ">
            <progress className="progress w-56"></progress>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;