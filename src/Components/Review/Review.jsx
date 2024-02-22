import { Avatar, Box, Rating, Stack, Typography } from "@mui/material";
import React from "react";

export default function Review() {
  return (
    <Box>
      <Stack direction={"row"} spacing={2}>
        <Avatar alt="name" sx={{ width: 56, height: 56, fontSize: "3rem" }}>
          AS
        </Avatar>
        <Stack spacing={1}>
          <Stack
            width={"100%"}
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} spacing={3}>
              <Stack spacing={1}>
                <Typography variant="h3">Alex Stanton</Typography>
                <Typography variant="caption">CEO at Bukalapak</Typography>
              </Stack>
            </Stack>
            <Stack spacing={1}>
              <Typography variant="caption">21 July 2022</Typography>
              <Rating name="car-rate" value={3} size="large" />
            </Stack>
          </Stack>
          <Typography variant="body2">
            We are very happy with the service from the MORENT App. Morent has a
            low price and also a large variety of cars with good and comfortable
            facilities. In addition, the service provided by the officers is
            also very friendly and very polite.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
