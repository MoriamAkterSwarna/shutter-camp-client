import React, { useEffect, useState } from "react";
import SinglePopularClasses from "./SinglePopularClasses";

const PopularClasses = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch("https://shutter-camp-server.vercel.app/popularclasses")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setPopular(data);
      });
  }, []);
  // console.log(popular)
  return (
    <div className="my-10">
      <h2 className="text-5xl font-bold text-emerald-500 text-center my-3">
        Popular Classes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        {popular.map((popularCls) => (
          <SinglePopularClasses
            key={popularCls._id}
            popularCls={popularCls}></SinglePopularClasses>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
