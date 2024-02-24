import React, { useState } from "react";
import PaymentForm from "../Components/paymentForm/PaymentForm";
import TransactionFilter from "../Components/dashboard_content/transactionFilter/TransactionFilter";
import BillingInfoCard from "../Components/BillingInfo/billingInfoCard";
import { Stack, Typography } from "@mui/material";
import RentalSummaryCard from "../Components/RentalSummary/rentalSummaryCard";

const Payment = () => {
	const sectionStyle = {
		backgroundColor: "var(--clr-white)",
		marginBottom: "50px",
		padding: "3.2rem",
	};

	const [passed, setPassed] = useState(false);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row-reverse",
				alignItems: "flex-start",
				gap: "3.2rem",
				margin: "6rem auto",
				justifyContent: "center",
			}}
		>
			<div style={sectionStyle}>
				<RentalSummaryCard />
			</div>

			<div>
				<div style={sectionStyle}>
					<BillingInfoCard />
				</div>

				<div style={sectionStyle}>
					<h3>Rental Info</h3>
					<Stack direction={"row"} spacing={2} justifyContent="space-between">
						<Typography variant="body2">Please select your rental date</Typography>
						<Typography variant="body2"> Step 2 of 3</Typography>
					</Stack>
					<TransactionFilter title="Pick - Up" locations={["Kota Semarang"]} />
					<TransactionFilter title="Drop - off" locations={["Kota Semarang"]} dates={["21 July 2022"]} times={["01.00"]} />
				</div>

				<div style={sectionStyle}>
					<h3>Payment Method</h3>
					<Stack direction={"row"} spacing={2} justifyContent="space-between">
						<Typography variant="body2">Please enter your payment method</Typography>
						<Typography variant="body2"> Step 3 of 3</Typography>
					</Stack>
					<PaymentForm passed={passed} setPassed={setPassed} />
				</div>
			</div>
		</div>
	);
};

export default Payment;
