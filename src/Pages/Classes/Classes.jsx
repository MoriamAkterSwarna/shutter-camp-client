import React, { useEffect, useState } from 'react';
import SingleClass from '../SingleClass/SingleClass';

const Classes = () => {
    const [showClasses, setShowClasses] = useState([])
    useEffect(() =>{
        fetch(`https://shutter-camp-server.vercel.app/classes`)
        .then(res => res.json())
        .then(data => {
            const classes = data.filter(cls => cls.status=== 'approve')
            setShowClasses(classes)
        })
      })
    //   console.log(showClasses)
    return (
        <>
        <h2 className='text-5xl font-bold text-center text-emerald-600 mt-4'>Classes</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12'>
            
           {
            showClasses.map( classItem => <SingleClass key={classItem._id} classItem={classItem}></SingleClass>)
           }
        </div></>
    );
};

export default Classes;