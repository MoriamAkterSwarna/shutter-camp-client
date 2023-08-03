import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/styles.css";
import banner1 from "../../../assets/bannerImage/30857.jpg";
import banner2 from "../../../assets/bannerImage/camera-photographic-with-smartphone-devices-generative-ai.jpg";
import banner4 from "../../../assets/bannerImage/preschooler-boy-taking-pictures-with-professional-photo-camera-isolated-grey-background.jpg";
import banner5 from "../../../assets/bannerImage/side-view-girl-with-camera.jpg";

const Slider = () => {
  return (
    <AwesomeSlider animation="cubeAnimation" className="h-[600px] mb-20">
      <div className="relative">
        <img src={banner2} alt="Banner 1" />
        <p className="text-white absolute top-14 md:top-28 left-4 md:left-24 w-full md:w-96 text-2xl md:text-4xl bg-black bg-opacity-70 font-bold p-4 md:p-6">
          Unleash Your Inner Photographer: Join our Summer Camp Photography
          Classes
        </p>
      </div>
      <div>
        <img className="carousel-image" src={banner5} alt="Banner 2" />
        <p className="text-white absolute top-14 md:top-28 left-4 md:left-24 w-full md:w-96 text-2xl md:text-4xl bg-black bg-opacity-70 font-bold p-4 md:p-6">
          Unleash Your Inner Photographer: Join our Summer Camp Photography
          Classes
        </p>
      </div>
      <div>
        <img className="carousel-image" src={banner1} alt="Banner 3" />
        <p className="text-white absolute top-14 md:top-28 left-4 md:left-24 w-full md:w-96 text-2xl md:text-4xl bg-black bg-opacity-70 font-bold p-4 md:p-6">
          Unleash Your Inner Photographer: Join our Summer Camp Photography
          Classes
        </p>
      </div>
      <div>
        <img src={banner4} alt="Banner 4" />
        <p className="text-white absolute top-14 md:top-28 left-4 md:left-24 w-full md:w-96 text-2xl md:text-4xl bg-black bg-opacity-70 font-bold p-4 md:p-6">
          Unleash Your Inner Photographer: Join our Summer Camp Photography
          Classes
        </p>
      </div>
    </AwesomeSlider>
  );
};

export default Slider;
