import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { BsFillCloudSunFill, BsFillMoonFill } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";

const NavigationBar = () => {
  const { user, logOut, updateUserProfile } = useContext(AuthContext);
  // console.log(user)
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("black");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar bg-emerald-50 rounded-sm">
      <div>
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
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/">Instructors</Link>
            </li>
            <li>
              <Link to="/">Classes</Link>
            </li>
            {user && (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )}
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
      <div className=" hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/instructors">Instructors</Link>
          </li>
          <li>
            <Link to="/class">Classes</Link>
          </li>
          {user && (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
        </ul>
      </div>

      <div className="navbar-end">
        <div className="">
          <button className="btn btn-ghost rounded-full">
            <label className="swap swap-rotate">
              <input
                className="w-12 btn-ghost"
                type="checkbox"
                onChange={handleToggle}
                // show toggle image based on localstorage theme
                checked={theme === "light" ? false : true}
              />
              {/* light theme sun image */}
              <BsFillCloudSunFill className="w-8 h-8 swap-on"></BsFillCloudSunFill>
        

              {/* black theme moon image */}
              <BsFillMoonFill className="w-8 h-8 swap-off"></BsFillMoonFill>
              
            </label>
          </button>
        </div>
        <div className="flex items-center">
        <div>
        {
            user ? <>
                <button onClick={handleLogOut}  className=" btn btn-outline hover:bg-emerald-500 hover:outline-emerald-500 hover:border-none mr-3">LogOut</button>
            </> : <>
                <li ><Link  className=" btn btn-outline hover:bg-emerald-500 hover:outline-emerald-500 hover:border-none mr-3" to="/login">Login</Link></li>
            </>
        }
        </div>
         <div className="flex items-center">
         <span>
            {
              user &&  ( <img src={user?.photoURL} title={user?.displayName} className='rounded-full w-20 mr-2' alt="user image"/>)
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
    </div>
  );
};

export default NavigationBar;
