import React, { useEffect, useState } from "react";
import SinglePopularClasses from "./SinglePopularClasses";
import { FaStar } from "react-icons/fa";

const PopularClasses = () => {
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://shutter-camp-server-nine.vercel.app/popularclasses")
      .then((res) => {
        if (!res.ok) {
          throw new Error('Server error');
        }
        return res.json();
      })
      .then((data) => {
        console.log("Classes Data:", data);
        setPopular(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching classes:", error);
        console.log("Using mock data instead...");
       
        // setPopular(mockData);
        setLoading(false);
      });
  }, []);
  
  return (
    <div className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FaStar className="text-blue-500 text-2xl" />
            <span className="text-blue-500 font-semibold tracking-wider uppercase">Top Rated</span>
            <FaStar className="text-blue-500 text-2xl" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Popular <span className="text-blue-500">Classes</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our most loved photography courses, handpicked by students and experts
          </p>
        </div>

        {loading ? (
          <div className="text-center py-10">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
            <p className="mt-4 text-gray-600">Loading classes...</p>
          </div>
        ) : popular.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-600">No classes found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popular.map((popularCls, index) => (
              <SinglePopularClasses
                key={popularCls._id}
                popularCls={popularCls}
                index={index}></SinglePopularClasses>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularClasses;
