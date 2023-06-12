 
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { Bounce, Slide } from "react-awesome-reveal";
import { useState } from "react";
import { useEffect } from "react";
const EnrolledClass = () => {
  const { user } = useContext(AuthContext);
  const [enroll, setEnroll] = useState([]);

  useEffect(()=>{
    let isMounted = true;
    fetch('https://shutter-camp-server.vercel.app/payments')
    .then(res => res.json())
    .then(data =>{
      // console.log(data)
      if(isMounted){
        const enrolledClasses = data.filter(enrolled => enrolled.email === user?.email);
      console.log(enrolledClasses)
      setEnroll(enrolledClasses)
      }
    })
    return () => {
      isMounted = false;
    }
  },[])

  return (
    <div>
      <Slide>
        
        <h3 className="text-3xl font-semibold text-emerald-500 text-center">
          
          Enrolled Classes: {enroll.length}
        </h3>
      </Slide>
      <Bounce delay={1e3} cascade damping={1e-1}>
      <div className="overflow-x-auto bg-emerald-100 p-6 mt-4 rounded-lg border-2">
        <table className="table table-zebra">           
           <thead>
            <tr>
              <th>#</th>
             <th>Class Name</th>
              <th>Instructor</th>
              <th>Image</th>
             <th>Price</th>
             <th>Seats</th>
            </tr>
         </thead>
          <tbody>

         {enroll.map((enrolItem, index) => ( 
               <tr key={enrolItem._id}>
                <th>{index + 1}</th>
                 <td>{enrolItem.pay.cName}</td>
                 <td>{enrolItem.pay.instructorName}</td>
                 <td><img className="w-20 rounded-full border-2 border-emerald-800 p-1" src={enrolItem.pay.image} alt="" /></td>
                <td>{enrolItem.pay.price}</td>
                
                <td>{enrolItem.pay.seats}</td>

             </tr>
            ))} 
          </tbody>
        </table>
      </div>
      </Bounce>
    </div>
  );
};

export default EnrolledClass;
