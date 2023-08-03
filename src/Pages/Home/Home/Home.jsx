import React from "react";
import Facilities from "./Facilities/Facilities";
import Feedback from "./Feedback/Feedback";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructor from "./PopularInstructor/PopularInstructor";
import Slider from "./Slider";
import Services from "./services/Services";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Services></Services>
      <PopularClasses></PopularClasses>
      <PopularInstructor></PopularInstructor>
      <Facilities></Facilities>
      <Feedback></Feedback>
    </div>
  );
};

export default Home;
