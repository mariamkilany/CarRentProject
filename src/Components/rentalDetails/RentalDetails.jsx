import React from "react";
import styles from "./rentalDetails.module.css";
import Map from "../dashboard_content/map/Map";
import TransactionFilter from "../dashboard_content/transactionFilter/TransactionFilter";

const RentalDetails = ({ selectedCar }) => {
	return (
		<>
			{selectedCar && (
				<div className={`parent-section ${styles.parent}`}>
					<h3 className="section-title">Details Rental</h3>
					<div className={styles.map}>
						<Map
							dropOffLocation={selectedCar.transactions[0].dropoff.location}
							pickUpLocation={selectedCar.transactions[0].pickUp.location}
						/>
					</div>
					<div className={styles.details}>
						<div className={styles.carDetails}>
							<img
								src={
									selectedCar.image ||
									"https://images.unsplash.com/photo-1557683324-673b6d3a3b5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1"
								}
								alt="car"
							/>
							<div>
								<h3 className={styles.carName}>{selectedCar.name}</h3>
								<p className={styles.carType}>{selectedCar.type}</p>
							</div>
							<span>#9761</span>
						</div>
						<div className={styles.locationDetails}>
							<TransactionFilter
								title="Pick - Up"
								locations={["Kota Semarang"]}
								date={new Date(selectedCar.transactions[0].pickUp.date)}
							/>
							<TransactionFilter title="Drop - off" locations={["Kota Semarang"]} dates={["21 July 2022"]} times={["01.00"]} />
						</div>
						<div className={styles.priceDetails}>
							<div className={styles.priceInfo}>
								<h3 className={styles.priceTitle}>Total Rental Price</h3>
								<p className={styles.priceNote}>Overall price and includes rental discount</p>
							</div>
							<p className={styles.price}>$ {selectedCar.price}</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default RentalDetails;
