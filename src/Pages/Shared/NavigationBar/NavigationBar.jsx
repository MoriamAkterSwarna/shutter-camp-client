import React, { useContext, useState } from "react";
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // theme
  // const [theme,setTheme]=useState(localStorage.getItem('theme')? localStorage.getItem('theme'):'light')
  //    const handleToggle=(e)=>{
  //     if(e.target.checked){
  //       setTheme('dark')
  //     }else{
  //       setTheme('light')
  //     }
  //    }

  // useEffect(()=>{
  //     localStorage.setItem('theme',theme)
  //     const localTheme=localStorage.getItem('theme');
  //     document.querySelector('html').setAttribute('data-theme',localTheme)
  // },[theme])

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="navbar bg-emerald-100 rounded-sm z-10 flex mr-0 justify-between items-center">
      <Link to="/" className="inline-flex items-center relative navbar-start">
        <>
          <img className="w-[90px] rounded-full" src={logo} alt="" />
          <span className="title-text ml-2 text-2xl font-bold tracking-wide text-gray-800">
            Shutter Camp
          </span>
        </>
      </Link>

      {/* Mobile nav menu  */}

      <div className="lg:hidden ">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          onClick={() => setIsMenuOpen(true)}>
          <HiBars3BottomRight className="w-5 text-gray-600" />
        </button>

        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full z-10">
            <div className="p-5 bg-white border rounded shadow-sm">
              {/* Logo & Button section */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <Link to="/" className="inline-flex items-center">
                    <>
                      <img
                        className="w-[50px] rounded-full"
                        src={logo}
                        alt="Shutter camp logo"
                      />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Shutter Camp
                      </span>
                    </>
                  </Link>
                </div>

                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    onClick={() => setIsMenuOpen(false)}>
                    <HiOutlineXMark className="w-5 text-gray-600" />
                  </button>
                </div>
              </div>

              <nav>
                <ul className="space-y-4">
                  <li>
                    <NavLink
                      to="/"
                      title="Home"
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/instructors"
                      title="Instructors"
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }>
                      Instructors
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/class"
                      title="Classes"
                      className={({ isActive }) =>
                        isActive ? "active " : "default"
                      }>
                      Classes
                    </NavLink>
                  </li>
                  {user && (
                    <li>
                      <NavLink
                        to="/dashboard"
                        title="Dashboard"
                        className={({ isActive }) =>
                          isActive ? "active " : "default"
                        }>
                        Dashboard
                      </NavLink>
                    </li>
                  )}
                </ul>
                <div className="divider"></div>
                <div className="font-bold flex flex-col">
                  {/* <span>
                      <img className="rounded-full w-1/2" alt="" />
                    </span> */}

                  <img
                    src={user?.photoURL ? user.photoURL : ""}
                    title={user?.displayName}
                    className="rounded-full w-1/2"
                    alt=""
                  />
                  {user ? (
                    <Link
                      className="btn btn-primary w-1/3 mt-2"
                      onClick={logOut}>
                      Sign out
                    </Link>
                  ) : (
                    <Link
                      className="btn bg-emerald-500 text-white border-none hover:bg-black hover:border-none mx-auto w-1/3 mt-2"
                      to="login">
                      Login
                    </Link>
                  )}
                  <Link
                    className="btn bg-emerald-500 text-white border-none hover:bg-black hover:border-none mx-auto w-1/3 mt-2"
                    to="login">
                    Register
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>

      <ul className="lg:flex space-x-8 items-center font-bold hidden navbar-center">
        <li>
          <NavLink
            to="/"
            title="Home"
            className={({ isActive }) => (isActive ? "active" : "default")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/instructors"
            title="Instructors"
            className={({ isActive }) => (isActive ? "active" : "default")}>
            Instructors
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/class"
            title="Classes"
            className={({ isActive }) => (isActive ? "active" : "default")}>
            Classes
          </NavLink>
        </li>
        {user && (
          <li>
            <NavLink
              to="/dashboard"
              title="Dashboard"
              className={({ isActive }) => (isActive ? "active" : "default")}>
              Dashboard
            </NavLink>
          </li>
        )}
      </ul>
      <div className="nav-end font-bold flex items-center">
        <span>
          {user && (
            <img
              src={user?.photoURL}
              title={user?.displayName}
              className="rounded-full w-20 mr-2"
              alt=""
            />
          )}
        </span>

        <div className="hidden lg:block">
          {user ? (
            <Link
              className="btn bg-emerald-400 text-black hover:bg-emerald-600 hover:outline-emerald-600 hover:border-none mr-3"
              onClick={handleLogOut}>
              Sign out
            </Link>
          ) : (
            <Link
              className="btn text-black bg-white hover:bg-emerald-500 hover:outline-emerald-500 hover:border-none mr-3"
              to="/login">
              Login
            </Link>
          )}

          {user ? (
            <Link className="hidden" to="/signup">
              Sign Up
            </Link>
          ) : (
            <Link
              className="btn bg-emerald-500 text-white border-none hover:bg-black hover:border-none"
              to="/signup">
              Sign Up
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
