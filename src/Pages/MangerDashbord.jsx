import React from "react";
import RentalDetails from "../Components/rentalDetails/RentalDetails";
import TopRental from "../Components/topRental/TopRental";
import RecentTransactions from "../Components/recentTransaction/RecentTransaction";

const MangerDashbord = () => {
	const style = {
		display: "grid",
		backgroundColor: "var(--clr-smoke-white)",
		gridTemplateColumns: "repeat(2, 1fr)",
		gridTemplateRows: "repeat(2, auto)",
		gridGap: "2.4rem 3.2rem",
		padding: "3.2rem",
	};
	return (
		<div style={style}>
			<RentalDetails />
			<TopRental />
			<RecentTransactions />
		</div>
	);
};

export default MangerDashbord;
