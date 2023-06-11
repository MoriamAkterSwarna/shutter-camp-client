import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SinglePopularInstructor from "./SinglePopularInstructor";

const PopularInstructor = () => { 
    const [popularInstructor, setPopularInstructor] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/popularinstructor')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setPopularInstructor(data)
        })
    }, [])
  return (
    <div className="my-10">
      <h2 className="text-5xl font-bold text-emerald-500 text-center my-3">
        Popular Instructor
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {
            popularInstructor.map(popular => <SinglePopularInstructor key={popular._id} popular={popular}></SinglePopularInstructor>)
        }
      </div>
    </div>
  );
};

export default PopularInstructor;
