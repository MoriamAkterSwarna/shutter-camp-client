import React from 'react';

const SingleClass = ({classItem}) => {
    const {_id, cName, image, instructorName,instructorEmail, price, seats, status} = classItem
    return (
        <div className="card w-96 bg-base-100 shadow-lg">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {cName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Instructor: {instructorName}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline bg-teal-500">Seat: {seats}</div> 
      <div className="badge badge-outline ">Price: {price}</div>
    </div>
    <div className='mx-auto'>
        <button className=' bg-emerald-500 px-6 py-3 rounded-3xl font-bold text-white mt-3'>Enroll</button>
    </div>
  </div>
</div>
    );
};

export default SingleClass;