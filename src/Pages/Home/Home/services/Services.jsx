import React from "react";
import service4 from "../../../../assets/service/icons8-career-100.png";
import service3 from "../../../../assets/service/icons8-certificates-64.png";
import service2 from "../../../../assets/service/icons8-online-support-100.png";
import service1 from "../../../../assets/service/icons8-skills-100.png";

const Services = () => {
  const services = [
    {
      icon: service1,
      title: "Enhance Your Skills",
      description: "Master photography techniques from beginner to advanced levels"
    },
    {
      icon: service2,
      title: "24/7 Online Support",
      description: "Get help anytime from our dedicated support team"
    },
    {
      icon: service3,
      title: "Earn Certificates",
      description: "Receive recognized certificates upon course completion"
    },
    {
      icon: service4,
      title: "Build Your Career",
      description: "Transform your passion into a professional photography career"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-500 to-teal-600 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-white rounded-full p-4 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img src={service.icon} alt={service.title} className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/90 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
