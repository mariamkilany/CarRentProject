import React, { useEffect } from "react";
import Asidebar from "../Components/asidebar/asidebar";
import { Container, Grid } from "@mui/material";
import CarCard from "../Components/carCard/CarCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllCarAction } from "../features/car/carActions";

const Category = () => {
  const { filteredCars, loading } = useSelector((store) => store.car);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCarAction());
  }, []);
  if (loading) return <div>loading...</div>;
  return (
    <Grid container p={3} spacing={3} justifyContent={"center"}>
      {filteredCars.map((car) => (
        <Grid item md={4} sm={6}>
          <CarCard car={car} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Category;
