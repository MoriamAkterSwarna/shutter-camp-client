import React from "react";
import CountUp from "react-countup";
import { FaUsers, FaChalkboardTeacher, FaBook, FaStar } from "react-icons/fa";

const Stats = () => {
  const stats = [
    {
      icon: FaUsers,
      label: "Total Students",
      start: 4600,
      end: 4620,
      suffix: "+",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FaChalkboardTeacher,
      label: "Expert Instructors",
      start: 55,
      end: 85,
      suffix: "+",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: FaBook,
      label: "Total Courses",
      start: 600,
      end: 656,
      suffix: "+",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FaStar,
      label: "Success Rating",
      start: 60,
      end: 92,
      suffix: "%",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="py-16 md:py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl from-blue-500/50 to-teal-500/50"></div>
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} mb-4`}>
                    <Icon className="text-white text-2xl" />
                  </div>
                  <CountUp
                    className="text-5xl font-bold text-white mb-2 block"
                    start={stat.start}
                    end={stat.end}
                    duration={3}
                    suffix={stat.suffix}
                  />
                  <p className="text-gray-300 text-lg font-medium">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
