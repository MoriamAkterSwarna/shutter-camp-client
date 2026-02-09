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
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section id="hero">
        <Slider />
      </section>

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* Popular Classes Section */}
      <section id="popular-classes">
        <PopularClasses />
      </section>

      {/* Course Info Section */}
      <section id="course-info">
        <CourseInfo />
      </section>

      {/* Popular Instructor Section */}
      <section id="instructors">
        <PopularInstructor />
      </section>

      {/* Facilities Section */}
      <section id="facilities">
        <Facilities />
      </section>

      {/* Stats Section */}
      <section id="stats">
        <Stats />
      </section>

      {/* Feedback/Testimonials Section */}
      <section id="testimonials">
        <Feedback />
      </section>
    </div>
  );
};

export default Home;
