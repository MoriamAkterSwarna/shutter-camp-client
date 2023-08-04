import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { FaRegSquareCaretRight } from "react-icons/fa6";
import infoBg from "../../../../assets/full-shot-man-with-camera-laptop.jpg";
const CourseInfo = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-full lg:h-[80vh] ">
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className=" ms-4 lg:mt-32 ">
        <small className="text-teal-500">Photography Learning Course</small>
        <p className="text-3xl font-bold  mb-3">
          Gain immediate entry to Proficient resolution
        </p>
        <p>
          Experience a comprehensive photography course that equips you with
          essential skills to capture the world through your lens. From
          mastering camera settings to refining composition techniques, this
          course offers a guided journey to elevate your photography powers.{" "}
        </p>

        <ul className="text-emerald-500 mt-4">
          <li className="flex items-center mb-2">
            <FaRegSquareCaretRight className="w-8 h-8 "></FaRegSquareCaretRight>
            <p className="text-xl">Premium Content</p>
          </li>
          <li className="flex items-center mb-2">
            <FaRegSquareCaretRight className="w-8 h-8 "></FaRegSquareCaretRight>
            <p className="text-xl">Powerful Audience</p>
          </li>
          <li className="flex items-center">
            <FaRegSquareCaretRight className="w-8 h-8 "></FaRegSquareCaretRight>
            <p className="text-xl">High Quality Tutorial</p>
          </li>
        </ul>
      </div>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className=" bg-slate-300 mask mask-hexagon-2 ">
        <img
          className="mask mask-hexagon-2 p-3 object-contain
           h-[80vh] ms-10"
          src={infoBg}
          alt=""
        />
      </div>
    </div>
  );
};

export default CourseInfo;
