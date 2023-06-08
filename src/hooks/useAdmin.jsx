import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
   const {user, loader} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loader,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            console.log(res)
            return res.data.admin;
        }
    })
    
    return [isAdmin, isAdminLoading]
};

export default useAdmin;
