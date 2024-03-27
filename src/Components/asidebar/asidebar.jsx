import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Checkbox, IconButton } from "@mui/material";
import { Slider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getCarsByTypes } from "../../features/car/carSlice";
import ViewAgendaIcon from "@mui/icons-material/ViewAgenda";

const Asidebar = () => {
  const [sliderValue, setSliderValue] = React.useState(50);
  const [checkedOptions, setCheckedOptions] = React.useState({});
  const [open, setOpen] = React.useState(false);

  const { carsTypes: types, carsCapacity: capacity } = useSelector(
    (state) => state.car
  );
  const dispatch = useDispatch();

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };
  const handleChange = (event) => {
    setCheckedOptions({
      ...checkedOptions,
      [event.target.name]: event.target.checked,
    });
    dispatch(
      getCarsByTypes({
        ...checkedOptions,
        [event.target.name]: event.target.checked,
      })
    );
  };

  return (
    <Box sx={{ display: "flex", gap: "5px", position: "relative", zIndex: 10 }}>
      <Box
        p={4}
        bgcolor={"white"}
        sx={{
          display: "block",
          position: { xs: "absolute", lg: "initial" },
          top: "0",
          height: "100%",
          overflow: "auto",
          transition: "transform 0.3s ease-in-out",
          transform: {
            xs: `translateX(${open ? "0%" : "-100%"})`,
            lg: "translateX(0%)",
          }, // Slide in and out effect
        }}
      >
        <List aria-label="Sidebar">
          <Typography variant="body1">Type</Typography>
          {types.map((type, index) => (
            <ListItem sx={{ display: "contents" }} key={index}>
              <ListItemButton>
                <Checkbox
                  label="Solid"
                  variant="solid"
                  size="large"
                  name={type}
                  onChange={(e) => handleChange(e)}
                />
                <Typography variant="subtitle2">{type}</Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List aria-label="Sidebar">
          <Typography variant="body1" sx={{ marginBottom: "10px" }}>
            Capacity
          </Typography>
          {capacity?.map((capacity, index) => (
            <ListItem sx={{ display: "contents" }} key={index}>
              <ListItemButton>
                <Checkbox label="Solid" variant="solid" size="large" />
                <Typography variant="subtitle2" mr={1}>
                  {capacity} Person
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Slider
          value={sliderValue}
          onChange={handleSliderChange}
          aria-labelledby="sliderValue"
          min={0}
          max={7000}
          step={1}
        />
        <Typography variant="subtitle2" textAlign={"center"}>
          Max.{sliderValue} LE
        </Typography>
      </Box>
      <IconButton
        varient="primary"
        sx={{
          height: "fit-content",
          display: { xs: "block", lg: "none" },
        }}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <ViewAgendaIcon sx={{ fontSize: "30px" }} color="primary" />
      </IconButton>
    </Box>
  );
};

export default Asidebar;
