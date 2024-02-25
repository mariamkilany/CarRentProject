import React, { useEffect, useState } from "react";
import PaymentForm from "../Components/paymentForm/PaymentForm";
import TransactionFilter from "../Components/dashboard_content/transactionFilter/TransactionFilter";
import BillingInfoCard from "../Components/BillingInfo/billingInfoCard";
import { Stack, Typography } from "@mui/material";
import RentalSummaryCard from "../Components/RentalSummary/rentalSummaryCard";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const sectionStyle = {
  backgroundColor: "var(--clr-white)",
  marginBottom: "50px",
  padding: "3.2rem",
  flexGrow: 1,
};

const Payment = () => {
  const [paymentInfo, setPaymentInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const location = useLocation();
  const selectedCar = location.state?.car;
  const [passed, setPassed] = useState(false);
  const User = useSelector((state) => state.user.user);
  const [currentUser] = useState(User);
  const elements = useElements();
  const stripe = useStripe();
  const navgiate = useNavigate();

  useEffect(() => {
    console.log("Selected Car", selectedCar);
    if (!selectedCar) navgiate("/home");
  }, [selectedCar, navgiate]);

  const handlePaymentSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage(null);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
      setMessage(error.message);
      setLoading(false);
    } else {
      const id = paymentMethod.id;
      const amount = selectedCar.price; // replace this with the actual amount

      const response = await fetch("http://localhost:3001/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, amount }),
      });

      const data = await response.json();

      console.log("Payment", data);

      if (data.success) {
        setMessage("Payment successful!");
      } else {
        setMessage("Payment failed.");
        console.log("Error", data);
      }

      setLoading(false);
    }
  };

  return (
    selectedCar && (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "3.2rem",
            padding: "3rem",
            justifyContent: "center",
          }}
        >
          <div style={sectionStyle}>
            <RentalSummaryCard selectedCar={selectedCar} />
          </div>

          <div
            style={{
              flexGrow: 1,
            }}
          >
            <div style={sectionStyle}>
              <BillingInfoCard currentUser={currentUser} />
            </div>

            <div style={sectionStyle}>
              <h3>Rental Info</h3>
              <Stack
                direction={"row"}
                spacing={2}
                justifyContent="space-between"
              >
                <Typography variant="body2">
                  Please select your rental date
                </Typography>
                <Typography variant="body2"> Step 2 of 3</Typography>
              </Stack>
              <TransactionFilter title="Pick - Up" />
              <TransactionFilter title="Drop - off" />
            </div>

            <div style={sectionStyle}>
              <h3>Payment Method</h3>
              <Stack
                direction={"row"}
                spacing={2}
                justifyContent="space-between"
              >
                <Typography variant="body2">
                  Please enter your payment method
                </Typography>
                <Typography variant="body2"> Step 3 of 3</Typography>
              </Stack>
              <PaymentForm
                passed={passed}
                setPassed={setPassed}
                onSubmitPayment={handlePaymentSubmit}
                message={message}
                loading={loading}
                stripe={stripe}
              />
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Payment;
