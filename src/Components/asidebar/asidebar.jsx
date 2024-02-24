import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Checkbox } from "@mui/material";
import { Slider } from "@mui/material";

const Asidebar = () => {
  const [sliderValue, setSliderValue] = React.useState(50);

  const types = [
    { type: "Sport", num: 10 },
    { type: "SUV", num: 12 },
    { type: "MPV", num: 16 },
    { type: "Sedan", num: 20 },
    { type: "Coupe", num: 14 },
    { type: "Hatchback", num: 14 },
  ];

  const capacity = [
    { capacity: 2, num: 10 },
    { capacity: 4, num: 14 },
    { capacity: 2, num: 12 },
    { capacity: 8, num: 16 },
  ];

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };
  return (
    <Box p={4} bgcolor={"white"}>
      <List aria-label="Sidebar">
        <Typography variant="body1" sx={{ marginBottom: "10px" }}>
          Type
        </Typography>
        {types.map((item) => (
          <ListItem sx={{ display: "contents" }}>
            <ListItemButton>
              <Checkbox label="Solid" variant="solid" size="large" />
              <Typography variant="h4">{item.type}</Typography>
              <Typography level="body-sm">({item.num})</Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List aria-label="Sidebar">
        <Typography variant="body1" sx={{ marginBottom: "10px" }}>
          Capacity
        </Typography>
        {capacity.map((item) => (
          <ListItem sx={{ display: "contents" }}>
            <ListItemButton>
              <Checkbox label="Solid" variant="solid" size="large" />
              <Typography variant="h4">{item.capacity} Person</Typography>
              <Typography level="body-sm">({item.num})</Typography>
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
      <Typography variant="h4">Max.{sliderValue} LE</Typography>
    </Box>
  );
};
export default Asidebar;
