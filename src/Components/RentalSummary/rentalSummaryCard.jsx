import { Divider, Grid, Rating, Stack, Typography } from "@mui/material";
import React from "react";

const RentalSummaryCard = ({ selectedCar }) => {
	return (
		<Stack>
			<Typography variant="h3">Rental Summary</Typography>
			<Typography variant="body2">
				Prices may change depending on the length of the rental and the price of your rental car.
			</Typography>

			<Stack mt={2}>
				<Grid container spacing={3} sx={{ display: "flex", alignItems: "center" }}>
					<Grid item xs={12} md={3}>
						<img
							src={selectedCar.image}
							alt="Car"
							style={{
								width: "150px",
							}}
						/>
					</Grid>
					<Grid item xs={12} md={8}>
						<Stack spacing={1}>
							<Typography variant="h2" flexDirection={"column"}>
								{selectedCar.name}
							</Typography>
							<Stack direction={"row"} alignItems="center" spacing={2}>
								<Rating name="car-rate" value={3} size="large" />
								<Typography variant="caption">{selectedCar.rating}</Typography>
							</Stack>
						</Stack>
					</Grid>
				</Grid>
			</Stack>

			<Divider orientation="horizontal" sx={{ m: 2 }} />

			<Stack direction={"row"} spacing={38}>
				<Typography variant="h3">Total Rental Price</Typography>

				<Typography sx={{ justifyContent: "space-between" }} variant="h3">
					<strong>{parseFloat(selectedCar.price)}.00 LE</strong>
				</Typography>
			</Stack>
			<Typography variant="body2">Overall price and includes rental discount</Typography>
		</Stack>
	);
};

export default RentalSummaryCard;
