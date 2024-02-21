import * as React from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator, {
  listItemDecoratorClasses,
} from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";

import { Checkbox } from "@mui/material";
import { Slider } from "@mui/joy";

const Asidebar = () => {
 
  return (
    <Box sx={{ py: 2, pr: 2, width: 320 }}>
      <List
        aria-label="Sidebar"
        sx={{
          "--ListItem-paddingLeft": "0px",
          "--ListItemDecorator-size": "64px",
          "--ListItem-minHeight": "0px",
          "--List-nestedInsetStart": "13px",
          [`& .${listItemDecoratorClasses.root}`]: {
            justifyContent: "flex-end",
            pr: "18px",
          },
          '& [role="button"]': {
            borderRadius: "0 20px 20px 0",
          },
          marginLeft: "100px",
        }}
      >
        <Typography variant="p" sx={{ marginBottom: "10px" }}>
          Types
        </Typography>
        <ListItem>
          <ListItemButton>
            <Checkbox label="Solid" variant="solid" defaultChecked />
            <ListItemContent>Sport</ListItemContent>
            <Typography level="body-sm">(10)</Typography>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <Checkbox label="Solid" variant="solid" />
            <ListItemContent>SUV</ListItemContent>
            <Typography level="body-sm">(12)</Typography>
          </ListItemButton>
        </ListItem>
        <ListItem nested>
          <ListItemButton>
            <Checkbox label="Solid" variant="solid"  />
            <ListItemContent>MPV</ListItemContent>
            <Typography level="body-sm">(16)</Typography>
          </ListItemButton>

          <ListItem>
            <ListItemButton>
              <Checkbox label="Solid" variant="solid" defaultChecked />
              <ListItemContent>Sedan</ListItemContent>
              <Typography level="body-sm">(20)</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <Checkbox label="Solid" variant="solid"  />
              <ListItemContent>Coupe</ListItemContent>
              <Typography level="body-sm">(14)</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <Checkbox label="Solid" variant="solid"  />
              <ListItemContent>Hatchback</ListItemContent>
              <Typography level="body-sm" sx={{ marginLeft: "50px" }}>
                (14)
              </Typography>
            </ListItemButton>
          </ListItem>
        </ListItem>
      </List>

      <List
        aria-label="Sidebar"
        sx={{
          "--ListItem-paddingLeft": "0px",

          "--ListItemDecorator-size": "64px",
          "--ListItem-minHeight": "0px",
          "--List-nestedInsetStart": "13px",
          [`& .${listItemDecoratorClasses.root}`]: {
            justifyContent: "flex-end",
            pr: "18px",
          },
          '& [role="button"]': {
            borderRadius: "0 20px 20px 0",
          },
          marginLeft: "100px",
        }}
      >
        <Typography variant="p" sx={{ marginBottom: "10px" }}>
          Capacity
        </Typography>
        <ListItem sx={{ display: "contents" }}>
          <ListItemButton>
            <Checkbox label="Solid" variant="solid" defaultChecked />
            <ListItemContent>2 Person</ListItemContent>
            <Typography level="body-sm">(10)</Typography>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ display: "contents" }}>
          <ListItemButton>
            <Checkbox label="Solid" variant="solid" />
            <ListItemContent>4 Person</ListItemContent>
            <Typography level="body-sm">(12)</Typography>
          </ListItemButton>
        </ListItem>
        <ListItem nested sx={{ display: "contents" }}>
          <ListItemButton>
            <Checkbox label="Solid" variant="solid"  />
            <ListItemContent>6 Person</ListItemContent>
            <Typography level="body-sm">(16)</Typography>
          </ListItemButton>

          <ListItem sx={{ display: "contents" }}>
            <ListItemButton>
              <Checkbox label="Solid" variant="solid"  />
              <ListItemContent>8 or More</ListItemContent>
              <Typography level="body-sm">(20)</Typography>
            </ListItemButton>
          </ListItem>
        </ListItem>
      </List>
      <List
        aria-label="Sidebar"
        sx={{
          "--ListItem-paddingLeft": "0px",

          "--ListItemDecorator-size": "64px",
          "--ListItem-minHeight": "0px",
          "--List-nestedInsetStart": "13px",
          [`& .${listItemDecoratorClasses.root}`]: {
            justifyContent: "flex-end",
            pr: "18px",
          },
          '& [role="button"]': {
            borderRadius: "0 20px 20px 0",
          },
          marginLeft: "100px",
        }}
      >
        <Typography variant="p" sx={{ marginBottom: "5px" }}>
          Price
        </Typography>
        <Slider value={50}></Slider>
        <Typography variant="p" sx={{fontSize:"15px"}}>
        Max. $100.00
        </Typography>
      </List>
    </Box>
  );
};
export default Asidebar;
