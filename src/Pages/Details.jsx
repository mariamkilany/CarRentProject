import React from "react";
import InfoCard from "../Components/carInfoCard/InfoCard";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { PhotoCard } from "../Components/cardPhoto/PhotoCard";
import Reviews from "../Components/Reviews/Reviews";

const Details = () => {
  return (
    <Stack gap={2} p={4}>
      <Grid container spacing={3} justifyContent={"center"}>
        <Grid item md={6}>
          <PhotoCard />
        </Grid>
        <Grid item md={6} sx={{ display: "flex", alignItems: "stretch" }}>
          <InfoCard />
        </Grid>
      </Grid>
      <Reviews />
    </Stack>
  );
};

export default Details;
