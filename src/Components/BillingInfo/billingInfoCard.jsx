import { Palette } from "@mui/icons-material";
import { Box, FormControl, FormGroup, FormLabel, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const BillingInfoCard = ({ currentUser }) => {
	return (
		<Stack>
			<Typography variant="h2">Billing Info</Typography>
			<Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
				<Typography variant="body2">Please enter your billing info</Typography>
				<Typography variant="body2"> step 1 of 3</Typography>
			</Stack>
			<Stack sx={{ m: 3 }}>
				<Grid container spacing={2}>
					{/* Use Grid container */}
					<Grid item xs={6}>
						{/* First column */}
						<Stack>
							<FormGroup>
								<FormControl>
									<FormLabel
										sx={{
											fontWeight: "bold",
										}}
									>
										Name
									</FormLabel>
									<TextField
										id="name"
										placeholder="your name"
										required
										sx={{
											mt: 2,
											ml: 2,
											mb: 3,
										}}
										value={currentUser.name}
									/>
									<FormLabel
										sx={{
											fontWeight: "bold",
										}}
									>
										Phone Number
									</FormLabel>
									<TextField
										id="phone"
										placeholder="Enter Your Phone"
										required
										sx={{
											mt: 2,
											ml: 2,
											mb: 3,
										}}
										value={currentUser.phone}
									/>
								</FormControl>
							</FormGroup>
						</Stack>
					</Grid>
					<Grid item xs={6}>
						{/* Second column */}
						<Stack>
							<FormGroup>
								<FormControl>
									<FormLabel
										sx={{
											fontWeight: "bold",
										}}
									>
										Address
									</FormLabel>
									<TextField
										id="address"
										placeholder="Address"
										required
										sx={{
											mt: 2,
											ml: 2,
											mb: 3,
										}}
									/>
								</FormControl>
							</FormGroup>
							<FormGroup>
								<FormControl>
									<FormLabel
										sx={{
											fontWeight: "bold",
										}}
									>
										Town/City
									</FormLabel>
									<TextField
										id="city"
										placeholder="Town or city"
										required
										sx={{
											mt: 2,
											ml: 2,
											mb: 3,
										}}
									/>
								</FormControl>
							</FormGroup>
						</Stack>
					</Grid>
				</Grid>
			</Stack>
		</Stack>
	);
};

export default BillingInfoCard;
