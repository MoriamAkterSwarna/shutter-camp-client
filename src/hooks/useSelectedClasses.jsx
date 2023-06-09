
import { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useSelectedClasses = () => {
    
       const {user, loader} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: selected = [] } = useQuery({
        queryKey: ['selectedClass', user?.email],
        enabled: !loader,
        queryFn: async () => {
            const res = await axiosSecure(`/selected?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })
    return [selected, refetch]
    
};

export default useSelectedClasses;