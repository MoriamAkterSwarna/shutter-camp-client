import React from "react";
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
  return (
    <div className="my-10">
      <div className="text-center my-4">
        <h2 className="text-5xl font-bold mx-auto text-emerald-500">
          Why Choose Shutter Camp
        </h2>
      </div>
      <div className="text-center">
        <p>
          Discover the world of photography from the comfort of your own home
          with our comprehensive online summer camp course. <br /> Whether
          you're an enthusiastic beginner or a hobbyist looking to enhance{" "}
          <br /> your skills, our expert instructors will guide you through a
          journey of creativity and mastery.
        </p>
      </div>

      {/* facilities section */}

      <div className="shadow-2xl rounded-lg">
        <div className=" mt-10  p-6 ">
          {/* facilities list */}
          <ul className="list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex items-center">
              <AiFillSchedule className="w-8 h-8 mr-2 text-emerald-500"></AiFillSchedule>
              <li>Flexible Learning Schedule</li>
            </div>
            <div className="flex items-center">
              <FaChalkboardTeacher className="w-8 h-8 mr-2 text-emerald-500"></FaChalkboardTeacher>
              <li>Expert Instructors</li>
            </div>
            <div className="flex items-center">
              <MdOutlineClass className="w-8 h-8 mr-2 text-emerald-500"></MdOutlineClass>
              <li>Comprehensive Curriculum</li>
            </div>
            <div className="flex items-center">
              <BiTask className="w-8 h-8 mr-2 text-emerald-500"></BiTask>
              <li>Hands-on Practice</li>
            </div>
            <div className="flex items-center">
              <MdFeedback className="w-8 h-8 mr-2 text-emerald-500"></MdFeedback>
              <li>Feedback and Critique</li>
            </div>
            <div className="flex items-center">
              <FaUsers className="w-8 h-8 mr-2 text-emerald-500"></FaUsers>
              Peer Interaction
            </div>
            <div className="flex items-center">
              <BsUniversalAccessCircle className="w-8 h-8 mr-2 text-emerald-500"></BsUniversalAccessCircle>
              <li>Lifetime Access to Course Materials</li>
            </div>
            <div className="flex items-center">
              <BsFillCalendar2RangeFill className="w-8 h-8 mr-2 text-emerald-500"></BsFillCalendar2RangeFill>
              Suitable for All Skill Levels
            </div>
            <div className="flex items-center">
              <FaMoneyCheckAlt className="w-8 h-8 mr-2 text-emerald-500"></FaMoneyCheckAlt>
              Cost-effective Learning
            </div>
            <div className="flex items-center">
              <FcSelfie className="w-8 h-8 mr-2 text-emerald-500"></FcSelfie>
              Build a Portfolio
            </div>
            <div className="flex items-center">
              <TbCertificate className="w-8 h-8 mr-2 text-emerald-500"></TbCertificate>
              Certificate of Completion
            </div>
            <div className="flex items-center">
              <FaSpaceAwesome className="w-8 h-8 mr-2 text-emerald-500">
                {" "}
              </FaSpaceAwesome>
              Learning at Your Own Pace
            </div>
            <div className="flex items-center">
              <FaIndustry className="w-8 h-8 mr-2 text-emerald-500"></FaIndustry>
              Access to Industry Insights
            </div>
            <div className="flex items-center">
              <GiMaterialsScience className="w-8 h-8 mr-2 text-emerald-500"></GiMaterialsScience>
              No Equipment Limitations
            </div>
            <div className="flex items-center">
              <AiOutlineGlobal className="w-8 h-8 mr-2 text-emerald-500"></AiOutlineGlobal>
              Global Learning Community
            </div>
          </ul>
        </div>

        {/* facilities bg */}
        <div className="p-10">
          <div className="facility-bg h-64 rounded-md pt-20 ps-10">
            <p className="text-xl mb-2">
              Unlock Your Photography Potential with Our Online <br /> Summer
              Camp Course!
            </p>
            <Link className="btn bg-teal-500 border-none">See Courses</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
