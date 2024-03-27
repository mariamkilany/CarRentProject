import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import styles from "./Navbar.module.css";
import AccountCircle from "@mui/icons-material/AccountCircle";
// import IconButton from "@mui/material/IconButton";
import { Favorite, Login, Logout } from "@mui/icons-material";
import { Avatar, Button, Stack } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { googleLogout } from "@react-oauth/google";
import { setUser } from "../../features/authentication/authSlice";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const { user } = useSelector((state) => state.user);
  const [loggedIn, setLogged] = React.useState(user ? true : false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setCookie = (payload) => {
    const d = new Date();
    d.setTime(d.getTime() + 2 * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie =
      "user=" + JSON.stringify(payload) + ";" + expires + ";path=/";
  };

  React.useEffect(() => {
    console.log(user);
    console.log(loggedIn);
    setLogged(user ? true : false);
  }, []);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleLogin = () => {
    if (loggedIn) {
      setLogged(false);
    } else {
      navigate("/login");
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = loggedIn && (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>{user.name}</MenuItem>
      <MenuItem onClick={handleMenuClose}>{user.email}</MenuItem>
      {user.isAdmin && (
        <a
          href="/dashboard"
          onClick={handleMenuClose}
          style={{
            color: "#596780",
            textDecoration: "none",
          }}
        >
          <MenuItem>Dashboard</MenuItem>
        </a>
      )}
      {/* <MenuItem onClick={handleMenuClose}>Signup</MenuItem> */}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {loggedIn && (
        <MenuItem>
          <IconButton size="large" aria-label=" 2 " color="inherit">
            <Badge badgeContent={17} color="error" sx={{ fontSize: "15px" }}>
              <Favorite />
            </Badge>
          </IconButton>
          <p> Favorites</p>
        </MenuItem>
      )}
      {loggedIn && (
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      )}
      {!loggedIn && (
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <Login />
          </IconButton>
          <Button>Signup</Button>
        </MenuItem>
      )}
      {loggedIn && (
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <Logout />
          </IconButton>
          <Button
            onClick={() => {
              handleLogin();
              googleLogout();
              dispatch(setUser({ user: {} }));
              setCookie("");
              navigate("/");
            }}
          >
            SignOut
          </Button>
        </MenuItem>
      )}
    </Menu>
  );

  return (
    <Box sx={{ display: "flex", boxShadow: "0 !important" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#ffffff",
          padding: "15px",
          boxShadow: "none !important",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            justifyContent: "space-around",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography
            component="div"
            variant="h3"
            noWrap
            sx={{
              color: "#3563E9",
            }}
          >
            <b> MORENT</b>
          </Typography>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending || isActive ? styles.active : styles.disactive
            }
            to="/home"
            end
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending || isActive ? styles.active : styles.disactive
            }
            to="/category"
            end
          >
            Category
          </NavLink>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending || isActive ? styles.active : styles.disactive
            }
            to="/wishlist"
            end
          >
            Wishlist
          </NavLink>
          <Box sx={{ display: "flex" }}>
            {loggedIn && (
              <IconButton
                size="xx-large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Avatar sx={{ color: "#596780" }} src={user.avatar} />
              </IconButton>
            )}
            {!loggedIn && (
              <Box>
                <Button variant="contained" onClick={handleLogin}>
                  <Login sx={{ mr: 1 }} />
                  SignIn
                </Button>
              </Box>
            )}
            {loggedIn && (
              <Stack justifyContent="center">
                <Button
                  variant="contained"
                  sx={{
                    ml: 4,
                  }}
                  onClick={() => {
                    handleLogin();
                    googleLogout();
                    dispatch(setUser({ user: {} }));
                    setCookie("");
                    navigate("/");
                  }}
                >
                  <Logout sx={{ mr: 1 }} />
                  Signout
                </Button>
              </Stack>
            )}
          </Box>
        </Box>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};
export default Navbar;
