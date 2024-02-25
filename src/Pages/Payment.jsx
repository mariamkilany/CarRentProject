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
		flexGrow: 1,
	};

	const selectedCar = {
		name: "Toyota Camry",
		type: "Sedan",
		image: ["https://www.example.com/toyota_camry.jpg", ""],
		id: "1001",
		steering: "Automatic",
		chairCapacity: 5,
		gasoline: 87,
		price: 55000,
		rating: 4.7,
		carDesc: "The Toyota Camry is a reliable and fuel-efficient sedan, known for its comfortable ride and spacious interior.",
		carDetails: "Model Year: 2023, Engine: 2.5L 4-cylinder, Transmission: 8-speed automatic, Fuel Economy: 28 mpg combined",
		reviews: [
			{
				userId: "101",
				userTitle: "Customer",
				reviewText: "I love my Toyota Camry! It's comfortable, reliable, and great on gas.",
				stars: 5,
				userName: "Sarah Johnson",
				userImage: "https://www.example.com/user1.jpg",
				createdAt: "2023-07-20",
			},
		],
		transactions: [
			{
				userId: "101",
				date: 1692486000,
				dropoff: {
					location: {
						latitude: 34.0522,
						longitude: -118.2437,
					},
					date: 1693064400,
				},
				pickUp: {
					location: {
						latitude: 37.7749,
						longitude: -122.4194,
					},
					date: 1692479200,
				},
			},
		],
	};

	const currentUser = {
		name: "Vernon Friesen I",
		avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/940.jpg",
		jobTitle: "Legacy Marketing Orchestrator",
		isAdmin: true,
		password: "_L2K3ylXXGNllxv",
		email: "Hazel_Reynolds20@hotmail.com",
		id: "101",
	};

	const [passed, setPassed] = useState(false);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row-reverse",
				alignItems: "flex-start",
				flexWrap: "wrap",
				gap: "3.2rem",
				margin: "6rem auto",
				padding: "0 3.2rem",
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
					<Stack direction={"row"} spacing={2} justifyContent="space-between">
						<Typography variant="body2">Please select your rental date</Typography>
						<Typography variant="body2"> Step 2 of 3</Typography>
					</Stack>
					<TransactionFilter title="Pick - Up" />
					<TransactionFilter title="Drop - off" />
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
