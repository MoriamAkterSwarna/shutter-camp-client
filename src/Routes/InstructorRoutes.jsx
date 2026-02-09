import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useInstructor from '../hooks/useInstructor';
import { useLocation } from 'react-router-dom';

const InstructorRoutes = ({children}) => {
    const { user, loader } = useContext(AuthContext)
    const [isInstructor, isInstructorLoading] = useInstructor()
    const location = useLocation();

    if(loader || isInstructorLoading){
        return <progress className=" mx-auto bg-blue-600 progress w-96"></progress>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};


export default InstructorRoutes;