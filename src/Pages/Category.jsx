import React from "react";
import Asidebar from "../Components/asidebar/asidebar";
import { Container } from "@mui/material";
import CarCard from "../Components/carCard/CarCard";
import CloudinaryButton from "../Components/cloudinaryButton/CloudinaryButton";

const Category = () => {
  return (
    <Container>
      <CarCard />
      <CloudinaryButton />
    </Container>
  );
};

export default Category;
