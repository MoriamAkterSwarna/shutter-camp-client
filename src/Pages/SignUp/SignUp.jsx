import { useForm } from "react-hook-form";
// import { useTheme } from "../../providers/ThemeProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const SignUp = () => {
  // Theme toggle now in navbar
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from.pathname || "/";

  const onSubmit = (data) => {
    // console.log(data)
    if (data.password === data.ConfirmPassword) {
      const name = data.name;
      const email = data.email;
      const password = data.password;
      const photo = data.photo;
      console.log(name, email, password, photo);

      createUser(email, password, name, photo)
      .then((result) => {
        const createdUser = result.user;
        
            updateUserProfile(data.name, data.photo);

            const savedUser = { name: data.name, email: data.email, photoURL:data.photo, role: 'student' };
            console.log(savedUser);
            fetch("https://shutter-camp-server-nine.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(savedUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  toast("🦄 Registered Successfully!", {
                    position: "top-left",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                  setTimeout(() => {
                    navigate(from, { replace: true });
                  }, 4000);
                }
              });
          });
      }
  };

  return (
    <div className={
      `min-h-screen flex items-center justify-center relative overflow-hidden ` +
      (isDark
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
        : 'bg-gradient-to-br from-blue-200 via-blue-400 to-blue-700')
    }>

      {/* Decorative neumorphic shapes */}
      <div className="absolute inset-0 z-0">
        <div className={isDark ? "absolute w-40 h-40 bg-gray-700 rounded-full opacity-30 top-0 left-0 blur-2xl" : "absolute w-40 h-40 bg-blue-300 rounded-full opacity-30 top-0 left-0 blur-2xl"}></div>
        <div className={isDark ? "absolute w-32 h-32 bg-gray-800 rounded-full opacity-20 top-20 right-10 blur-2xl" : "absolute w-32 h-32 bg-blue-500 rounded-full opacity-20 top-20 right-10 blur-2xl"}></div>
        <div className={isDark ? "absolute w-24 h-24 bg-gray-700 rounded-full opacity-20 bottom-10 left-20 blur-2xl" : "absolute w-24 h-24 bg-blue-400 rounded-full opacity-20 bottom-10 left-20 blur-2xl"}></div>
        <div className={isDark ? "absolute w-56 h-56 bg-gray-900 rounded-full opacity-10 bottom-0 right-0 blur-2xl" : "absolute w-56 h-56 bg-blue-600 rounded-full opacity-10 bottom-0 right-0 blur-2xl"}></div>
      </div>
      <div className="relative z-10 w-full max-w-lg mx-auto">
        <div className={
          `backdrop-blur-xl rounded-3xl shadow-2xl p-10 border flex flex-col items-center ` +
          (isDark
            ? 'bg-gray-900/80 border-gray-700'
            : 'bg-white/20 border-blue-100')
        }>
          <div className="mb-6 text-center">
            <div className={isDark ? "text-2xl font-bold text-white mb-1" : "text-2xl font-bold text-white mb-1"}>Your logo</div>
            <h2 className={isDark ? "text-3xl font-extrabold text-white mb-2 tracking-tight" : "text-3xl font-extrabold text-white mb-2 tracking-tight"}>Register</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
            <input
              type="text"
              {...register("name", { required: true })}
              name="name"
              placeholder="Name"
              className={
                `rounded-lg px-4 py-2 outline-none border shadow-sm ` +
                (isDark
                  ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:bg-gray-900 focus:border-gray-500'
                  : 'bg-white/80 border-blue-200 text-gray-700 placeholder-gray-400 focus:bg-white focus:border-blue-400')
              }
            />
            {errors.name && (
              <span className="text-red-500 text-sm">Name is required</span>
            )}
            <input
              type="email"
              {...register("email", { required: true })}
              name="email"
              placeholder="username@gmail.com"
              className={
                `rounded-lg px-4 py-2 outline-none border shadow-sm ` +
                (isDark
                  ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:bg-gray-900 focus:border-gray-500'
                  : 'bg-white/80 border-blue-200 text-gray-700 placeholder-gray-400 focus:bg-white focus:border-blue-400')
              }
            />
            {errors.email && (
              <span className="text-red-500 text-sm">Email is required</span>
            )}
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/, 
              })}
              placeholder="Password"
              className={
                `rounded-lg px-4 py-2 outline-none border shadow-sm ` +
                (isDark
                  ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:bg-gray-900 focus:border-gray-500'
                  : 'bg-white/80 border-blue-200 text-gray-700 placeholder-gray-400 focus:bg-white focus:border-blue-400')
              }
            />
            {errors.password?.type === "required" && (
              <span className="text-red-500 text-sm">Password is required</span>
            )}
            {errors.password?.type === "minLength" && (
              <span className="text-red-500 text-sm">Password must be 6 characters</span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="text-red-500 text-sm">Password must have one Uppercase and one special character.</span>
            )}
            <input
              className={
                `rounded-lg px-4 py-2 outline-none border shadow-sm ` +
                (isDark
                  ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:bg-gray-900 focus:border-gray-500'
                  : 'bg-white/80 border-blue-200 text-gray-700 placeholder-gray-400 focus:bg-white focus:border-blue-400')
              }
              type="password"
              {...register("ConfirmPassword", { required: true })}
              placeholder="Confirm Password"
            />
            {errors.ConfirmPassword && (
              <span className="text-red-500 text-sm">Password and Confirm Password should be same</span>
            )}
            <input
              type="text"
              {...register("photo", { required: true })}
              placeholder="Photo URL"
              className={
                `rounded-lg px-4 py-2 outline-none border shadow-sm ` +
                (isDark
                  ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:bg-gray-900 focus:border-gray-500'
                  : 'bg-white/80 border-blue-200 text-gray-700 placeholder-gray-400 focus:bg-white focus:border-blue-400')
              }
            />
            {errors.photo && (
              <span className="text-red-600 text-sm">Photo URL is required</span>
            )}
            <button
              type="submit"
              className={
                `w-full font-semibold py-2 rounded-lg shadow-md transition-colors duration-200 mt-2 ` +
                (isDark
                  ? 'bg-gray-700 hover:bg-gray-800 text-white'
                  : 'bg-blue-900 hover:bg-blue-800 text-white')
              }
            >
              Register
            </button>
          </form>
          <div className="flex items-center w-full my-4">
            <div className={isDark ? "flex-grow h-px bg-gray-700" : "flex-grow h-px bg-blue-200"}></div>
            <span className={isDark ? "mx-2 text-gray-300 text-sm" : "mx-2 text-blue-100 text-sm"}>or continue with</span>
            <div className={isDark ? "flex-grow h-px bg-gray-700" : "flex-grow h-px bg-blue-200"}></div>
          </div>
          <SocialLogin />
          <div className={isDark ? "mt-4 text-center text-gray-200 text-sm" : "mt-4 text-center text-white text-sm"}>
            Already have an account?{' '}
            <Link to="/login" className={isDark ? "text-blue-300 font-bold hover:underline" : "text-blue-200 font-bold hover:underline"}>Login</Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
