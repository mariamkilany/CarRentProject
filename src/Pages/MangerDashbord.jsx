import React from "react";
import RentalDetails from "../Components/rentalDetails/RentalDetails";
import TopRental from "../Components/topRental/TopRental";
import RecentTransactions from "../Components/recentTransaction/RecentTransaction";

const MangerDashbord = () => {
	const style = {
		display: "flex",
		flexWrap: "wrap",
		gap: "2.4rem 3.2rem",
		padding: "3.2rem",
	};
	return (
		<div style={style}>
			<RentalDetails />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					flexGrow: 1,
					flexShrink: 1,
					gap: "2.4rem",
				}}
			>
				<TopRental />
				<RecentTransactions />
			</div>
		</div>
	);
};

export default MangerDashbord;
