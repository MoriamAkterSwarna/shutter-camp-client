import React, { useContext } from 'react';

import { AuthContext } from '../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';


const useAdmin = () => {
   const {user, loader} = useContext(AuthContext);
   const [axiosSecure] = useAxiosSecure();
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loader && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            // console.log(res.data)
            return res.data.admin;
        }
        
    })
    
    return [isAdmin, isAdminLoading]
};

export default useAdmin;
