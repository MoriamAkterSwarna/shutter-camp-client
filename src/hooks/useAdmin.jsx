import React, { useContext } from 'react';

import { AuthContext } from '../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';


const useAdmin = () => {
   const {user, loader} = useContext(AuthContext);

    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !!user?.email ,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`);

            const data = await res.json()
            console.log(data.admin)
            return data.admin;
        }
        
    })
    
    return [isAdmin, isAdminLoading]
};

export default useAdmin;
