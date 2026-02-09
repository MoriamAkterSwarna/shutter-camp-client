import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { AiFillSchedule, AiOutlineGlobal } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import {
  BsFillCalendar2RangeFill,
  BsUniversalAccessCircle,
} from "react-icons/bs";
import { FaChalkboardTeacher, FaMoneyCheckAlt, FaUsers } from "react-icons/fa";
import { FaIndustry, FaSpaceAwesome } from "react-icons/fa6";
import { FcSelfie } from "react-icons/fc";
import { GiMaterialsScience } from "react-icons/gi";
import { MdFeedback, MdOutlineClass } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
import { Link } from "react-router-dom";

const Facilities = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const facilities = [
    { icon: AiFillSchedule, text: "Flexible Learning Schedule" },
    { icon: FaChalkboardTeacher, text: "Expert Instructors" },
    { icon: MdOutlineClass, text: "Comprehensive Curriculum" },
    { icon: BiTask, text: "Hands-on Practice" },
    { icon: MdFeedback, text: "Feedback and Critique" },
    { icon: FaUsers, text: "Peer Interaction" },
    { icon: BsUniversalAccessCircle, text: "Lifetime Access to Course Materials" },
    { icon: BsFillCalendar2RangeFill, text: "Suitable for All Skill Levels" },
    { icon: FaMoneyCheckAlt, text: "Cost-effective Learning" },
    { icon: FcSelfie, text: "Build a Portfolio" },
    { icon: TbCertificate, text: "Certificate of Completion" },
    { icon: FaSpaceAwesome, text: "Learning at Your Own Pace" },
    { icon: FaIndustry, text: "Access to Industry Insights" },
    { icon: GiMaterialsScience, text: "No Equipment Limitations" },
    { icon: AiOutlineGlobal, text: "Global Learning Community" },
  ];

  return (
    <div className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose <span className="text-blue-500">Shutter Camp</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Discover the world of photography from the comfort of your own home
            with our comprehensive online summer camp course. Whether
            you're an enthusiastic beginner or a hobbyist looking to enhance
            your skills, our expert instructors will guide you through a
            journey of creativity and mastery.
          </p>
        </div>

        {/* Facilities Grid */}
        <div 
          className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl shadow-xl p-8 md:p-12 mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <li 
                  key={index} 
                  className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-blue-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-700 font-medium">{facility.text}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Call to Action Section */}
        <div 
          data-aos="fade-up" 
          data-aos-duration="1000" 
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="facility-bg h-80 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-900/60"></div>
            <div className="relative z-10 text-center text-white px-4">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Unlock Your Photography Potential
              </h3>
              <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
                Join our online summer camp course and transform your passion into professional skills
              </p>
              <Link 
                to="/classes" 
                className="btn btn-lg bg-blue-500 hover:bg-blue-600 border-none text-white px-10"
              >
                Explore All Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
