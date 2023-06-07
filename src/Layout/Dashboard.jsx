import React from "react";
import { NavLink } from "react-router-dom";
import { FaChalkboardTeacher, FaHome, FaUser, FaUsers } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
const Dashboard = () => {
    const isAdmin = true;
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn bg-emerald-500 drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-emerald-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <NavLink className='hover:bg-emerald-700 hover:text-white'><FaHome></FaHome>Admin Home</NavLink>
            </li>
            <li className="mt-2">
            <NavLink className='hover:bg-emerald-700 hover:text-white'><SiGoogleclassroom></SiGoogleclassroom> Manage Class</NavLink>
            </li>
            <li className="mt-2">
            <NavLink to='/dashboard/allusers' className='btn-neutral hover:bg-emerald-700 hover:text-white'><FaUsers></FaUsers>All Users</NavLink>
            </li>


            <div className="divider"></div>
            <li className="mt-2">
            <NavLink to='/' className='btn-neutral hover:bg-emerald-700 hover:text-white'><FaHome></FaHome>Home</NavLink>
            </li>
            <li className="mt-2">
            <NavLink className='hover:bg-emerald-700 hover:text-white'><FaChalkboardTeacher></FaChalkboardTeacher>Instructors</NavLink>
            </li>
            <li className="mt-2">
            <NavLink className='hover:bg-emerald-700 hover:text-white'> <SiGoogleclassroom></SiGoogleclassroom> Classes</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
