import Lottie from "lottie-react";
import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorLottie from "../../assets/404page.json";

const Errorpage = () => {
  const { error, status } = useRouteError();

  return (
    
    <section className="flex flex-col lg:flex-row items-center h-auto lg:h-screen p-4 lg:p-16 bg-blue-50 text-gray-900">
      <div className="container items-center justify-center px-5 mx-auto my-8 flex flex-col lg:flex-row">
        <div className="mb-4 lg:mb-0 lg:ms-20">
          <Lottie
            className="w-1/2 mx-auto lg:w-3/4"
            animationData={errorLottie}
            loop={true}
          />
        </div>

        <div className="text-center lg:w-1/2">
          <h2 className="mb-4 font-extrabold text-4xl lg:text-7xl text-blue-500">
            <span className="sr-only">Error</span> {status || 404}
          </h2>
          <p className="text-xl lg:text-3xl mb-4 text-blue-600 font-semibold">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-6 py-2 lg:px-8 lg:py-3 font-semibold rounded bg-blue-500 hover:bg-teal-600 text-gray-900">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Errorpage;
