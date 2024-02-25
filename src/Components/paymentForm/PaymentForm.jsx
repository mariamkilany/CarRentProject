import React from "react";
import { CardElement } from "@stripe/react-stripe-js";
import styles from "./payment-form.module.css";
import { Alert, Checkbox, FormControlLabel } from "@mui/material";

const PaymentForm = ({ passed, setPassed, onSubmitPayment, message, loading, stripe }) => {
	return (
		<div className={styles.paymentForm}>
			<form onSubmit={onSubmitPayment}>
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
				<FormControlLabel
					control={<Checkbox checked={passed} onChange={e => setPassed(e.target.checked)} color="primary" />}
					label="I have read and agree to the terms and conditions."
				/>
				{message && <Alert severity={message === "Payment successful!" ? "success" : "error"}>{message}</Alert>}
				<button className={styles.payButton} type="submit" disabled={!stripe || loading || !passed}>
					{loading ? "Loading..." : "Pay"}
				</button>
			</form>
		</div>
	);
};

export default PaymentForm;
