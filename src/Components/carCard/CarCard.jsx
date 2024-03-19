import React from "react";
import { Box, Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import LocalGasStationRoundedIcon from "@mui/icons-material/LocalGasStationRounded";
import DataSaverOffRoundedIcon from "@mui/icons-material/DataSaverOffRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import { useNavigate } from "react-router-dom";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { useDispatch, useSelector } from "react-redux";
import { getAllCarAction } from "../../features/car/carActions";
export default function CarCard({ car }){
  const theme = useTheme();
  const iconStyle = { color: "var(--clr-g-300)" };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToWishList = () => {
    var oldItems = JSON.parse(localStorage.getItem("favs")) || [];
    if (!isFav(oldItems)) oldItems.push(car);
    else {
      oldItems = oldItems.filter((ele) => ele.id !== car.id);
    }
    localStorage.setItem("favs", JSON.stringify(oldItems));
    dispatch(getAllCarAction());
  };

  const isFav = (arr) => {
    return arr?.find((ele) => ele.id === car.id);
  };

  return (
    <Box
      onClick={() => {
        navigate(`/category/${car.id}`);
      }}
      component="div"
      borderRadius={2}
      p={2}
      bgcolor={theme.palette.common.white}
      boxShadow={2}
      sx={{ cursor: "pointer" }}
    >
      <Stack spacing={3} justifyContent={"center"}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack>
            <Typography varient="h3">{car.name}</Typography>
            <Typography variant="caption">{car.type}</Typography>
          </Stack>
          <IconButton
            size="large"
            onClick={(e) => {
              e.stopPropagation();
              handleAddToWishList();
            }}
          >
            {!isFav(JSON.parse(localStorage.getItem("favs"))) ? (
              <FavoriteBorderRoundedIcon fontSize="large" />
            ) : (
              <FavoriteRoundedIcon fontSize="large" color="error" />
            )}
          </IconButton>
        </Stack>
        <Stack justifyContent={"center"} alignItems={"center"}>
          <img src={car.image} width={"85%"} />
        </Stack>
        <Grid container justifyContent={"space-between"}>
          <Grid md={4}>
            <Stack component={"div"} direction={"row"} spacing={1}>
              <LocalGasStationRoundedIcon fontSize="large" style={iconStyle} />
              <Typography variant="caption">{car.gasoline}L</Typography>
            </Stack>
          </Grid>
          <Grid md={4}>
            <Stack component={"div"} direction={"row"} spacing={1}>
              <DataSaverOffRoundedIcon fontSize="large" style={iconStyle} />
              <Typography variant="caption">{car.steering}</Typography>
            </Stack>
          </Grid>
          <Grid md={4}>
            <Stack component={"div"} direction={"row"} spacing={1}>
              <GroupRoundedIcon fontSize="large" style={iconStyle} />
              <Typography variant="caption">
                {car.chairCapacity} People
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"end"}
            >
              <Typography variant="h3">${car.price}/ </Typography>
              <Typography variant="caption">day</Typography>
            </Stack>
            <Typography variant="sale">$80.00</Typography>
          </Stack>
          <Button
            variant="contained"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/payment`, { state: { car: car } });
            }}
          >
            Rent Now
          </Button>
        </Stack>
      </Stack>
    </Box>
  )}
