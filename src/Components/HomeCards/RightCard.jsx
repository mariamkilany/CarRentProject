import React from "react";
import styles from "./right-card.module.css";
import { useTheme } from "@emotion/react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
} from "@mui/material";

export default function RightCard() {
  const theme = useTheme();
  return (
    <Card className={styles.card}>
      <CardContent>
        <Stack p={2} spacing={2}>
          <Typography
            variant={"h1"}
            color={theme.palette.common.smokeWhite}
            gutterBottom
            sx={{ width: { md: "70%" } }}
          >
            Easy way to rent a car at a low price
          </Typography>
          <Typography
            variant="body1"
            color={theme.palette.common.smokeWhite}
            sx={{ width: { md: "60%" } }}
          >
            Providing cheap car rental services and safe and comfortable
            facilities.
          </Typography>
          <Box
            className={styles.card_img_continer}
            sx={{ width: { md: "50%", xs: "80%" } }}
            mt={5}
          >
            <img src="/Images/car-1.png" width={"100%"} height={"100px"} />
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
