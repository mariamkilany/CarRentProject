import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const RentalInfopayment = () => {
  const [location, setlocation] = React.useState("");
  const [locationdrop, setlocationdrop] = React.useState("");

  const [date, setdate] = React.useState("");
  const [datedrop, setdatedrop] = React.useState("");

  const [time, settime] = React.useState("");
  const [timedrop, settimedrop] = React.useState("");

  const handleChangeLoc = (event) => {
    setlocation(event.target.value);
  };
  const handleChangeLocdrop = (event) => {
    setlocationdrop(event.target.value);
  };
  const handleChangeDate = (event) => {
    setdate(event.target.value);
  };
  const handleChangeDatedrop = (event) => {
    setdatedrop(event.target.value);
  };
  const handleChangeTime = (event) => {
    settime(event.target.value);
  };
  const handleChangeTimedrop = (event) => {
    settimedrop(event.target.value);
  };

  return (
    <Stack>
      <Typography variant="h2">Rental Info</Typography>
      <Stack direction={"row"} spacing={1} justifyContent="space-between">
        <Typography variant="body2">Please select your rental date</Typography>
        <Typography variant="body2">step 2 of 4</Typography>
      </Stack>
      <Stack spacing={2} sx={{ m: 3 }}>
        <FormControlLabel
          control={<Radio></Radio>}
          label="PickUp"
        ></FormControlLabel>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <FormLabel>Location</FormLabel>
              <Select
                labelId="location-label"
                id="location"
                value={location}
                onChange={handleChangeLoc}
                variant="outlined"
                required
              >
                <MenuItem value={"Location 1"}>Location 1</MenuItem>
                <MenuItem value={"Location 2"}>Location 2</MenuItem>
                <MenuItem value={"Location 3"}>Location 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <FormLabel>Date</FormLabel>
              <Select
                labelId="date-label"
                id="date"
                value={date}
                onChange={handleChangeDate}
                variant="outlined"
              >
                <MenuItem value={"Date 1"}>Date 1</MenuItem>
                <MenuItem value={"Date 2"}>Date 2</MenuItem>
                <MenuItem value={"Date 3"}>Date 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <FormLabel>Time</FormLabel>
              <Select
                labelId="time-label"
                id="time"
                value={time}
                onChange={handleChangeTime}
                variant="outlined"
              >
                <MenuItem value={"Time 1"}>Time 1</MenuItem>
                <MenuItem value={"Time 2"}>Time 2</MenuItem>
                <MenuItem value={"Time 3"}>Time 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Stack>

      <Stack spacing={2} sx={{ m: 4 }}>
        <FormControlLabel
          control={<Radio></Radio>}
          label="Drop Off"
        ></FormControlLabel>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <FormLabel>Location</FormLabel>
              <Select
                labelId="location-label"
                id="location"
                value={locationdrop}
                onChange={handleChangeLocdrop}
                variant="outlined"
                required
              >
                <MenuItem value={"Location 4"}>Location 1</MenuItem>
                <MenuItem value={"Location 5"}>Location 2</MenuItem>
                <MenuItem value={"Location 6"}>Location 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <FormLabel>Date</FormLabel>
              <Select
                labelId="date-label"
                id="date"
                value={datedrop}
                onChange={handleChangeDatedrop}
                variant="outlined"
              >
                <MenuItem value={"Date 4"}>Date 1</MenuItem>
                <MenuItem value={"Date 5"}>Date 2</MenuItem>
                <MenuItem value={"Date 6"}>Date 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <FormLabel>Time</FormLabel>
              <Select
                labelId="time-label"
                id="time"
                value={timedrop}
                onChange={handleChangeTimedrop}
                variant="outlined"
              >
                <MenuItem value={"Time 4"}>Time 1</MenuItem>
                <MenuItem value={"Time 5"}>Time 2</MenuItem>
                <MenuItem value={"Time 6"}>Time 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default RentalInfopayment;
