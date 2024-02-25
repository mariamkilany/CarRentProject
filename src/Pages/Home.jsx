import { Button, Grid, Link, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import RightCard from "../Components/HomeCards/RightCard";
import LeftCard from "../Components/HomeCards/LeftCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllCarAction, getCarsTypes } from "../features/car/carActions";
import CardCard from "../Components/carCard/CarCard";

const Home = () => {
	const { car, loading } = useSelector(store => store.car);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllCarAction());
	}, [dispatch]);

	return (
		<Grid container p={3} justifyContent={"center"} spacing={3}>
			<Grid item md={6}>
				<LeftCard />
			</Grid>
			<Grid item md={6}>
				<RightCard />
			</Grid>
			<Grid item xs={12}>
				<Stack direction={"row"} justifyContent={"space-between"}>
					<Typography variant="body2">Popular Car</Typography>
					<Link>View All</Link>
				</Stack>
				<Grid container mt={2} spacing={3} justifyContent={"center"}>
					{car?.map(car => (
						<Grid item md={3} sm={6}>
							<CardCard car={car} />
						</Grid>
					))}
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<Stack direction={"row"} justifyContent={"space-between"}>
					<Typography variant="body2">Recommended Car</Typography>
					<Link>View All</Link>
				</Stack>
				<Grid container mt={2} spacing={3} justifyContent={"center"}></Grid>
			</Grid>
			<Stack alignItems={"center"} mt={5}>
				<Button variant="contained">Show more car</Button>
			</Stack>
		</Grid>
	);
};

export default Home;
