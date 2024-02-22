import React from "react";
import InfoCard from "../Components/carInfoCard/InfoCard";
import { Button, Container, Grid, Typography } from "@mui/material";
import { PhotoCard } from "../Components/cardPhoto/PhotoCard";
import Asidebar from "../Components/asidebar/asidebar";

const Details = () => {
	return (
		
		<Container fixed>
			<Asidebar></Asidebar>
			<Grid container spacing={3}>
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
