import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Copyrights = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/home">
        Car Rent Project
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyrights;
