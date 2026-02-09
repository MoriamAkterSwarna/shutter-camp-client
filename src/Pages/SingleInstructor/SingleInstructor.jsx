import React from 'react';


const SingleInstructor = ({singleIns}) => {

    // console.log({singleIns})
    const {_id, name, email, role,photoURL} = singleIns;
    return (
        
            <div className="card w-96 bg-base-100 shadow-xl border border-blue-100">
  <figure><img src={photoURL} alt="Instructor" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Email: {email}</p>
    <p>Role: <span className='font-semibold'>{role}</span></p>
    <div className="card-actions justify-end">
      <button className="btn bg-blue-500">See Classes</button>
    </div>
  </div>
</div>
        
    );
};

export default SingleInstructor;