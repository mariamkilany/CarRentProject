import React from "react";
import DashboardMUI from "../Components/dashboard/dashboardMUI";
import withGuard from "../utils/withGuard";

const Dashboard = () => {
	return <DashboardMUI />;
};

export default withGuard(Dashboard);
