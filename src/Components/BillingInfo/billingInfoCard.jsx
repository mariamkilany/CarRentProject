import { Palette } from "@mui/icons-material";
import {
  Box,
  FormControl,
  FormGroup,
  FormLabel,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const BillingInfoCard = () => {
  return (
    <Stack>
      <Typography variant="h2">Billing Info</Typography>
      <Stack direction={"row"} sx={{justifyContent:"space-between"}}>
        <Typography variant="body2">Please enter your billing info</Typography>
        <Typography variant="body2"> step 1 of 4</Typography>
      </Stack>
      <Stack sx={{ m: 3 }}>
        <Grid container spacing={2}>
          {/* Use Grid container */}
          <Grid item xs={6}>
            {/* First column */}
            <Stack>
              <FormGroup>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <TextField
                    id="name"
                    // label="Your name"
                    placeholder="your name"
                    // variant="outlined"
                    required
                  />
                  <FormLabel>Phone Number</FormLabel>
                  <TextField
                    id="phone"
                    placeholder="Enter Your Phone"
                    required
                  />
                </FormControl>
              </FormGroup>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            {/* Second column */}
            <Stack>
              <FormGroup>
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <TextField id="address" placeholder="Address" required />
                </FormControl>
              </FormGroup>
              <FormGroup>
                <FormControl>
                  <FormLabel>Town/City</FormLabel>
                  <TextField id="city" placeholder="Town or city" required />
                </FormControl>
              </FormGroup>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
};

export default BillingInfoCard;
