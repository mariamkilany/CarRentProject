import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import { ArrowBack, LogoutOutlined } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { Badge, Typography } from "@mui/material";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { googleLogout } from "@react-oauth/google";
import { setUser } from "../../features/authentication/authSlice";

export const MainListItems = () => {
  const theme = useTheme();
  const location = useLocation();

  return (
    <>
      <React.Fragment>
        <ListItemButton
          sx={{
            flexDirection: "row",
            color:
              location.pathname === "/dashboard" ? "var(--clr-m)" : "white",
            bgcolor:
              location.pathname === "/dashboard" ? "var(--clr-m)" : "white",
            "&:hover": {
              color: "white",
              bgcolor: "var(--clr-m)",
              "& .MuiBadge-root, & .MuiTypography-root": {
                color: "white",
              },
            },
          }}
        >
          <Link to="/dashboard" style={{ display: "contents" }}>
            <Badge
              sx={{
                width: "56px",
                color:
                  location.pathname === "/dashboard" ? "white" : "var(--clr-m)",
              }}
            >
              <DashboardIcon sx={{ fontSize: "2rem" }} />
            </Badge>
            <Typography
              sx={{
                color:
                  location.pathname === "/dashboard" ? "white" : "var(--clr-m)",
                fontSize: "1.7rem",
              }}
            >
              Dashboard
            </Typography>
          </Link>
        </ListItemButton>

        <ListItemButton
          sx={{
            flexDirection: "row",
            color:
              location.pathname === "/dashboard/cars"
                ? "var(--clr-m)"
                : "white",
            bgcolor:
              location.pathname === "/dashboard/cars"
                ? "var(--clr-m)"
                : "white",
            "&:hover": {
              color: "white",
              bgcolor: "var(--clr-m)",
              "& .MuiBadge-root, & .MuiTypography-root": {
                color: "white",
              },
            },
          }}
        >
          <Link to="cars" style={{ display: "contents" }}>
            <Badge
              sx={{
                width: "56px",
                color: "var(  --clr-m-800)",
                color:
                  location.pathname === "/dashboard/cars"
                    ? "white"
                    : "var(--clr-m)",
              }}
            >
              <DirectionsCarFilledOutlinedIcon sx={{ fontSize: "2rem" }} />
            </Badge>
            <Typography
              sx={{
                color:
                  location.pathname === "/dashboard/cars"
                    ? "white"
                    : "var(--clr-m)",
                fontSize: "1.7rem",
              }}
            >
              {" "}
              Cars{" "}
            </Typography>
          </Link>
        </ListItemButton>
        <ListItemButton
          sx={{
            flexDirection: "row",
            color:
              location.pathname === "dashboard/customers"
                ? "var(--clr-m)"
                : "white",
            bgcolor:
              location.pathname === "dashboard/customers"
                ? "var(--clr-m)"
                : "white",
            "&:hover": {
              color: "white",
              bgcolor: "var(--clr-m)",
              "& .MuiBadge-root, & .MuiTypography-root": {
                color: "white",
              },
            },
          }}
        >
          <Link to="customers" style={{ display: "contents" }}>
            <Badge
              sx={{
                width: "56px",
                color: "var(  --clr-m-800)",
                color:
                  location.pathname === "dashboard/customers"
                    ? "white"
                    : "var(--clr-m)",
              }}
            >
              <PeopleIcon sx={{ fontSize: "2rem" }} />
            </Badge>
            <Typography
              sx={{
                color:
                  location.pathname === "dashboard/customers"
                    ? "white"
                    : "var(--clr-m)",
                fontSize: "1.7rem",
              }}
            >
              {" "}
              Customers{" "}
            </Typography>
          </Link>
        </ListItemButton>
      </React.Fragment>
    </>
  );
};

export const SecondaryListItems = () => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setCookie = (payload) => {
    const d = new Date();
    d.setTime(d.getTime() + 2 * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie =
      "user=" + JSON.stringify(payload) + ";" + expires + ";path=/";
  };
  return (
    <>
      <React.Fragment>
        <ListItemButton
          onClick={() => {
            navigate("/home");
          }}
          sx={{
            flexDirection: "row",
            "&:hover": {
              color: "white",
              bgcolor: "var(--clr-m)",
              "& .MuiBadge-root, & .MuiTypography-root": {
                color: "white",
              },
            },
          }}
        >
          <Link to="" style={{ display: "contents" }}>
            <Badge
              sx={{
                width: "56px",
                color:
                  location.pathname === "/login" ? "white" : "var(--clr-m)",
              }}
            >
              <ArrowBack sx={{ fontSize: "2rem" }} />
            </Badge>
            <Typography
              sx={{
                color:
                  location.pathname === "/login" ? "white" : "var(--clr-m)",
                fontSize: "1.7rem",
              }}
            >
              {" "}
              Back To Home{" "}
            </Typography>
          </Link>
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            googleLogout();
            dispatch(setUser(null));
            setCookie("");
            navigate("/");
          }}
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
          <Link to="" style={{ display: "contents" }}>
            <Badge
              sx={{
                width: "56px",
                color:
                  location.pathname === "/login" ? "white" : "var(--clr-m)",
              }}
            >
              <LogoutOutlined sx={{ fontSize: "2rem" }} />
            </Badge>
            <Typography
              sx={{
                color:
                  location.pathname === "/login" ? "white" : "var(--clr-m)",
                fontSize: "1.7rem",
              }}
            >
              {" "}
              Logout{" "}
            </Typography>
          </Link>
        </ListItemButton>
      </React.Fragment>
    </>
  );
};
