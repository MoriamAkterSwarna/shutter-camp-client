import React from "react";
import service4 from "../../../../assets/service/icons8-career-100.png";
import service3 from "../../../../assets/service/icons8-certificates-64.png";
import service2 from "../../../../assets/service/icons8-online-support-100.png";
import service1 from "../../../../assets/service/icons8-skills-100.png";
const Services = () => {
  return (
    <div className="bg-emerald-300 h-64 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4">
      <div className="flex items-center">
        <img src={service1} alt="" />
        <p className="text-xl font-bold">Embrace your skills</p>
      </div>
      <div className="flex items-center">
        <img src={service2} alt="" />
        <p className="text-xl font-bold">24/7 online supports</p>
      </div>
      <div className="flex items-center">
        <img src={service3} alt="" />
        <p className="text-xl font-bold">Learn and Earn Certificates</p>
      </div>
      <div className="flex items-center">
        <img src={service4} alt="" />
        <p className="text-xl font-bold">Find your passionate Career</p>
      </div>
    </div>
  );
};

export default Services;
