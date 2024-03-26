import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./photo-card.module.css";
import { Grid, Stack, useTheme } from "@mui/material";

export function PhotoCard({ car }) {
	const theme = useTheme();
	const [selectedImg, setSelectedImg] = React.useState({
		id: 0,
		src: car?.image,
	});

	return (
		<Stack>
			<Box>
				{selectedImg.id === 0 ? (
					<Card className={styles.card} height={"100%"}>
						<CardContent>
							<Stack p={2}>
								<Typography variant={"h1"} color={theme.palette.common.smokeWhite} gutterBottom>
									Sports car with the best design and acceleration{" "}
								</Typography>
								<Typography variant="body1" color={theme.palette.common.smokeWhite}>
									Safety and comfort while driving a futuristic and elegant sports car
								</Typography>
								<Box className={styles.card_img_continer} mt={5}>
									<img src={car?.image} width={"100%"} />
								</Box>
							</Stack>
						</CardContent>
					</Card>
				) : (
					<img src={selectedImg.src} width={"100%"} height={"100%"} />
				)}
			</Box>
			<Grid container spacing={2} mt={2}>
				{[car?.image, "/images/car-2.png", "/images/car-3.png"].map((src, id) => {
					if (id === 0) {
						return (
							<Grid item xs={4} key={id}>
								<Box
									p={1}
									className={selectedImg.id === id && styles.active_img}
									onClick={e => {
										setSelectedImg({ id, src });
									}}
								>
									<Box p={3} className={`${styles.gallary_item} ${styles.first} `}>
										<img src={src} style={{ marginTop: "30%" }} alt="carImage" width={"100%"} height={50} />
									</Box>
								</Box>
							</Grid>
						);
					} else {
						return (
							<Grid item xs={4} key={id}>
								<Box p={1} className={selectedImg.id === id && styles.active_img} onClick={e => setSelectedImg({ id, src })}>
									<Box className={`${styles.gallary_item}  `}>
										<img src={src} alt="carImage" width={"100%"} height={130} />
									</Box>
								</Box>
							</Grid>
						);
					}
				})}
			</Grid>
		</Stack>
	);
}
