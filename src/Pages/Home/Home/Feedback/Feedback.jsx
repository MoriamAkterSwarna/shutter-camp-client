import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
// import AwesomeSliderStyles from "react-awesome-slider/src/styled/fold-out-animation.scss";
import { BsFillChatLeftQuoteFill } from "react-icons/bs";
import img1 from "../../../../assets/feedbackimg/img1.jpg";
import img2 from "../../../../assets/feedbackimg/img2.jpg";
import img3 from "../../../../assets/feedbackimg/img3.jpg";
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Feedback = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false}
      interval={6000}
      className=" h-[110vh] lg:h-[600px] ">
      {/* testimonial 1 */}
      <div className="bg-emerald-100 flex flex-col lg:flex-row items-center justify-around h-[110vh] lg:h-[600px] mx-3 lg:mx-0">
        <div className="w-full lg:w-1/2">
          <img className="w-full object-cover" src={img1} alt="" />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          className="w-full lg:w-1/2 mr-16 ml-4 lg:ml-0">
          <h2 className="text-3xl font-bold text-emerald-500 text-center my-3 ">
            What our student says about Us
          </h2>
          <BsFillChatLeftQuoteFill className="ml-10 h-10 w-10 text-emerald-500"></BsFillChatLeftQuoteFill>
          <p className="ml-10">
            "The photography course at the summer camp was fantastic! The
            instructor was knowledgeable and passionate, and they provided clear
            explanations and hands-on practice. I learned so much about
            composition, lighting, and post-processing techniques. It was a
            valuable experience that improved my photography skills."
          </p>
          <div className="divider ml-20 h-4 m-0"></div>
          <div className="ml-10 lg:ml-32">
            <p>Parker Robert</p>
            <p>Professional photographer</p>
          </div>
        </div>
      </div>
      {/* testimonial 2 */}
      <div className="bg-emerald-100 flex flex-col lg:flex-row items-center justify-around  h-[100vh] lg:h-[600px] mx-3 lg:mx-0">
        <div className="w-full lg:w-1/2">
          <img className="w-full object-cover" src={img2} alt="" />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          className="w-full lg:w-1/2 mr-16 ml-4 lg:ml-0">
          <h2 className="text-3xl font-bold text-emerald-500 text-center my-3 ">
            What our student says about Us
          </h2>
          <BsFillChatLeftQuoteFill className="ml-10 h-10 w-10 text-emerald-500"></BsFillChatLeftQuoteFill>
          <p className="ml-10">
            "The photography course at the summer camp was fantastic! The
            instructor was knowledgeable and passionate, and they provided clear
            explanations and hands-on practice. I learned so much about
            composition, lighting, and post-processing techniques. It was a
            valuable experience that improved my photography skills."
          </p>
          <div className="divider ml-20 h-4 m-0"></div>
          <div className="ml-10 lg:ml-32">
            <p>Parker Robert</p>
            <p>Professional photographer</p>
          </div>
        </div>
      </div>
      {/* testimonial 3*/}
      <div className="bg-emerald-100 flex flex-col lg:flex-row items-center justify-around  h-[100vh] lg:h-[600px] mx-3 lg:mx-0">
        <div className="w-full lg:w-1/2">
          <img className="w-full object-cover" src={img3} alt="" />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          className="w-full lg:w-1/2 mr-16 ml-4 lg:ml-0">
          <h2 className="text-3xl font-bold text-emerald-500 text-center my-3 ">
            What our student says about Us
          </h2>
          <BsFillChatLeftQuoteFill className="ml-10 h-10 w-10 text-emerald-500"></BsFillChatLeftQuoteFill>
          <p className="ml-10">
            "The photography course at the summer camp was fantastic! The
            instructor was knowledgeable and passionate, and they provided clear
            explanations and hands-on practice. I learned so much about
            composition, lighting, and post-processing techniques. It was a
            valuable experience that improved my photography skills."
          </p>
          <div className="divider ml-20 h-4 m-0"></div>
          <div className="ml-10 lg:ml-32">
            <p>Parker Robert</p>
            <p>Professional photographer</p>
          </div>
        </div>
      </div>
      {/* testimonial 4*/}
      <div className="bg-emerald-100 flex flex-col lg:flex-row items-center justify-around  h-[100vh] lg:h-[600px] mx-3 lg:mx-0">
        <div className="w-full lg:w-1/2">
          <img className="w-full object-cover" src={img2} alt="" />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          className="w-full lg:w-1/2 mr-16 ml-4 lg:ml-0">
          <h2 className="text-3xl font-bold text-emerald-500 text-center my-3 ">
            What our student says about Us
          </h2>
          <BsFillChatLeftQuoteFill className="ml-10 h-10 w-10 text-emerald-500"></BsFillChatLeftQuoteFill>
          <p className="ml-10">
            "The photography course at the summer camp was fantastic! The
            instructor was knowledgeable and passionate, and they provided clear
            explanations and hands-on practice. I learned so much about
            composition, lighting, and post-processing techniques. It was a
            valuable experience that improved my photography skills."
          </p>
          <div className="divider ml-20 h-4 m-0"></div>
          <div className="ml-10 lg:ml-32">
            <p>Parker Robert</p>
            <p>Professional photographer</p>
          </div>
        </div>
      </div>
    </AutoplaySlider>
  );
};

export default Feedback;
