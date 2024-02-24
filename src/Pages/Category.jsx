import React, { useEffect } from "react";
import Asidebar from "../Components/asidebar/asidebar";
import { Container, Grid } from "@mui/material";
import CarCard from "../Components/carCard/CarCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllCarAction } from "../features/car/carActions";

const Category = () => {
  const cars = useSelector((store) => store.car.car);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCarAction());
  }, []);
  return (
    <Grid container p={3} spacing={3} justifyContent={"center"}>
      {cars.map((car) => (
        <Grid item md={4} sm={6}>
          <CarCard car={car} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Category;
