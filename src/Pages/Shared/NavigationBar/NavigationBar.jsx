import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
const NavigationBar = () => {
  const {user, logOut,updateUserProfile} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error));
}
  return (
    <div className="navbar bg-emerald-50 rounded-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to='/'>Home</Link>
            </li>

            <li>
            <Link to='/'>Instructors</Link>
            </li>
            <li>
            <Link to='/'>Classes</Link>
            </li>
            <li>
            <Link to='/'>Dashboard</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="ps-10">
          <img
            className="w-24 h-24 rounded-full border-2 border-emerald-200"
            src={logo}
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
          <Link to='/'>Home</Link>
          </li>

          <li>
          <Link to='/'>Instructors</Link>
          </li>
          <li>
            <Link to='/'>Classes</Link>
            </li>
            <li>
            <Link to='/'>Dashboard</Link>
            </li>
        </ul>
      </div>
      <div className="navbar-end">
        
        {
            user ? <>
                <button onClick={handleLogOut}  className=" btn btn-outline hover:bg-emerald-500 hover:outline-emerald-500 hover:border-none mr-3">LogOut</button>
            </> : <>
                <li ><Link  className=" btn btn-outline hover:bg-emerald-500 hover:outline-emerald-500 hover:border-none mr-3" to="/login">Login</Link></li>
            </>
        }
         <div className="flex items-center">
         <span>
            {
              user &&  ( <img src={user?.photoURL} title={user?.displayName} className='rounded-full w-20 mr-2' alt=""/>)
            }
          </span>
        <Link
          to="/signup"
          className="btn bg-emerald-500 text-white hover:bg-black"
        >
          Sign Up
        </Link>
         </div>
      </div>
    </div>
  );
};

export default NavigationBar;
