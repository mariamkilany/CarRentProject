import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { IconButton, ListItemText, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";

const Footer = () => {
  const mystyle = { textAlign: "left", fontSize: "15px" };
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <Box>
        <Grid container p={3}>
          <Grid xs={12} md={6}>
            <ListItemText>
              <Typography variant="h3" sx={{ color: "#3563E9" }}>
                <b> MORENT</b>
              </Typography>
              <Typography variant="p" sx={{ fontSize: "15px" }}>
                Our vision is to provide convenience and help increase your
                sales business.
              </Typography>
            </ListItemText>
          </Grid>
          <Grid
            md={6}
            xs={12}
            container
            justifyContent="space-between"
            alignItems="center"
            flexDirection={{ xs: "column", sm: "row" }}
            sx={{ fontSize: "12px" }}
          >
            <Stack
              direction={"row"}
              justifyContent={"right"}
              gap={1}
              width={"100%"}
            >
              <IconButton>
                <FacebookIcon sx={{ fontSize: "35px" }} color="primary" />
              </IconButton>
              <IconButton>
                <LinkedInIcon sx={{ fontSize: "35px" }} color="primary" />
              </IconButton>
              <IconButton>
                <GoogleIcon sx={{ fontSize: "35px" }} color="primary" />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Footer;
