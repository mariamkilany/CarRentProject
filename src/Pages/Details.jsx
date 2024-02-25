import React, { useEffect, useState } from "react";
import InfoCard from "../Components/carInfoCard/InfoCard";
import { Grid, Stack } from "@mui/material";
import { PhotoCard } from "../Components/cardPhoto/PhotoCard";
import Reviews from "../Components/Reviews/Reviews";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCarById } from "../features/car/carActions";
import axios from "axios";

const Details = () => {
  const [car, setCar] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://65d24788987977636bfc333b.mockapi.io/api/cars/${id}`)
      .then((res) => {
        setCar(res.data);
        // console.log(res.data);
      });
  }, []);
  if (!car) <div>loading....</div>;
  return (
    <Stack gap={2} p={4}>
      <Grid container spacing={3} justifyContent={"center"}>
        <Grid item md={6}>
          <PhotoCard car={car} />
        </Grid>
        <Grid item md={6} sx={{ display: "flex", alignItems: "stretch" }}>
          <InfoCard car={car} />
        </Grid>
      </Grid>
      <Reviews car={car} />
    </Stack>
  );
};

export default Details;
