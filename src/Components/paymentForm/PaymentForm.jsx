import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import styles from "./payment-form.module.css";

const PaymentForm = () => {
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState(null);
	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = async event => {
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
			const amount = 1000; // replace this with the actual amount

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
		<div className={styles.paymentForm}>
			<form onSubmit={handleSubmit}>
				<CardElement
					className={styles.cardElement}
					id="payment-element"
					options={{
						style: {
							base: {
								lineHeight: "32px",
								fontSize: "24px",
								color: "#000",
								"::placeholder": {
									// color: "#aab7c4",
								},
							},
							invalid: {
								color: "#9e2146",
							},
						},
					}}
				/>
				{message && <div className={styles.paymentMessage}>{message}</div>}
				<button type="submit" disabled={!stripe || loading}>
					{loading ? "Processing..." : "Pay"}
				</button>
			</form>
		</div>
	);
};

export default PaymentForm;
