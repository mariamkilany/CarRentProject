import React from "react";
import styles from "./left-card.module.css";
import { useTheme } from "@emotion/react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
  Grid,
} from "@mui/material";
export default function LeftCard() {
  const theme = useTheme();
  return (
    <Card className={styles.card}>
      <CardContent>
        <Stack p={2} spacing={2}>
          <Typography
            variant={"h1"}
            color={theme.palette.common.smokeWhite}
            gutterBottom
            width={320}
          >
            The Best Platform for Car Rental
          </Typography>
          <Typography
            variant="body1"
            width={350}
            color={theme.palette.common.smokeWhite}
          >
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </Typography>
          <Button variant="contained" style={{ width: "120px" }}>
            Rental Car
          </Button>
          <Box
            className={styles.card_img_continer}
            style={{ width: "50%" }}
            mt={5}
          >
            <img src="/Images/car-4.png" width={"100%"} />
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
