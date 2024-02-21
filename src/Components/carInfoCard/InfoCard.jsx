import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, Rating, Stack } from "@mui/material";
import styles from "./info-card.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function InfoCard() {
  return (
    <Box>
      <Card variant="outlined">
        <CardContent>
          <Stack spacing={1} p={2}>
            <Stack>
              <Stack
                direction={"row"}
                sx={{ justifyContent: "space-between", alignItems: "center" }}
              >
                <Typography variant="h1" gutterBottom>
                  Nissan GT - R
                </Typography>
                <Button onMouseOver={() => {}}>
                  <FavoriteBorderIcon className={styles.heart_icon} />
                </Button>
              </Stack>
              <Stack direction={"row"} spacing={2}>
                <Rating name="car-rate" value={3} />
                <Typography variant="caption">440+ Reviewer</Typography>
              </Stack>
            </Stack>
            <Typography variant="body1">
              NISMO has become the embodiment of Nissan's outstanding
              performance, inspired by the most unforgiving proving ground, the
              "race track".
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
        </CardContent>
        <CardActions>
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
        </CardActions>
      </Card>
    </Box>
  );
}
