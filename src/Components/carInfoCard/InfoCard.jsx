import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, Rating, Stack } from "@mui/material";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function InfoCard({ car }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ paddingY: "20px" }}>
      <Stack spacing={3} height={"100%"} justifyContent={"center"} paddingX={4}>
        <Stack>
          <Stack
            direction={"row"}
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography variant="h1" gutterBottom>
              {car?.name}
            </Typography>
            <IconButton size="large" onMouseOver={() => {}}>
              <FavoriteBorderRoundedIcon fontSize="large" />
            </IconButton>
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <Rating name="car-rate" value={car?.rating} size="large" />
            <Typography variant="caption">
              {car?.reviews.length}+ Reviewer
            </Typography>
          </Stack>
        </Stack>
        <Stack spacing={2}>
          <Typography variant="body1">{car?.carDetails}</Typography>
          <Grid container spacing={1}>
            <Grid item md={6}>
              <Stack direction={"row"} spacing={5}>
                <Typography variant="subtitle1">Type Car</Typography>
                <Typography variant="subtitle2">{car?.type}</Typography>
              </Stack>
            </Grid>
            <Grid item md={6}>
              <Stack direction={"row"} spacing={5}>
                <Typography variant="subtitle1">Capacity</Typography>
                <Typography variant="subtitle2">
                  {car?.chairCapacity} Person
                </Typography>
              </Stack>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item md={6}>
              <Stack direction={"row"} spacing={5}>
                <Typography variant="subtitle1">Steering</Typography>
                <Typography variant="subtitle2">{car?.steering}</Typography>
              </Stack>
            </Grid>
            <Grid item md={6}>
              <Stack direction={"row"} spacing={5}>
                <Typography variant="subtitle1">Gasoline</Typography>
                <Typography variant="subtitle2">{car?.gasoline} L</Typography>
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
              <Typography variant="h2">${car?.price}/</Typography>
              <Typography variant="caption"> days</Typography>
            </Stack>
            <Typography variant="sale">$100.00</Typography>
          </Stack>
          <Button
            variant="contained"
            onClick={() => {
              navigate(`/payment/${car?.id}`);
            }}
          >
            Rent Now
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
}
