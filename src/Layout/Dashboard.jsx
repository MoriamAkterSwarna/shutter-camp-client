import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaChalkboardTeacher, FaHome, FaMoneyCheckAlt, FaUsers } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import {
  MdAssignmentAdd,
  MdBookmarkAdded,
  MdOutlineAddChart,
} from "react-icons/md";
import { BiSelectMultiple } from "react-icons/bi";

import useInstructor from "../hooks/useInstructor";
import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {
  
  const [isAdmin] = useAdmin();
  // console.log(isAdmin)

  const [isInstructor] = useInstructor();
  // console.log(isInstructor)

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
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

            {/* admin dashboard */}
            {isAdmin ?  
              <>
               <li className="mt-2">
                  <NavLink to='/dashboard/manageclasses' className="btn-neutral hover:bg-emerald-700 hover:text-white">
                    <SiGoogleclassroom></SiGoogleclassroom> Manage Class
                  </NavLink>
                </li>
                <li className="mt-2">
                  <NavLink
                    to="/dashboard/allusers"
                    className="btn-neutral hover:bg-emerald-700 hover:text-white"
                  >
                    <FaUsers></FaUsers>Manage Users
                  </NavLink>
                </li>
              </>           
            : isInstructor ?           
              <>
                <li className="mt-2">
                  <NavLink
                    to="/dashboard/addclass"
                    className="btn-neutral hover:bg-emerald-700 hover:text-white"
                  >
                    <MdAssignmentAdd></MdAssignmentAdd> Add a Class
                  </NavLink>
                </li>
                <li className="mt-2">
                  <NavLink
                    to="/dashboard/myclass"
                    className="btn-neutral hover:bg-emerald-700 hover:text-white"
                  >
                    <MdOutlineAddChart></MdOutlineAddChart>My classes
                  </NavLink>
                </li>
              </>
             : 
              <>
                {/* student dashboard */}
                <li className="mt-2">
                  <NavLink to='/dashboard/selectedclasses' className= "btn-neutral hover:bg-emerald-700 hover:text-white">
                    <BiSelectMultiple></BiSelectMultiple> My Selected Classes
                  </NavLink>
                </li>
                <li className="mt-2">
                  <NavLink
                    to="/dashboard/enrolledclasses"
                    className="btn-neutral hover:bg-emerald-700 hover:text-white"
                  >
                    <MdBookmarkAdded></MdBookmarkAdded>My Enrolled classes
                  </NavLink>
                </li>
                <li className="mt-2">
                  <NavLink
                    to="/dashboard/payments"
                    className="btn-neutral hover:bg-emerald-700 hover:text-white"
                  >
                     <FaMoneyCheckAlt></FaMoneyCheckAlt> Payments
                  </NavLink>
                </li>
                
              </>
            }

            <div className="divider"></div>
            <li className="mt-2">
              <NavLink
                to="/"
                className="btn-neutral hover:bg-emerald-700 hover:text-white"
              >
                <FaHome></FaHome>Home
              </NavLink>
            </li>
            <li className="mt-2">
              <NavLink to='/instructors' className="btn-neutral hover:bg-emerald-700 hover:text-white">
                <FaChalkboardTeacher></FaChalkboardTeacher>Instructors
              </NavLink>
            </li>
            <li className="mt-2">
              <NavLink to='/class' className="btn-neutral hover:bg-emerald-700 hover:text-white">
                {" "}
                <SiGoogleclassroom></SiGoogleclassroom> Classes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
