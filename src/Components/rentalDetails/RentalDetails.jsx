import React from "react";
import styles from "./rentalDetails.module.css";
import Map from "../dashboard_content/map/Map";
import TransactionFilter from "../dashboard_content/transactionFilter/TransactionFilter";

const RentalDetails = () => {
	return (
		<div className={`parent-section ${styles.parent}`}>
			<h3 className="section-title">Details Rental</h3>
			<div className={styles.map}>
				<Map />
			</div>
			<div className={styles.details}>
				<div className={styles.carDetails}>
					<img
						src="https://s3-alpha-sig.figma.com/img/702f/356e/48fe531e6fd2626c5d1041dbfcde3341?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iBG8Tj2GfPvHdXns~duEdI5FEFbdsughN0a7HnD1H1ztKSy8dVBBgQ1zHw3BqlNCouxR06745iQa3nGWcOKIwKR-QSM3mzcy7i6LP04EkvlMwiGUtF-MLr3vGnI9A~h6K0GxhZcDBd2W4ro8TKH~mPdeAZ55SHmMmzKr~DDE~L2zJpr0lMmPihH19GRLwE8q8rwhT8hIrGBDpmSNFzc7TZgEG7M0kj5rB8v3TGDxOYc7eRqb30TF9nAll4RPXes6apJhAKCH8XoG4i6p~PnvLGpVtgTW3S8B73z34PAkxYa8ZOB0DpDP8uKPse5jcwVFdqd7ImtlPORC20s4Zxm7qQ__"
						alt="car"
					/>
					<div>
						<h3 className={styles.carName}>Nissan GT - R</h3>
						<p className={styles.carType}>Sport Car</p>
					</div>
					<span>#9761</span>
				</div>
				<div className={styles.locationDetails}>
					<TransactionFilter title="Pick - Up" locations={["Kota Semarang"]} dates={["20 July 2022"]} times={["07.00"]} />
					<TransactionFilter title="Drop - off" locations={["Kota Semarang"]} dates={["21 July 2022"]} times={["01.00"]} />
				</div>
				<div className={styles.priceDetails}>
					<div className={styles.priceInfo}>
						<h3 className={styles.priceTitle}>Total Rental Price</h3>
						<p className={styles.priceNote}>Overall price and includes rental discount</p>
					</div>
					<p className={styles.price}>$80.00</p>
				</div>
			</div>
		</div>
	);
};

export default RentalDetails;
