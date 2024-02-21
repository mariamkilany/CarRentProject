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
import { Link } from 'react-router-dom';


export const mainListItems = (
  <React.Fragment>
    <ListItemButton sx={{flexDirection:"row"}} >
      <Link to='/dashboard' style={{display:"contents"}} >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard"  />
      </Link>
    </ListItemButton>

    <ListItemButton>
      <Link to="cars" style={{display:"contents"}}>
        <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Cars" />
      </Link>
  
    </ListItemButton>
    <ListItemButton>
     <Link to="" style={{display:"contents"}}>
      <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
     </Link>
    </ListItemButton>
    <ListItemButton>
        <Link to="" style={{display:"contents"}}>
          <ListItemIcon>
          <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </Link>
    </ListItemButton>

    <ListItemButton>
      <Link to="" style={{display:"contents"}}>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Integrations" />
      </Link>
    </ListItemButton>
 

  </React.Fragment>
);

export const secondaryListItems = (
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
    <ListItemButton>
      <ListItemIcon>
        <LogoutOutlined />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
  </React.Fragment>
);
