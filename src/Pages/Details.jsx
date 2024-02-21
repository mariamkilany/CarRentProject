import React from "react";
import InfoCard from "../Components/carInfoCard/InfoCard";
import { Button, Container, Grid, Typography } from "@mui/material";
import { PhotoCard } from "../Components/cardPhoto/PhotoCard";

const Details = () => {
  return (
    <Container fixed>
      <Grid container spacing={3} height={350}>
        <Grid item md={6}>
          <PhotoCard />
        </Grid>
        <Grid item md={6}>
          <InfoCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Details;
