import { Box, Button, Card, Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";
import Review from "../Review/Review";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Reviews() {
  const theme = useTheme();
  return (
    <Card sx={{ padding: "25px" }}>
      <Stack spacing={3}>
        <Stack
          direction={"row"}
          spacing={3}
          justifyContent={"left"}
          alignItems={"center"}
        >
          <Typography variant="h3">Reviews</Typography>
          <Button variant="contained">13</Button>
        </Stack>
        <Review />
        <Review />
        <Stack direction={"row"} justifyContent={"center"}>
          <Button>
            Show All{" "}
            <KeyboardArrowDownIcon sx={{ width: "20px", height: "20px" }} />
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
}
