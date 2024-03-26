import { Box, Button, Card, Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";
import Review from "../Review/Review";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Reviews({ car }) {
	const theme = useTheme();
	console.log(car);
	return (
		<Card sx={{ padding: "25px" }}>
			<Stack spacing={3}>
				<Stack direction={"row"} spacing={3} justifyContent={"left"} alignItems={"center"}>
					<Typography variant="h3">Reviews</Typography>
					<Button variant="contained">{car?.reviews.length}</Button>
				</Stack>
				{car?.reviews.map((reviewText, index) => (
					<Review reviewText={reviewText} key={index} />
				))}
			</Stack>
		</Card>
	);
}
