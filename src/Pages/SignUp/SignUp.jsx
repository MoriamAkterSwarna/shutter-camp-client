import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const validatePassword = (value) => {
    const password = value.trim();
    const confirmPassword = getValues("confirmPassword").trim();

    if (password !== confirmPassword) {
      return "Passwords do not match";
    }

    return true;
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-4xl font-bold">Sign up</h1>
        </div>
        <div className="card w-96 shadow-2xl bg-black">
          <form className="card-body">
            <div className="form-control">
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
            </div>

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
                  minLength: 6,

                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">Password must be 6 characters</p>
              )}

              {errors.password?.type === "pattern" && (
                <p className="text-red-500">
                  Password must have one Uppercase one and one special
                  character.
                </p>
              )}

              <div className="form-control mt-2">
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: true,
                    validate: validatePassword,
                  })}
                  name="confirm"
                  placeholder="Confirm Password"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">
                    Password and Confirm Password should be same
                  </span>
                )}
              </div>
              <div className="form-control">
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-emerald-500 border-none"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="text-white mx-auto mb-4">
            <small>
              Already have an account <Link to="/login">Login</Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
