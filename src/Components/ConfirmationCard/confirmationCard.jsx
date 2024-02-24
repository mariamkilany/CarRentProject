import { VerifiedUserOutlined } from "@mui/icons-material";
import { Button, Checkbox, FormControlLabel, Stack, Typography } from "@mui/material";
import React from "react";

const ConfirmationCard = ({ passed, setPassed }) => {
	return (
		<div>
			<Stack spacing={2}>
				<Typography variant="h2" align="center">
					<VerifiedUserOutlined sx={{ color: "primary.main	" }} />
				</Typography>
				<Typography variant="h2" align="center">
					Thank you for your purchase!
				</Typography>
			</Stack>
		</div>
	);
};

export default ConfirmationCard;
