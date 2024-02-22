import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, Rating, Stack } from "@mui/material";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { IconButton } from "@mui/material";

export default function InfoCard() {
  return (
    <Card sx={{ paddingY: "20px" }}>
      <Stack spacing={3} height={"100%"} justifyContent={"center"} paddingX={4}>
        <Stack>
          <Stack
            direction={"row"}
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography variant="h1" gutterBottom>
              Nissan GT - R
            </Typography>
            <IconButton size="large" onMouseOver={() => {}}>
              <FavoriteBorderRoundedIcon fontSize="large" />
            </IconButton>
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <Rating name="car-rate" value={3} size="large" />
            <Typography variant="caption">440+ Reviewer</Typography>
          </Stack>
        </Stack>
        <Stack spacing={2}>
          <Typography variant="body1">
            NISMO has become the embodiment of Nissan's outstanding performance,
            inspired by the most unforgiving proving ground, the "race track".
          </Typography>
          <Grid container spacing={1}>
            <Grid item md={6}>
              <Stack direction={"row"} spacing={5}>
                <Typography variant="subtitle1">Type Car</Typography>
                <Typography variant="subtitle2">Sport</Typography>
              </Stack>
            </Grid>
            <Grid item md={6}>
              <Stack direction={"row"} spacing={5}>
                <Typography variant="subtitle1">Capacity</Typography>
                <Typography variant="subtitle2">2 Person</Typography>
              </Stack>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item md={6}>
              <Stack direction={"row"} spacing={5}>
                <Typography variant="subtitle1">Type Car</Typography>
                <Typography variant="subtitle2">Sport</Typography>
              </Stack>
            </Grid>
            <Grid item md={6}>
              <Stack direction={"row"} spacing={5}>
                <Typography variant="subtitle1">Capacity</Typography>
                <Typography variant="subtitle2">2 Person</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
        <Stack
          p={2}
          direction={"row"}
          width={"100%"}
          justifyContent={"space-between"}
        >
          <Stack>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"end"}
              spacing={1}
            >
              <Typography variant="h2">$80.00/</Typography>
              <Typography variant="caption"> days</Typography>
            </Stack>
            <Typography variant="sale">$100.00</Typography>
          </Stack>
          <Button variant="contained">Rent Now</Button>
        </Stack>
      </Stack>
    </Card>
  );
}
