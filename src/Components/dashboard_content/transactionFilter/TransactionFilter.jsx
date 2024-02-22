import React from "react";
import styles from "./transaction-filter.module.css";

const TransactionFilter = ({ title, locations, dates, times }) => {
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
						{dates.map(date => (
							<option value={date}>{date}</option>
						))}
					</select>
				</div>
				<div className={styles.selected}>
					<p className={styles.name}>Time</p>
					<select name="time" id="time">
						{times.map(time => (
							<option value={time}>{time}</option>
						))}
					</select>
				</div>
			</div>
		</div>
	);
};

export default TransactionFilter;
