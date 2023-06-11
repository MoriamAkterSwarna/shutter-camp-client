import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { BsFillChatLeftQuoteFill } from "react-icons/bs";

import img1 from "../../../../assets/feedbackimg/img1.jpg";
import img2 from "../../../../assets/feedbackimg/img2.jpg";
import img3 from "../../../../assets/feedbackimg/img3.jpg";
import img4 from "../../../../assets/feedbackimg/img4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Feedback = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={5000}
    >
      <div data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="400" className="bg-emerald-100 flex items-center justify-center relative  h-[600px]">
        <div data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="400">
          <img data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="400" className="w-1/2 object-cover" src={img1} alt="" />
          <div className="w-1/2 absolute top-20 right-10 " data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="400">
            <h2 className="text-3xl font-bold text-emerald-500 text-center my-3 ">
              What our student says about Us
            </h2>
            <BsFillChatLeftQuoteFill className="ml-20 h-10 w-10 text-emerald-500"></BsFillChatLeftQuoteFill>
            <p className="ml-20">
              "The photography course at the summer camp was fantastic! The
              instructor was knowledgeable and passionate, and they provided
              clear explanations and hands-on practice. I learned so much about
              composition, lighting, and post-processing techniques. It was a
              valuable experience that improved my photography skills."
            </p>
            <div className="divider ml-20"></div>
            <div className="ml-32">
              <p>Parker Robert</p>
              <p>Professional photographer</p>
            </div>
          </div>
        </div>
        
      </div>
      <div data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="400" className="bg-emerald-100 flex items-center justify-center relative  h-[600px]">
        <div data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="400" >
          <img data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="400" className="w-1/2 object-cover" src={img2} alt="" />
          <div data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="400" className="w-1/2 absolute top-20 right-10">
            <h2 className="text-3xl font-bold text-emerald-500 text-center my-3 ">
              What our student says about Us
            </h2>
            <BsFillChatLeftQuoteFill className="ml-20 h-10 w-10 text-emerald-500"></BsFillChatLeftQuoteFill>
            <p className="ml-20">
              "The photography course at the summer camp was fantastic! The
              instructor was knowledgeable and passionate, and they provided
              clear explanations and hands-on practice. I learned so much about
              composition, lighting, and post-processing techniques. It was a
              valuable experience that improved my photography skills."
            </p>
            <div className="divider ml-20"></div>
            <div className="ml-32">
              <p>Parker Robert</p>
              <p>Professional photographer</p>
            </div>
          </div>
        </div>
        
      </div>
      <div data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="400" className="bg-emerald-100 flex items-center justify-center relative  h-[600px]">
        <div data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="400">
          <img data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="400" className="w-1/2 object-cover" src={img3} alt="" />
          <div data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="400" className="w-1/2 absolute top-20 right-10">
            <h2 className="text-3xl font-bold text-emerald-500 text-center my-3 ">
              What our student says about Us
            </h2>
            <BsFillChatLeftQuoteFill className="ml-20 h-10 w-10 text-emerald-500"></BsFillChatLeftQuoteFill>
            <p className="ml-20">
              "The photography course at the summer camp was fantastic! The
              instructor was knowledgeable and passionate, and they provided
              clear explanations and hands-on practice. I learned so much about
              composition, lighting, and post-processing techniques. It was a
              valuable experience that improved my photography skills."
            </p>
            <div className="divider ml-20"></div>
            <div className="ml-32">
              <p>Parker Robert</p>
              <p>Professional photographer</p>
            </div>
          </div>
        </div>
        
      </div>
      <div data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="400" className="bg-emerald-100 flex items-center justify-center relative  h-[600px]">
        <div data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="400">
          <img data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="400" className="w-1/2 object-cover" src={img4} alt="" />
          <div data-aos="zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="400" className="w-1/2 absolute top-20 right-10">
            <h2 className="text-3xl font-bold text-emerald-500 text-center my-3 ">
              What our student says about Us
            </h2>
            <BsFillChatLeftQuoteFill className="ml-20 h-10 w-10 text-emerald-500"></BsFillChatLeftQuoteFill>
            <p className="ml-20">
              "The photography course at the summer camp was fantastic! The
              instructor was knowledgeable and passionate, and they provided
              clear explanations and hands-on practice. I learned so much about
              composition, lighting, and post-processing techniques. It was a
              valuable experience that improved my photography skills."
            </p>
            <div className="divider ml-20"></div>
            <div className="ml-32">
              <p>Parker Robert</p>
              <p>Professional photographer</p>
            </div>
          </div>
        </div>
        
      </div>
      
    </AutoplaySlider>
  );
};

export default Feedback;
