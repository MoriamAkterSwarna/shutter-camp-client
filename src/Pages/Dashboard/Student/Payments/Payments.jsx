import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSelectedClasses from "../../../../hooks/useSelectedClasses";
import { Bounce, Slide } from "react-awesome-reveal";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "../CheckOut/CheckOut";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);
const Payments = () => {
  const { id } = useParams();
  const [myData, setMyData] = useState([]);
  const [payable, setPayable] = useState();
  
  const [selected] = useSelectedClasses();
  useEffect(() => {
    if (selected) {
      
      const classData = selected.filter((filClass) => filClass._id === id);
      setMyData(classData);
    }
  }, [selected]);
  useEffect(() => {
    const payableData = myData.map((pay) => {
     setPayable(pay);
    });
  }, [myData]);
  const price = parseFloat(payable?.price.toFixed(2));
//   console.log(price)

  return (
    <div>
      <Slide>
        <h3 className="text-3xl font-semibold text-emerald-500 text-center uppercase">
          
          Payment
        </h3>
      </Slide>
      <Bounce delay={1e3} cascade damping={1e-1}>
      <Elements stripe={stripePromise}>
                <CheckOut payable={payable} price={price}></CheckOut>
            </Elements>
      </Bounce>
    </div>
  );
};

export default Payments;
