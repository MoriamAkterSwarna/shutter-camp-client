import React from "react";
import CountUp from "react-countup";
const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 p-4 gap-10">
      <div className="bg-slate-200 px-6 py-10 rounded-lg border  text-center">
        <p className="text-xl font-bold mb-2">Total Students</p>
        <CountUp
          className="text-5xl text-emerald-500 font-bold"
          start={4600}
          end={4620}
          duration={10}
        />
      </div>
      <div className="bg-slate-200 px-6 py-10 rounded-lg border  text-center">
        <p className="text-xl font-bold mb-2">Instructors</p>
        <CountUp
          className="text-5xl text-emerald-500 font-bold"
          start={55}
          end={85}
          duration={10}
        />
      </div>
      <div className="bg-slate-200 px-6 py-10 rounded-lg border  text-center">
        <p className="text-xl font-bold mb-2">Total Courses</p>
        <CountUp
          className="text-5xl text-emerald-500 font-bold"
          start={600}
          end={656}
          duration={10}
        />
      </div>
      <div className="bg-slate-200 px-6 py-10 rounded-lg border  text-center">
        <p className="text-xl font-bold mb-2">Rating</p>
        <CountUp
          className="text-5xl text-emerald-500 font-bold"
          start={60}
          end={92}
          duration={10}
        />{" "}
        <span>%</span>
      </div>
    </div>
  );
};

export default Stats;
