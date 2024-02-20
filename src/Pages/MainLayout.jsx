import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/navbar/Navbar";

const MainLayout = () => {
	return (
		<>
			<Navbar/>
			<Outlet />
		</>
	);
};

export default MainLayout;
