import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import { LogoutOutlined } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from "@emotion/react";
import { Badge, Typography } from '@mui/material';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';

export const MainListItems =()=>{ 
  const theme = useTheme();
  const location = useLocation();

  return(
  <>
      <React.Fragment>
      <ListItemButton
      sx={{
        flexDirection: "row",
        color: location.pathname === "/dashboard" ? "var(--clr-m)" : "white",
        bgcolor: location.pathname === "/dashboard" ? "var(--clr-m)" : "white",
        "&:hover": {
          color: "white",
          bgcolor: "var(--clr-m)",
          "& .MuiBadge-root, & .MuiTypography-root": {
            color: "white",
          },
        },
      }}
      >
      <Link to='/dashboard' style={{display:"contents"}} > 
            <Badge
                sx={{
                  width: "56px",
                  color: location.pathname === "/dashboard" ? "white" : "var(--clr-m)",
                  
                }}
              >
            <DashboardIcon sx={{fontSize:"2rem"}} />
            </Badge>
            <Typography
            
              sx={{
               color: location.pathname === "/dashboard" ? "white" : "var(--clr-m)" , fontSize:"1.7rem"
              }}
          >
             Dashboard
            </Typography>
      </Link>
    </ListItemButton>

    <ListItemButton
      sx={{
        flexDirection: "row",
        color: location.pathname === "/dashboard/cars" ? "var(--clr-m)" : "white",
        bgcolor: location.pathname === "/dashboard/cars" ? "var(--clr-m)" : "white",
        "&:hover": {
          color: "white",
          bgcolor: "var(--clr-m)",
          "& .MuiBadge-root, & .MuiTypography-root": {
            color: "white",
          },
        },
      }}
      >

      <Link to="cars" style={{display:"contents"}}>
        <Badge  sx={{width:"56px",color:"var(  --clr-m-800)",
            color: location.pathname === "/dashboard/cars" ? "white" : "var(--clr-m)",
          }}>
            <DirectionsCarFilledOutlinedIcon  sx={{fontSize:"2rem"}} />
          </Badge>
          <Typography 
          sx={{
            color: location.pathname === "/dashboard/cars" ? "white" : "var(--clr-m)", fontSize:"1.7rem"
          }}
          > Cars </Typography>
      </Link>
  
    </ListItemButton>
    <ListItemButton
      sx={{
        flexDirection: "row",
        color: location.pathname === "dashboard/customers" ? "var(--clr-m)" : "white",
        bgcolor: location.pathname === "dashboard/customers" ? "var(--clr-m)" : "white",
        "&:hover": {
          color: "white",
          bgcolor: "var(--clr-m)",
          "& .MuiBadge-root, & .MuiTypography-root": {
            color: "white",
          },
        },
      }}
      >
     <Link to="customers" style={{display:"contents"}}>
      <Badge sx={{width:"56px",color:"var(  --clr-m-800)",
        color: location.pathname === "dashboard/customers" ? "white" : "var(--clr-m)",
      }}>
          <PeopleIcon  sx={{fontSize:"2rem"}} />
        </Badge>
        <Typography  
        sx={{
          color: location.pathname === "dashboard/customers" ? "white" : "var(--clr-m)" , fontSize:"1.7rem"
        }}
        > Customers </Typography>

     </Link>
    </ListItemButton>
    <ListItemButton
      sx={{
        flexDirection: "row",
        color: location.pathname === "/reports" ? "var(--clr-m)" : "white",
        bgcolor: location.pathname === "/reports" ? "var(--clr-m)" : "white",
        "&:hover": {
          color: "white",
          bgcolor: "var(--clr-m)",
          "& .MuiBadge-root, & .MuiTypography-root": {
            color: "white",
          },
        },
      }}
      >
        <Link to="transactions" style={{display:"contents" }}>
          <Badge sx={{width:"56px" ,
        color: location.pathname === "/reports" ? "white" : "var(--clr-m)",}}>
          <ReceiptOutlinedIcon  sx={{fontSize:"2rem"}}/>
          </Badge>
          <Typography  
          sx={{
            color: location.pathname === "/reports" ? "white" : "var(--clr-m)" , fontSize:"1.7rem"
          }}
          > Transactions </Typography>
        </Link>
    </ListItemButton>

    {/* <ListItemButton>
      <Link to="" style={{display:"contents"}}>
          <Badge>
            <LayersIcon />
          </Badge>
          <Typography > integration </Typography>

      </Link>
    </ListItemButton> */}
 

  </React.Fragment>
  </>
)
};

export const SecondaryListItems = ()=>{
  const theme = useTheme();
  const location = useLocation();

  return(
    <>  
  <React.Fragment >
    {/* <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton> */}
        <ListItemButton
      sx={{
        flexDirection: "row",
        color: location.pathname === "/login" ? "var(--clr-m)" : "white",
        bgcolor: location.pathname === "/login" ? "var(--clr-m)" : "white",
        "&:hover": {
          color: "white",
          bgcolor: "var(--clr-m)",
          "& .MuiBadge-root, & .MuiTypography-root": {
            color: "white",
          },
        },
      }}
      >
        <Link to="" style={{display:"contents" }}>
          <Badge sx={{width:"56px" ,
        color: location.pathname === "/login" ? "white" : "var(--clr-m)",}}>
            <LogoutOutlined  sx={{fontSize:"2rem"}}/>
          </Badge>
          <Typography  
          sx={{
            color: location.pathname === "/login" ? "white" : "var(--clr-m)" , fontSize:"1.7rem"
          }}
          > Logout  </Typography>
        </Link>
    </ListItemButton>
{/* 
    <ListItemButton>
      <Badge  sx={{fontSize:"2rem"}}>
      
      </Badge>
      <Typography variant='span' > Logout</Typography>
    </ListItemButton> */}
  </React.Fragment>
    </>
)};
