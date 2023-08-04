import React from "react";
import CourseInfo from "./CourseInfo/CourseInfo";
import Facilities from "./Facilities/Facilities";
import Feedback from "./Feedback/Feedback";
import PopularClasses from "./PopularClasses/PopularClasses";
import PopularInstructor from "./PopularInstructor/PopularInstructor";
import Slider from "./Slider";
import Stats from "./Stats/Stats";
import Services from "./services/Services";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Services></Services>
      <PopularClasses></PopularClasses>
      <CourseInfo></CourseInfo>
      <PopularInstructor></PopularInstructor>
      <Facilities></Facilities>
      <Stats></Stats>
      <Feedback></Feedback>
    </div>
  );
};

export default Home;
