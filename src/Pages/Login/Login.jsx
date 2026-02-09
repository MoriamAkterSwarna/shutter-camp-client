import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineUser } from 'react-icons/ai';
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  // Theme toggle removed

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";

  const onSubmit = data => {
    const email = data.email;
    const password = data.password;
    signInUser(email, password)
      .then(result => {
        toast('🦄 Log in Successfully!', {
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
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-200 via-blue-400 to-blue-700">
      {/* Theme Toggle Button */}

      {/* Decorative neumorphic shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-40 h-40 bg-blue-300 rounded-full opacity-30 top-0 left-0 blur-2xl"></div>
        <div className="absolute w-32 h-32 bg-blue-500 rounded-full opacity-20 top-20 right-10 blur-2xl"></div>
        <div className="absolute w-24 h-24 bg-blue-400 rounded-full opacity-20 bottom-10 left-20 blur-2xl"></div>
        <div className="absolute w-56 h-56 bg-blue-600 rounded-full opacity-10 bottom-0 right-0 blur-2xl"></div>
      </div>
      <div className="relative z-10 w-full max-w-lg mx-auto">
        <div className="backdrop-blur-xl rounded-3xl shadow-2xl p-10 border flex flex-col items-center bg-white/20 border-blue-100">
          <div className="mb-6 text-center">
            <div className="text-2xl font-bold text-white mb-1">Your logo</div>
            <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Login</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
            <input
              type="email"
              {...register("email", { required: true })}
              name="email"
              placeholder="username@gmail.com"
              className="rounded-lg px-4 py-2 outline-none border shadow-sm bg-white/80 border-blue-200 text-gray-700 placeholder-gray-400 focus:bg-white focus:border-blue-400"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">Email is required</span>
            )}
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Password"
              className="rounded-lg px-4 py-2 outline-none border shadow-sm bg-white/80 border-blue-200 text-gray-700 placeholder-gray-400 focus:bg-white focus:border-blue-400"
            />
            <div className="flex justify-end w-full">
              <button type="button" className="text-xs text-blue-100 hover:underline">Forgot Password?</button>
            </div>
            <button
              type="submit"
              className="w-full font-semibold py-2 rounded-lg shadow-md transition-colors duration-200 mt-2 bg-blue-900 hover:bg-blue-800 text-white"
            >
              Sign in
            </button>
          </form>
          <div className="flex items-center w-full my-4">
            <div className="flex-grow h-px bg-blue-200"></div>
            <span className="mx-2 text-blue-100 text-sm">or continue with</span>
            <div className="flex-grow h-px bg-blue-200"></div>
          </div>
          <SocialLogin />
          <div className="mt-4 text-center text-white text-sm">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-200 font-bold hover:underline">Register for free</Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;