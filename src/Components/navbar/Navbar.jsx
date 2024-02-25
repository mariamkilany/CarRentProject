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
import MoreIcon from "@mui/icons-material/MoreVert";

import { Favorite, Login, Logout } from "@mui/icons-material";
import { Avatar, Button, Stack } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
	const { user } = useSelector(state => state.user);
	const [loggedIn, setLogged] = React.useState(user.length > 0 ? true : false);
	const navigate = useNavigate();

	React.useEffect(() => {
		console.log(loggedIn);
	}, [loggedIn]);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
	const handleLogin = () => {
		if (loggedIn) {
			setLogged(false);
		} else {
			navigate("/login");
		}
	};

	const handleProfileMenuOpen = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = event => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const menuId = "primary-search-account-menu";
	const renderMenu = !loggedIn && (
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
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>My account</MenuItem>
			<MenuItem onClick={handleMenuClose}>Signup</MenuItem>
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
					<Button>SignOut</Button>
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
				<Toolbar
					sx={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<Typography
						variant="h3"
						noWrap
						component="div"
						sx={{
							display: { xs: "none", sm: "block" },
							color: "#3563E9",
							marginRight: "100px",
						}}
					>
						<b> MORENT</b>
					</Typography>

					<NavLink className={({ isActive, isPending }) => (isPending || isActive ? styles.active : styles.disactive)} to="/home" end>
						Home
					</NavLink>

					<NavLink
						className={({ isActive, isPending }) => (isPending || isActive ? styles.active : styles.disactive)}
						to="/category"
						end
					>
						Category
					</NavLink>
					<NavLink
						className={({ isActive, isPending }) => (isPending || isActive ? styles.active : styles.disactive)}
						to="/wishlist"
						end
					>
						Wishlist
					</NavLink>
					<NavLink
						className={({ isActive, isPending }) => (isPending || isActive ? styles.active : styles.disactive)}
						to="/payment"
						end
					>
						Payment
					</NavLink>

					<Box sx={{ display: { xs: "none", md: "flex" } }}>
						{loggedIn && (
							<IconButton sx={{ fontSize: "10px" }} aria-label="show 4 new mails" color="inherit">
								<Badge badgeContent={4} color="error" sx={{ fontSize: "20px" }}>
									<Favorite sx={{ color: "#596780", fontSize: "30px" }} />
								</Badge>
							</IconButton>
						)}

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
								<Avatar sx={{ color: "#596780" }} />
							</IconButton>
						)}
						{!loggedIn && (
							<Box>
								<Button variant="contained" onClick={handleLogin}>
									<Login sx={{ mr: 1 }} />
									SignUp
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
									onClick={handleLogin}
								>
									<Logout sx={{ mr: 1 }} />
									Signout
								</Button>
							</Stack>
						)}
					</Box>
					<Box sx={{ display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="black"
						>
							<MoreIcon />
						</IconButton>
					</Box>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
		</Box>
	);
};
export default Navbar;
