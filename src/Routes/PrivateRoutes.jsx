import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoutes = ({children}) => {
    const { user, loader} = useContext(AuthContext);
    const location = useLocation();

    if(loader){
        return <progress className="bg-blue-500 progress w-56"></progress>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;