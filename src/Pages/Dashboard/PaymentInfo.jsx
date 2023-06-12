
import React from "react";
import { useContext } from "react";
import { Bounce, Rotate, Slide } from "react-awesome-reveal";
import { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const PaymentInfo = () => {
      const { user } = useContext(AuthContext);
  const [payed, setPayed] = useState([]);

  useEffect(()=>{
    let isMounted = true;
    fetch('https://shutter-camp-server.vercel.app/payments')
    .then(res => res.json())
    .then(data =>{
      // console.log(data)
      if(isMounted){
        const payedClasses = data.filter(payed => payed.email === user?.email);
      console.log(payedClasses)
      setPayed(payedClasses)
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
                     Payment Information
       </h3>
       </Slide>
       <Rotate delay={1e3} cascade damping={1e-1}>
      <div className="overflow-x-auto bg-emerald-100 p-6 mt-4 rounded-lg border-2">
       <table className="table table-zebra">           
           <thead>
             <tr>
              <th>#</th>
           <th>Class Name</th>
             <th>Price</th>
              <th>Transaction Id</th>
              <th>Date</th>

             </tr>
          </thead>
           <tbody>

          {payed.map((payedItem, index) => ( 
               <tr key={payedItem._id}>
                <th>{index + 1}</th>
                 <td>{payedItem.pay.cName}</td>
                <td>{payedItem.pay.price}</td>
                <td>{payedItem.transactionId}</td>
                <td>{payedItem.date}</td>

             </tr>
            ))} 
          </tbody>
        </table>
      </div>
      </Rotate>
    </div>
    );
};

export default PaymentInfo;
