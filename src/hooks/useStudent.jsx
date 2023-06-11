import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../providers/AuthProvider';


const useStudent = () => {
   const {user, loader} = useContext(AuthContext);
   const [axiosSecure] = useAxiosSecure();
    const {data: isStudent, isLoading: isStudentLoading, refetch} = useQuery({
        queryKey: ['isStudent', user?.email],
        enabled: !loader && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/student/${user?.email}`);
            // console.log(res.data)
            return res.data.student;
        }
        
    })
    
    return [isStudent, isStudentLoading, refetch]
};

export default useStudent;
