import React, { useEffect } from "react";
import Asidebar from "../Components/asidebar/asidebar";
import { Container, Grid } from "@mui/material";
import CarCard from "../Components/carCard/CarCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllCarAction } from "../features/car/carActions";

const Category = () => {
	const { filteredCars, loading } = useSelector(store => store.car);
	const dispatch = useDispatch();


  useEffect(() => {
    console.log(filteredCars);
    dispatch(getAllCarAction());
    if (loading) return <div>loading...</div>;
  }, [dispatch]);
  return (
    <Grid
      container
      p={3}
      spacing={3}
      alignContent={"start"}
      justifyContent={"start"}
    >
      {filteredCars.map((car) => (
        <Grid
          item
          md={4}
          sm={6}
          sx={{ height: "fit-content" }}
          justifyContent={"start"}
          key={car.id}
        >
          <CarCard car={car} />
        </Grid>
      ))}
    </Grid>
  );

};

export default Category;
