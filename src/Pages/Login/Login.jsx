import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineUser } from 'react-icons/ai';
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
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
      console.log(data)
      const email = data.email;
      const password = data.password;
       
      signInUser(email, password)
        .then(result =>{
          const createdUser = result.user;
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
              navigate(from, {replace:true})
            }, 4000);

            
           }
            
        )
        .catch(error => console.log(error))
      
  };
    return (
        <div className="hero min-h-screen bg-black bg-opacity-90 relative">
      <div className="hero-content flex-col ">
        <div className="text-center  ">
          <h1 className="text-4xl font-bold text-white">Sign up</h1>
        </div>
        <div className="card w-96 shadow-2xl bg-black mt-10">
            <div className="absolute -top-14 left-36">
                <AiOutlineUser className="text-8xl text-emerald-500"></AiOutlineUser>
            </div>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body mt-2">
           

            <div className="form-control">
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <input
                type="password"
                {...register("password", {
                  required: true,
                  
                })}
                placeholder="password"
                className="input input-bordered"
              />
              
            </div>
            
            <div className="form-control mt-6">
              <input
                className="btn bg-emerald-500 border-none hover:bg-emerald-700 text-white"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className="text-white mx-auto mb-4">
            <small>
              New Here? <Link to="/signup" className="text-emerald-700">Please Sign Up</Link>
            </small>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
    );
};

export default Login;