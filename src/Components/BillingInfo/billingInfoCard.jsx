import { FormControl, FormGroup, FormLabel, Grid, Stack, TextField, Typography } from "@mui/material";
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
				<Grid item xs={6}>
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
									disabled
								/>

								<FormLabel
									sx={{
										fontWeight: "bold",
									}}
								>
									Email
								</FormLabel>
								<TextField
									id="email"
									placeholder="Enter Your Email"
									required
									sx={{
										mt: 2,
										ml: 2,
										mb: 3,
									}}
									value={currentUser.email}
									disabled
								/>
							</FormControl>
						</FormGroup>
					</Stack>
				</Grid>
			</Stack>
		</Stack>
	);
};

export default BillingInfoCard;
