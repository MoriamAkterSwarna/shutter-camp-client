import React from 'react';

const SinglePopularInstructor = ({popular}) => {
    console.log(popular)
    const {_id, name, email, photoURL,students} =popular
    return (
        <div className="card w-96 bg-green-100 shadow-xl border-2">
  <figure><img src={photoURL} alt="Instructor"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Email: {email}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline hover:bg-emerald-500 hover:border-emerald-700">Students: {students}</button>
    </div>
  </div>
</div>
    );
};

export default SinglePopularInstructor;