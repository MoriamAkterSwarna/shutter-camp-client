import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await fetch(`http://localhost:5000/users`);
        return res.json();
      });
    return (
        <div>
            <h3>Users: {users.length}</h3>
        </div>
    );
};

export default AllUsers;