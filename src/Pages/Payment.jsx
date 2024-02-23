import React from "react";
import PaymentForm from "../Components/paymentForm/PaymentForm";
import TransactionFilter from "../Components/dashboard_content/transactionFilter/TransactionFilter";

const Payment = () => {
	const sectionStyle = {
		backgroundColor: "var(--clr-white)",
		marginBottom: "50px",
		padding: "3.2rem",
	};

	return (
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
	);
};

export default Payment;
