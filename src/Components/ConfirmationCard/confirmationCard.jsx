import { VerifiedUserOutlined } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const ConfirmationCard = () => {
  return (
    <Stack>
      <Typography variant="h3">Confirmation</Typography>
      <Stack direction={"row"} spacing={2} justifyContent="space-between">
        <Typography variant="body2">
          We are getting to the end. Just few clicks and your rental is ready!
        </Typography>
        <Typography variant="body2"> Step 4 of 4</Typography>
      </Stack>
      <Stack>
        <Stack
          direction={"row"}
          spacing={2}
          sx={{
            mt: 2,
            background: "#efefefef",
            borderRadius: "7px",
            padding: "5px",
          }}
        >
          <FormControlLabel
            control={<Checkbox></Checkbox>}
            label=" I agree with sending an Marketing and newsletter emails. No spam,
            promissed"
          ></FormControlLabel>
        </Stack>
        <Stack>
          <Stack
            direction={"row"}
            spacing={2}
            sx={{
              mt: 2,
              background: "#efefefef",
              borderRadius: "7px",
              padding: "5px",
            }}
          >
            <FormControlLabel
              control={<Checkbox></Checkbox>}
              label=" I agree with our terms and conditions and privacy policy."
            ></FormControlLabel>
          </Stack>
        </Stack>
        <Button
          sx={{ width: "100px", marginTop: "20px" }}
          color="primary"
          variant="contained"
        >
          Rent Now
        </Button>
        <Stack direction={"column"} sx={{ mt: 2 }}>
          <VerifiedUserOutlined
            sx={{ fontSize: "30px", color: "primary.main" }}
          />
          <Typography variant="subtitle">All your data are safe</Typography>
          <Typography variant="body2">
            We are using the most advanced security to provide you the best
            experience ever
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ConfirmationCard;
