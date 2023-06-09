import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import SingleInstructor from '../SingleInstructor/SingleInstructor';

const Instructor = () => {
    const [instructor, setInstructor] = useState([])
    
      useEffect(() =>{
        fetch(`http://localhost:5000/users`)
        .then(res => res.json())
        .then(data => {
            const instructors = data.filter(inst => inst.role === 'instructor')
            setInstructor(instructors)
        })
      })
    //   console.log(instructor)
    return (

       <>
        <h2 className='text-5xl font-bold text-center text-emerald-600 mt-4'>Instructors</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10'>
            {
                instructor.map(singleIns=> <SingleInstructor key={singleIns._id} singleIns={singleIns}></SingleInstructor> )
            }
        </div></>
    );
};

export default Instructor;