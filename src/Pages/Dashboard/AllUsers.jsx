import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaUserShield } from "react-icons/fa";
import {  GiTeacher } from "react-icons/gi";
import Swal from "sweetalert2";
import { Fade, Slide } from "react-awesome-reveal";
import { useState } from "react";
const AllUsers = () => {

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://shutter-camp-server.vercel.app/users");
    return res.json();
  });

  const handleMakeAdmin = (user) => {
    fetch(`https://shutter-camp-server.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
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
  const handleMakeInstructor = (user) => {
    fetch(`https://shutter-camp-server.vercel.app/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.name} is an instructor now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
      
  };
  return (
    <div>
      <Slide>
      <h3 className="text-3xl font-semibold text-emerald-500 text-center" > Total Users: {users.length}</h3>
      </Slide>
      
      <Fade delay={1e3} cascade damping={1e-1}>
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
            {Array.isArray(users) && users.map((user, index) => (
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
                    onClick={() => handleMakeInstructor(user)} 
                    className="btn bg-emerald-400 text-white hover:bg-emerald-600"
                  >
                    <GiTeacher />
                  </button>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </Fade>
      
    </div>
  );
};

export default AllUsers;
