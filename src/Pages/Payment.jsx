import React from "react";
import PaymentForm from "../Components/paymentForm/PaymentForm";
import TransactionFilter from "../Components/dashboard_content/transactionFilter/TransactionFilter";
import BillingInfoCard from "../Components/BillingInfo/billingInfoCard";
import { Box, Stack } from "@mui/material";
import RentalInfopayment from "../Components/RentalInfo/rentalInfopayment";
import RentalSummaryCard from "../Components/RentalSummary/rentalSummaryCard";
import ConfirmationCard from "../Components/ConfirmationCard/confirmationCard";

const Payment = () => {
	const sectionStyle = {
		backgroundColor: "var(--clr-white)",
		marginBottom: "50px",
		padding: "3.2rem",
	};
  
    const stylecontainer = {
    backgroundColor: "#efefefef",
    width: "1000px",
    borderRadius: "25px",
    padding: "40px",
    margin: "15px 20px ",
  };

	return (
    <>
    <Box sx={stylecontainer}>
        <Box
          sx={{
            margin: "40px auto ",
            width: "600px",
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "25px",
          }}
        >
          <BillingInfoCard />
        </Box>
        <Box
          sx={{
            margin: "40px auto ",
            width: "700px",
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "25px",
          }}
        >
          <RentalInfopayment></RentalInfopayment>
        </Box>
        <Box
          sx={{
            margin: "40px auto ",
            width: "700px",
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "25px",
          }}
        >
          <RentalSummaryCard />
        </Box>


		<Box
          sx={{
            margin: "40px auto ",
            width: "900px",
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "25px",
          }}
        >
          <ConfirmationCard />
        </Box>
      </Box>
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				maxWidth: "600px",
				margin: "6rem auto",
				justifyContent: "center",
			}}
		>
			<div style={sectionStyle}>
				<h3>Rental Info</h3>
				<p
					style={{
						color: "#596780",
					}}
				>
					Please select your rental date
				</p>
				<TransactionFilter title="Pick - Up" locations={["Kota Semarang"]} />
				<TransactionFilter title="Drop - off" locations={["Kota Semarang"]} dates={["21 July 2022"]} times={["01.00"]} />
			</div>
			<div style={sectionStyle}>
				<h3>Payment Method</h3>
				<p
					style={{
						color: "#596780",
					}}
				>
					Please enter your payment method
				</p>
				<PaymentForm />
			</div>
		</div>

</>
	);
};

export default Payment;
