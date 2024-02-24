import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";
import { VerifiedUserOutlined } from "@mui/icons-material";

export default function SuccessDialog() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<React.Fragment>
			<Button variant="outlined" onClick={handleClickOpen}>
				Open alert dialog
			</Button>
			<Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
				<DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						<Typography variant="h6" align="center">
							<VerifiedUserOutlined />
						</Typography>
						<Typography variant="h6" align="center">
							Thank you for your purchase!
						</Typography>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} autoFocus>
						Agree
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}
