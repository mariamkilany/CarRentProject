import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/navbar/Navbar";
import Footer from "../Components/footer/Footer";
import Asidebar from "../Components/asidebar/asidebar";

const MainLayout = () => {
	return (
		<>
			<Navbar />

			<Outlet />
			<Footer />
		</>
	);
};

export default MainLayout;
