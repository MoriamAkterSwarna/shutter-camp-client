import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaUserShield } from "react-icons/fa";
import {  GiTeacher } from "react-icons/gi";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.name} is an admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <h3 className="text-3xl font-semibold"> Total Users: {users.length}</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Convert</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role === "admin" ? <span className="text-emerald-500 font-semibold">Admin</span> : <button
                    onClick={() => handleMakeAdmin(user)}
                    className="btn bg-emerald-400 text-white hover:bg-emerald-600"
                  >
                    <FaUserShield />
                  </button>}</td>
                
                <td>{user.role === "instructor" ? <span className="text-emerald-500 font-semibold">Instructor</span> : <button
                    onClick={() => handleMakeAdmin(user)}
                    className="btn bg-emerald-400 text-white hover:bg-emerald-600"
                  >
                    <GiTeacher />
                  </button>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
