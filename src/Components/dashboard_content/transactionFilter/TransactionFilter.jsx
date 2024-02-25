import React from "react";
import styles from "./transaction-filter.module.css";
import { GEOS } from "../../../config";

const TransactionFilter = ({ title = "Transaction Details", locations = GEOS.map(geo => geo.name), date }) => {
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
					{date ? (
						<input type="date" name="date" id="date" value={new Date(date).toISOString().split("T")[0]} />
					) : (
						<input type="date" name="date" id="date" />
					)}
				</div>

				<div className={styles.selected}>
					<p>Time</p>
					{date ? (
						<input
							type="time"
							name="time"
							id="time"
							value={new Date(date).getHours() + ":" + new Date(date).getMinutes() + ":" + new Date(date).getSeconds()}
						/>
					) : (
						<input type="time" name="time" id="time" />
					)}
				</div>
			</div>
		</div>
	);
};

export default TransactionFilter;
