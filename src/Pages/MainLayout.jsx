import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/navbar/Navbar";
import Footer from "../Components/footer/Footer";
import Asidebar from "../Components/asidebar/asidebar";
import { Container } from "@mui/material";
import NavbarAdmin from "../Components/navbar/NavbarAdmin";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: " var(--clr-smoke-white)" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
