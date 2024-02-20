import React from "react";
import RecentTransactions from "../Components/recentTransaction/RecentTransaction";
import RentalDetails from "../Components/rentalDetails/RentalDetails";
import TopRental from "../Components/topRental/TopRental";

const Dashboard = () => {
	const style = {
		display: "grid",
		backgroundColor: "var(--clr-smoke-white)",
		gridTemplateColumns: "repeat(2, 1fr)",
		gridTemplateRows: "repeat(2, auto)",
		gridGap: "2.4rem 3.2rem",
		padding: "3.2rem",
		margin: "10px 0 0 318px",
	};

	return (
		<div style={style}>
			<RentalDetails />
			<TopRental />
			<RecentTransactions />
		</div>
	);
};

export default Dashboard;
