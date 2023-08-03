import React from "react";

const SinglePopularClasses = ({ popularCls }) => {
  // console.log(popularCls)
  const {
    _id,
    cName,
    enrolled,
    image,
    instructorEmail,
    instructorName,
    price,
    seats,
  } = popularCls;
  return (
    <div className="card w-96 bg-emerald-100 shadow-lg hover:bg-emerald-300">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{cName}</h2>
        <p>Instructor: {instructorName}</p>
        <p>Enrolled students: {enrolled}</p>
        <div className="card-actions">
          <div className="badge bg-green-500">Price: {price}</div>
          <div className="badge bg-red-400">Available Seats: {seats}</div>
        </div>
      </div>
    </div>
  );
};

export default SinglePopularClasses;
