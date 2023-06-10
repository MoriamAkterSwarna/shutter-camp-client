import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useState } from "react";
import { useEffect } from "react";
import "./CheckOut.css";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const CheckOut = ({ payable, price }) => {
  // console.log(payable)
  // console.log(price)
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        console.log(res.data.clientSecret);
        // console.log(res.data)
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(event);
    // console.log(card)
    // console.log(stripe)
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    // console.log(card)
    if (card === null) {
      // console.log(card)
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    // console.log("intent", paymentIntent);

    if (confirmError) {
      console.log(confirmError);
    }

    console.log("payment intent", paymentIntent);
    // setProcessing(false)
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      const payment = {
        pay: { ...payable },
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
      };
      axiosSecure.post("/payments", payment).then((res) => {
        // console.log();
        console.log(res.data.insertResult);
        if (res.data.insertResult.insertedId) {
          Swal.fire("Good job!", "Transaction successful!", "success");
        }
      });
    }
  };

  return (
    <>
      <form className="payment-form p-4 m-8 bg-emerald-100" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#e24270",
                "::placeholder": {
                  color: "#50C878",
                },
              },
              invalid: {
                color: "#9ed146",
              },
            },
          }}
        />
        <button
          className="pay-btn btn bg-emerald-500 hover:bg-emerald-700"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {transactionId && (
        <p className="text-emerald-500 font-semibold">
          Transaction complete with transactionId: {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckOut;
