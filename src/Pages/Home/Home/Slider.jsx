import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/styles.css";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCamera } from "react-icons/fa";
import banner1 from "../../../assets/bannerImage/30857.jpg";
import banner2 from "../../../assets/bannerImage/camera-photographic-with-smartphone-devices-generative-ai.jpg";
import banner4 from "../../../assets/bannerImage/preschooler-boy-taking-pictures-with-professional-photo-camera-isolated-grey-background.jpg";
import banner5 from "../../../assets/bannerImage/side-view-girl-with-camera.jpg";

const Slider = () => {
  return (
    <AwesomeSlider animation="cubeAnimation" className="h-[70vh] md:h-[85vh] lg:h-screen">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
        <img src={banner2} alt="Banner 1" className="w-full h-full object-cover" />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <FaCamera className="text-blue-400 text-xl md:text-2xl" />
                <span className="text-blue-400 text-sm md:text-base font-semibold tracking-wider uppercase">Summer Photography Camp</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Unleash Your <span className="text-blue-400">Inner Photographer</span>
              </h1>
              <p className="text-gray-200 text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-2xl">
                Join our comprehensive summer camp and master the art of photography with expert instructors
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/classes" className="btn btn-lg bg-blue-500 hover:bg-blue-600 border-none text-white px-8 group">
                  Explore Classes
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/instructor" className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-black px-8">
                  Meet Instructors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
        <img className="w-full h-full object-cover" src={banner5} alt="Banner 2" />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <FaCamera className="text-blue-400 text-xl md:text-2xl" />
                <span className="text-blue-400 text-sm md:text-base font-semibold tracking-wider uppercase">Professional Training</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Capture Life's <span className="text-blue-400">Beautiful Moments</span>
              </h1>
              <p className="text-gray-200 text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-2xl">
                Learn from industry professionals and transform your passion into professional skills
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/classes" className="btn btn-lg bg-blue-500 hover:bg-blue-600 border-none text-white px-8 group">
                  Explore Classes
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/instructor" className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-black px-8">
                  Meet Instructors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
        <img className="w-full h-full object-cover" src={banner1} alt="Banner 3" />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <FaCamera className="text-blue-400 text-xl md:text-2xl" />
                <span className="text-blue-400 text-sm md:text-base font-semibold tracking-wider uppercase">Hands-On Experience</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Master the <span className="text-blue-400">Art of Photography</span>
              </h1>
              <p className="text-gray-200 text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-2xl">
                Practical lessons, creative projects, and personalized feedback to elevate your skills
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/classes" className="btn btn-lg bg-blue-500 hover:bg-blue-600 border-none text-white px-8 group">
                  Explore Classes
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/instructor" className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-black px-8">
                  Meet Instructors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
        <img src={banner4} alt="Banner 4" className="w-full h-full object-cover" />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <FaCamera className="text-blue-400 text-xl md:text-2xl" />
                <span className="text-blue-400 text-sm md:text-base font-semibold tracking-wider uppercase">Build Your Portfolio</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Start Your <span className="text-blue-400">Creative Journey</span>
              </h1>
              <p className="text-gray-200 text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-2xl">
                Create stunning portfolios and gain confidence behind the lens with expert guidance
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/classes" className="btn btn-lg bg-blue-500 hover:bg-blue-600 border-none text-white px-8 group">
                  Explore Classes
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/instructor" className="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-black px-8">
                  Meet Instructors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AwesomeSlider>
  );
};

export default Slider;
