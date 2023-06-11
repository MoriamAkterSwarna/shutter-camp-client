import React, { useContext, useEffect, useState } from 'react';
import { Bounce, Slide } from "react-awesome-reveal";
import { AuthContext } from '../../../../providers/AuthProvider';
const EnrolledClass = () => {
    const {user} = useContext(AuthContext)
    const [enroll, setEnroll] = useState([])
  
    // console.log(enrolled)

    useEffect(() =>{
        fetch('http://localhost:5000/payments')
        .then(res => res.json())
        .then(data => {
            const enrolledCls = 
            data.filter((enrollCls)=> enrollCls.email === user?.email)
            // console.log(enrolledCls)
        setEnroll(enrolledCls)})
    },[enroll])
    console.log(enroll)
    return (
        <div>
            <Slide>
                    <h3 className="text-3xl font-semibold text-emerald-500 text-center" > Enrolled Classes:{enroll.length} </h3>
                    </Slide>

                    <Bounce delay={1e3} cascade damping={1e-1}>
      <div className="overflow-x-auto bg-emerald-100 p-6 mt-4 rounded-lg border-2">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Price</th>
              <th>Transaction Id</th>
              <th>Date</th>
              
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {Array.isArray(enroll) && enroll.map((enrolItem, index) => (
              <tr key={enrolItem._id}>
                <th>{index + 1}</th>
                <td>{enrolItem.pay.cName}</td>
                <td>{enrolItem.pay.instructorName}</td>
                <td>{enrolItem.pay.price}</td>
                <td>{enrolItem.transactionId}</td>
                <td>{enrolItem.date}</td>
                
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