import React from "react";
import styles from "./transaction-filter.module.css";

const TransactionFilter = ({ title = "Transaction Details", locations = [], date = new Date() }) => {
	const selectedDate = date.toDateString();
	const selectedTime = date.toLocaleTimeString();
	return (
		<div className={styles.transactionLocation}>
			<h3 className={styles.title}>{title}</h3>
			<div className={styles.details}>
				<div className={styles.selected}>
					<p>Locations</p>
					<select name="location" id="location">
						{locations.map(location => (
							<option value={location}>{location}</option>
						))}
					</select>
				</div>
				<div className={styles.selected}>
					<p>Date</p>
					<select name="date" id="date">
						<option value={selectedDate}>{selectedDate}</option>
					</select>
				</div>
				<div className={styles.selected}>
					<p className={styles.name}>Time</p>
					<select name="time" id="time">
						<option value={selectedTime}>{selectedTime}</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default TransactionFilter;
