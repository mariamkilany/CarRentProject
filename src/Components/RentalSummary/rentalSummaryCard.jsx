import { Box, Divider, Grid, Rating, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

const RentalSummaryCard = () => {
	const [subtotal, setsubtotal] = useState(80);
	const [Tax, setTax] = useState(0);
	const [Total, setTotal] = useState(80);

	const handleChangeSubtotal = (event, newValue) => {
		setsubtotal(newValue);
	};
	const handleChangeTax = (event, newValue) => {
		setTax(newValue);
	};
	const handleChangeTotal = (event, newValue) => {
		setTax(newValue => subtotal + Tax);
	};

	return (
		<Stack>
			<Typography variant="h3">Rental Summary</Typography>
			<Typography variant="body2">
				Prices may change depending on the length of the rental and the price of your rental car.
			</Typography>

			<Stack mt={2}>
				<Grid container spacing={3} sx={{ display: "flex", alignItems: "center" }}>
					<Grid item xs={12} md={4}>
						{/* Column for the image */}
						{/* <Stack sx={{ height: "300px" }}> */}
						<img
							src="images/Look.png"
							alt="Car"
							style={{
								width: "150px",
							}}
						/>
						{/* </Stack> */}
					</Grid>
					<Grid item xs={12} md={8}>
						{/* Column for text */}
						<Stack spacing={1}>
							<Typography variant="h2" flexDirection={"column"}>
								Nissan GT - R
							</Typography>
							<Stack direction={"row"} alignItems="center" spacing={2}>
								<Rating name="car-rate" value={3} size="large" />
								<Typography variant="caption">440+ Reviewer</Typography>
							</Stack>
						</Stack>
					</Grid>
				</Grid>
			</Stack>

			<Divider orientation="horizontal" sx={{ m: 2 }} />
			<Stack direction={"row"} spacing={49}>
				<Typography variant="subtitle2">Subtotal</Typography>
				<Typography sx={{ justifyContent: "space-between" }} variant="subtitle2">
					${parseFloat(subtotal)}.00
				</Typography>
			</Stack>
			<Stack direction={"row"} spacing={55}>
				<Typography variant="subtitle2">Tax</Typography>
				<Typography sx={{ justifyContent: "space-between" }} variant="subtitle2">
					${parseFloat(Tax)}.00
				</Typography>
			</Stack>
			<Stack direction={"row"} spacing={38}>
				<Typography variant="h3">Total Rental Price</Typography>

				<Typography sx={{ justifyContent: "space-between" }} variant="h3">
					<strong>${parseFloat(Total)}.00</strong>
				</Typography>
			</Stack>
			<Typography variant="body2">Overall price and includes rental discount</Typography>
		</Stack>
	);
};

export default RentalSummaryCard;
