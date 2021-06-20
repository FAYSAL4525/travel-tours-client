import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SplitCardForm from "../SplitCardForm/SplitCardForm";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const ProcessPayment = ({ handlePayment }) => {
  return (
    <Elements stripe={stripePromise}>
      <SplitCardForm handlePayment={handlePayment}></SplitCardForm>
    </Elements>
  );
};

export default ProcessPayment;
