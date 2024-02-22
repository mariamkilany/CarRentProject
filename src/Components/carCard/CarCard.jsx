import React from "react";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import LocalGasStationRoundedIcon from "@mui/icons-material/LocalGasStationRounded";
import DataSaverOffRoundedIcon from "@mui/icons-material/DataSaverOffRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
export default function CarCard() {
  const theme = useTheme();
  const iconStyle = { color: "var(--clr-g-300)" };
  return (
    <Box
      component="div"
      borderRadius={2}
      p={2}
      bgcolor={theme.palette.common.white}
      maxWidth={300}
      boxShadow={2}
    >
      <Stack spacing={3} justifyContent={"center"}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack>
            <Typography varient="h3">Koenigsegg</Typography>
            <Typography variant="caption">Sport</Typography>
          </Stack>
          <IconButton size="large">
            <FavoriteBorderRoundedIcon fontSize="large" />
          </IconButton>
        </Stack>
        <Stack justifyContent={"center"} alignItems={"center"}>
          <img src="images/car-1.png" width={"85%"} />
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          spacing={2}
          alignItems={"center"}
        >
          <Stack component={"div"} direction={"row"} spacing={1}>
            <LocalGasStationRoundedIcon fontSize="large" style={iconStyle} />
            <Typography variant="caption">90L</Typography>
          </Stack>
          <Stack component={"div"} direction={"row"} spacing={1}>
            <DataSaverOffRoundedIcon fontSize="large" style={iconStyle} />
            <Typography variant="caption">Manual</Typography>
          </Stack>
          <Stack component={"div"} direction={"row"} spacing={1}>
            <GroupRoundedIcon fontSize="large" style={iconStyle} />
            <Typography variant="caption">2 People</Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"end"}
            >
              <Typography variant="h3">$72.00/ </Typography>
              <Typography variant="caption">day</Typography>
            </Stack>
            <Typography variant="sale">$80.00</Typography>
          </Stack>
          <Button variant="contained">Rent Now</Button>
        </Stack>
      </Stack>
    </Box>
  );
}
