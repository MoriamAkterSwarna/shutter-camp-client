import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { FaRegSquareCaretRight, FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import infoBg from "../../../../assets/full-shot-man-with-camera-laptop.jpg";

const CourseInfo = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="order-2 lg:order-1">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                Photography Learning Course
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Gain Immediate Entry to <span className="text-blue-500">Professional Resolution</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Experience a comprehensive photography course that equips you with
                essential skills to capture the world through your lens. From
                mastering camera settings to refining composition techniques, this
                course offers a guided journey to elevate your photography powers.
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                { title: "Premium Content", desc: "Access exclusive materials and resources" },
                { title: "Powerful Audience", desc: "Join a community of passionate photographers" },
                { title: "High Quality Tutorial", desc: "Learn from industry-leading professionals" }
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                    <FaCheck className="text-blue-500 group-hover:text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link to="/classes" className="btn btn-lg bg-blue-500 hover:bg-blue-600 border-none text-white px-8">
              Explore All Courses
            </Link>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="order-1 lg:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent z-10"></div>
              <img
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                src={infoBg}
                alt="Photography Course"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-500 rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
